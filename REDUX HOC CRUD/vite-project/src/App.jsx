import {BrowserRouter as Router} from "react-router-dom";
import React, {Suspense } from "react";
import { useSelector } from "react-redux";
import DynamicRouter from "./DynamicRouter.jsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function App(props) {
    const mode = useSelector((state) => state.theme)

    const darkTheme = createTheme({
     palette: {
        mode: mode,
        },
     });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <DynamicRouter />
            </Suspense>
        </Router>
        </ThemeProvider>
    );
}

export default App
