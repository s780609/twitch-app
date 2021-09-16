import React, { useEffect, useState } from 'react';
import { Card, CardColumns, Figure } from 'react-bootstrap';

function IFrame({ height, width, allowfullscreen, autoplay, videoId, title, description, parent }) {
    return (
        <Card border="light" style={{ width: '400px' }}>
            {/* <div style={{ width: "400px", margin: "10px", marginRight: "-50px", display: "inline-block" }}> */}
            <iframe
                src={`https://player.twitch.tv/?autoplay=${autoplay == null ? false : true}&parent=${parent}&video=${videoId}`}
                height={height == null ? 300 : height}
                width={width == null ? 400 : width}
                allowfullscreen={allowfullscreen == null ? true : allowfullscreen}
            ></iframe>
            {/* </div> */}
            <Card.Header>{title}</Card.Header>
            <Card.Body>
            </Card.Body>
        </Card>
    );
}

export default IFrame;