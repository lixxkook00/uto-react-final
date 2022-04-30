import React from 'react';
import './LoadingScreen.scss'

function LoadingScreen(props) {
    return (
        <div className="loading">
            <div className="loading-content">
                <img src="/img/loading.gif" alt="" />
                <img className="logo-loading" src="/img/text logo image.png" alt="" />
            </div>
        </div>
    );
}

export default LoadingScreen;