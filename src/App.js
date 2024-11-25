import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Game } from './modules/game/containers';
import { Editor } from './modules/editor/containers';
import { Home } from './modules/home/containers';
import { onOpenUrl } from '@tauri-apps/plugin-deep-link'
import './modules/base/css/app.scss';

const App = () => {
    const [userAddress, setUserAddress] = React.useState(null);
    React.useEffect(() => {
        const unregister = onOpenUrl(url => {
            const address = url[0].split('noodle-quest://open/')[1];
            setUserAddress(address);
        });
        return () => {
            unregister();
        };
    }, []);
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route exact path="/game" render={() => <Game userAddress={userAddress}
                />} />
                <Route exact path="/editor" render={() => <Editor
                />} />
            </BrowserRouter>
        </div>
    );
};

export default App;
