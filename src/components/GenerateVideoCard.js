import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import GetToken from '../feature/GetToken';
import GetAccess from "../feature/GetAccess";
import GenerateIFrame from "../components/GenerateIFrame";
import IFrame from "./IFrame";
import { CardColumns } from 'react-bootstrap';

function GenerateVideoCard() {
    const dispatch = useDispatch();

    const [accessToken, setAccessToken] = useState("");
    const [twitchGameData, setTwitchGameData] = useState([]);

    const clientId = useSelector((state) => state.clientId);
    const redirect_uri = useSelector((state) => state.redirect_uri);
    const parentDomain = useSelector(state => state.parentDomain);

    // setAccessToken(useSelector((state) => state.accessToken));

    useEffect(async () => {
        await OIDCImplicitCodeFlow();
    }, []);

    async function OIDCImplicitCodeFlow() {
        // On your server, get an access token and ID token by making this request:
        // json POST https://id.twitch.tv/oauth2/token ?client_id=<your client ID> &client_secret=<your client secret> &code=<authorization code received above> &grant_type=authorization_code &redirect_uri=<your registered redirect URI>
        const flagString = document.location.hash.substr(1);

        if (flagString == "") {
            // var claims = { "id_token": { "email_verified": null } };
            // console.log(`https://id.twitch.tv/oauth2/authorize?response_type=token+id_token&client_id=${clientId}&redirect_uri=${redirect_uri}&&scope=viewing_activity_read+openid&claims=${claims}`);
            // const twitchUrl = `https://id.twitch.tv/oauth2/authorize?response_type=token+id_token&client_id=${clientId}&redirect_uri=${redirect_uri}&&scope=viewing_activity_read+openid&claims=${claims}`;

            await GetAccess(clientId, redirect_uri);
        }
        else {
            const access_Token = await GetToken(flagString);
            dispatch({ type: "accessToken", accessToken: access_Token });
            setAccessToken(access_Token);
        }
    }

    // get data of game id 
    useEffect(async () => {
        if (accessToken == "") {
            return;
        }

        const response = await axios.get(`https://api.twitch.tv/helix/games/top`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Client-Id": `${clientId}`
            }
        });

        const gameId = response.data.data[4].id;
        // console.log(` gameId == ${gameId}`);
        // console.log(`Bearer ${accessToken}`);
        // console.log(`${clientId}`);
        const responseGameVideo = await axios.get(`https://api.twitch.tv/helix/videos?game_id=${gameId}&first=20`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Client-Id": `${clientId}`
            }
        });
        console.log(responseGameVideo);
        setTwitchGameData(responseGameVideo.data.data);
    }, [accessToken]);

    return (<>
        <GenerateIFrame twitchGameData={twitchGameData} parentDomain={parentDomain}></GenerateIFrame>
    </>);
}

export default GenerateVideoCard;