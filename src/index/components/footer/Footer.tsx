import React, { useState } from 'react';
import './Footer.scss';

export function Footer() {

    const [socialMediaLinks, setRouterLinks] = useState<any[]>([
        {
            fa: 'fa-regular fa-envelope',
            path: 'mailto:joelestumano@gmail.com',
            label: 'joelestumano@gmail.com',
        },
        {
            fa: 'fa-brands fa-github',
            path: 'https://github.com/joel-estumano/',
            label: 'github',
        },
        {
            fa: 'fa-brands fa-linkedin',
            path: 'https://www.linkedin.com/in/joel-estumano/',
            label: 'linkedin',
        },
    ])

    return (
        <footer>
            <div className="footer-component">
                <div className="footer-component-bar">
                    <nav className="footer-ref navbar">
                        <div className="container space-between text-uppercase">
                            {/* <span>{{ copyright | copyright}}</span> */}
                            <ul className="list-group list-unstyled list-group-horizontal">
                                {
                                    React.Children.toArray(
                                        socialMediaLinks.map((social) =>
                                            <li className="nav-item">
                                                <a className="nav-link" href={`${social.path}`} target="_blank">
                                                    <i className={`${social.fa}`}></i>
                                                </a>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    )
}