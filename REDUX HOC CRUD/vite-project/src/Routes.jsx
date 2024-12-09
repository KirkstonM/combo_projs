import React, { lazy } from "react";
import Test from "./container/Test";
const Home = lazy(() => import("./container/Home/index.jsx"));
const About = lazy(() => import("./container/About/About.jsx"));


export const routes = [
    // {
    //     path : "/web/home",
    //     Component : Home
    // },
    // {
    //     path : "/web/about",
    //     Component : About
    // },
    {
        path : "/web/test",
        Component : Test
    }
];

