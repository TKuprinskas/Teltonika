import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { GlobalStyle } from './styles/styles';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import PageRouter from './Routes';

let persistor = persistStore(store);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <GlobalStyle />
                <PageRouter />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
