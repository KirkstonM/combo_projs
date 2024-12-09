import React from 'react';
import HomeHOC from "../Home/index.jsx";
import { Button } from '@mui/material';

const Test = ({
data  : { title, style },
    theme
}) => {

    return (
        <>
            <div style={style}>
                <h1>{theme}</h1>
                <Button variant="contained" color="success">
                    Success
                </Button>            </div>

        </>
    )
}
export default Test
