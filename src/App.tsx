import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {createContext} from "react";
import {Provider} from "react-redux";
import {store} from "./store/store";

export const MessageContext = createContext('');

function App() {
    const message = "Hello There";
    return (
        <Provider store={store}>
            <MessageContext.Provider value={message}>
                <div className="app">
                    <Counter/>
                </div>
            </MessageContext.Provider>
        </Provider>
    );
}
export default App;