import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Card, CardColumns } from 'react-bootstrap';

function IFrame({ height, width, allowfullscreen, autoplay, videoId, title, description, parent }) {
    return (
        // <Card border="primary">
        //     <Card.Body>
        //         <Card.Title>{title}</Card.Title>
        <div style={{ width: "400px", margin: "10px", marginRight: "-50px", display: "inline-block" }}><h3>{title}</h3>
            <iframe
                src={`https://player.twitch.tv/?autoplay=${autoplay == null ? false : true}&parent=${parent}&video=${videoId}`}
                height={height == null ? 300 : height}
                width={width == null ? 400 : width}
                allowfullscreen={allowfullscreen == null ? `allowFullScreen` : allowfullscreen}
            ></iframe>
        </div>
        //     </Card.Body>
        // </Card>
    );
}

export default IFrame;