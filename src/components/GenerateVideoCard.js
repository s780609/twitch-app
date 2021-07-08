import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import GetToken from '../feature/GetToken';
import GetAccess from "../feature/GetAccess";
import GenerateIFrame from "../components/GenerateIFrame";
import IFrame from "./IFrame";
import { Card, CardColumns, Alert, Container } from 'react-bootstrap';

function GenerateVideoCard({ gameName }) {
    console.log("render");
    const dispatch = useDispatch();

    const [accessToken, setAccessToken] = useState("");
    const [twitchGameData, setTwitchGameData] = useState([]);
    const [gameId, setGameId] = useState("");

    const clientId = useSelector((state) => state.clientId);
    const redirect_uri = useSelector((state) => state.redirect_uri);
    const parentDomain = useSelector(state => state.parentDomain);

    useEffect(async () => {
        await OIDCImplicitCodeFlow();
    }, []);

    async function OIDCImplicitCodeFlow() {
        // On your server, get an access token and ID token by making this request:
        // json POST https://id.twitch.tv/oauth2/token ?client_id=<your client ID> &client_secret=<your client secret> &code=<authorization code received above> &grant_type=authorization_code &redirect_uri=<your registered redirect URI>
        const flagString = document.location.hash.substr(1);

        if (flagString == "") {
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
            console.log("access token is empty");
            return;
        }

        const response = await axios.get(`https://api.twitch.tv/helix/games?name=${gameName}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Client-Id": `${clientId}`
            }
        });

        if (response.status == 200 && response.data != null && response.data.data.length != 0) {
            setGameId(response.data.data[0].id);
            console.log(response.data.data[0].id);
        }
        else {
            console.log(`response's data is empty`);
            console.log(response);
        }

        // if (response.data.data == null || response.data.data.length == 0) {
        //     return;
        // }

        // const gameId = response.data.data[0].id;

        // const responseGameVideo = await axios.get(
        //     `https://api.twitch.tv/helix/videos?game_id=${gameId}&first=20`
        //     //`https://api.twitch.tv/helix/videos?game_id=1848487811&first=20`
        //     , {
        //         headers: {
        //             Authorization: `Bearer ${accessToken}`,
        //             "Client-Id": `${clientId}`
        //         }
        //     });
        // console.log(responseGameVideo);
        // setTwitchGameData(responseGameVideo.data.data);
    }, [accessToken, gameName]);

    // get videos by gameId
    useEffect(async () => {
        if (!gameId) {
            return;
        }

        const responseGameVideo = await axios.get(
            `https://api.twitch.tv/helix/videos?game_id=${gameId}&first=20`
            //`https://api.twitch.tv/helix/videos?game_id=1848487811&first=20`
            , {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Client-Id": `${clientId}`
                }
            });

        setTwitchGameData(responseGameVideo.data.data);
    }, [gameId]);

    return (<Container >
        {(twitchGameData == null || twitchGameData.length == 0) ? <Alert show={true} variant="info">查無資料</Alert> : <></>}
        <GenerateIFrame twitchGameData={twitchGameData} parentDomain={parentDomain}></GenerateIFrame>
    </Container >);
}

export default GenerateVideoCard;