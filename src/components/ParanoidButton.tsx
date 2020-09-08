// object that calls the backend
import React from 'react';
import { Button } from '@chakra-ui/core';
import axios from 'axios';

const time: Number = 120;
const longitude = 40;
const latitude = -10;

export const ParanoidMap = () => {
    return (
    <div>
        <Button onClick={() => fetchContacts()}>
            Go for a Walk?!
        </Button>
    </div>
    );
}

// TODO: Handle Error in case server is down
async function fetchContacts() {
    // const response = await axios.get("http://localhost:4000/stay/?t=120&long=40.444444&lat=-10");
    const response = await axios.get("http://localhost:4000/walk");
    console.log(response)
    return response;
}
