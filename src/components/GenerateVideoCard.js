import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import GetToken from '../feature/GetToken';
import GetAccess from "../feature/GetAccess";
import GenerateIFrame from "../components/GenerateIFrame";
import IFrame from "./IFrame";
import { Card, CardColumns, Alert, Container } from 'react-bootstrap';
import loader from 'archer-loader';

function GenerateVideoCard({ gameName }) {
    const dispatch = useDispatch();

    const [twitchGameData, setTwitchGameData] = useState([]);
    //const [gameId, setGameId] = useState("");
    const accessToken = useSelector((state) => state.accessToken);
    const clientId = useSelector((state) => state.clientId);
    const redirect_uri = useSelector((state) => state.redirect_uri);
    const parentDomain = useSelector(state => state.parentDomain);

    useEffect(async () => {
        if (accessToken !== "") {
            return;
        }

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
        }
    }

    // get data of game id and data
    useEffect(async () => {
        if (accessToken == "") {
            return;
        }

        loader.show("#255AC4", 1.5, "Loading...");

        if (gameName == "") {
            const responseData = await getTopGames();
            console.log(responseData)
            for (let i = 0; i < responseData.length; i++) {

                let gameId = responseData[i].id;
                console.log(gameId);
                const data = await getGameData(
                    gameId
                );

                if (data != null && data.length != 0) {
                    setTwitchGameData(data);
                    return;
                }
            }

            const data = await getDevelopeVideo();
            setTwitchGameData(data);

        }
        else {
            // use the search categories api can query game id by fuzzy search
            const responseData = await getGameIds();

            if (responseData != undefined && responseData.length != 0) {
                for (let i = 0; i < responseData.length; i++) {
                    let gameId = responseData[i].id;
                    console.log(gameId);
                    const data = await getGameData(
                        gameId
                        //`25287`
                    );

                    if (data != null && data.length != 0) {
                        setTwitchGameData(data);
                        return;
                    }
                }
            }
            else {
                const data = await getDevelopeVideo();
                setTwitchGameData(data);
            }
        }

        loader.close();
    }, [accessToken, gameName]);

    const getGameIds = async () => {
        const searchUrl = //`https://api.twitch.tv/helix/search/categories?query=${gameName}`;
            `https://api.twitch.tv/helix/games?name=${gameName}`;

        // use the search categories api can query game id by fuzzy search
        const response = await axios.get(searchUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Client-Id": `${clientId}`
            }
        });

        if (response.status == 200 && response.data != null && response.data.data.length != 0) {
            return response.data.data;
        }
    }

    // get videos by gameId
    const getGameData = async (gameId) => {
        if (!gameId) {
            return;
        }

        // 這段請求一定要用完整的遊戲名稱 ex: League of Legends、fortnite、minecraft、apex legends
        const responseGameVideo = await axios.get(
            `https://api.twitch.tv/helix/videos?game_id=${gameId}&first=20`
            , {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Client-Id": `${clientId}`
                }
            });

        return responseGameVideo.data.data;
    }

    // get developer video
    const getDevelopeVideo = async () => {
        try {
            const response = await axios.get(
                `https://api.twitch.tv/helix/videos?id=335921245`
                , {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Client-Id": `${clientId}`
                    }
                });

            return response.data.data;
        }
        catch (err) {
            console.error(err);
            alert(err.message);
        }
    }

    const getTopGames = async () => {
        const response = await axios.get(
            `https://api.twitch.tv/helix/games/top`
            , {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Client-Id": `${clientId}`
                }
            });

        return response.data.data;
    }

    return (<Container fluid style={{ display: "flex", flexWrap: "wrap" }}>
        {(twitchGameData == null || twitchGameData.length == 0) ? <Alert show={true} variant="info">沒有影片</Alert> : <></>}
        <GenerateIFrame twitchGameData={twitchGameData} parentDomain={parentDomain}></GenerateIFrame>
    </Container >);
}

export default GenerateVideoCard;