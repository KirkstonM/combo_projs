import React, {lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
import config from './tsconfig.js';
import HomeHOC from "./container/Home"
import AboutHOC from "./container/About/About.jsx";
import smartMapping from "./SmartComponents.jsx";
const DynamicRouter = () => {

    const HOC = {
        home : HomeHOC,
        about : AboutHOC,
    }
    return (
        <>
            <Routes>
                {config.map(({ path, name, components}) => {
                    const enabledComponents = components
                        .filter(comp => comp.enable) // Only enabled components
                        .map(comp => {
                            const Component = smartMapping[comp.name]; // Get actual component from mapping
                            const WrappedComponent = HOC[name](Component); // Wrap with HOC
                            // Pass both props and data to the component
                            return (props) => <WrappedComponent data={comp.data} {...props}/>;
                        });
                    const SmartRender = () => (
                        <>
                            {enabledComponents.map((WrappedComponent, index) => (
                                <WrappedComponent key={index}/>
                            ))}
                        </>
                    );
                    return (
                       <Route
                       key={path}
                       path={path}
                       exact
                       element={<SmartRender/>}
                       />
                    )
                })}
            </Routes>
        </>
    );
};

export default DynamicRouter;
