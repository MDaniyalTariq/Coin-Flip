import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer-main MuiBox-root css-0">
            <div className="container MuiBox-root css-0">
                <div className="footer-row MuiBox-root css-0">
                    <ul className="MuiList-root MuiList-padding footer-nav css-1ontqvh">
                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding footer-nav-item css-1yo8bqd">
                            <a className="footer-nav-link" href="/">Faq</a>
                        </li>
                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding footer-nav-item css-1yo8bqd"><a className="footer-nav-link" href="/">HOW TO PLAY</a></li>
                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding footer-nav-item css-1yo8bqd"><a className="footer-nav-link" href="/">T&amp;C</a></li>
                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding footer-nav-item css-1yo8bqd"><a className="footer-nav-link" href="/">AML</a></li>
                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding footer-nav-item css-1yo8bqd"><a className="footer-nav-link" href="/">KYC</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
