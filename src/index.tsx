import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {StoreProvider} from './Store'
import HomePage from './pages/HomePage';
import FavPage from './pages/FavPage';
import {Router, RouteComponentProps} from '@reach/router'

const RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps) => props.pageComponent

const container: HTMLElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);

root.render (
    <StoreProvider>
        <Router>
          <App path="/">
            <RouterPage pageComponent={<HomePage />} path='/' />
            <RouterPage pageComponent={<FavPage />} path='/faves' />
          </App>
        </Router>
    </StoreProvider>
)
