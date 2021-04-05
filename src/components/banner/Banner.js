import React from 'react';
import './Banner.css';
class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <div className="container">
                    <div className="content-banner cart">
                       Organic Bio</div>
                    <div className="deatil-content">
                        <p>HOME</p>
                        <li>BLOG</li>
                        <li>GALLERY</li>
                        <li>YOGURT ORGANIC BIO</li>
                    </div>
                </div>
            </div>
        );
    }
}
export default Banner;