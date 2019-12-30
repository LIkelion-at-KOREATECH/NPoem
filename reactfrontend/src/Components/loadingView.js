import React, { Component } from 'react';
import './loadingView.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    showloading() {
        return (
                <div className="row">
                    <a className="intro-banner-vdo-play-btn pinkBg" target="_blank">
                        <i className="glyphicon glyphicon-play whiteText" aria-hidden="true"></i>
                        <span className="ripple pinkBg"></span>
                        <span className="ripple pinkBg"></span>
                        <span className="ripple pinkBg"></span>
                    </a>
                </div>
            
        )
    },

}