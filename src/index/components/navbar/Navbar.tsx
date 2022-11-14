import './Navbar.scss';
import reactLogo from '../../../assets/react.svg';
import React, { useState } from 'react';

export function Navbar() {

    const [routerLinks, setRouterLinks] = useState<string[]>([
        'Artigos',
        'ferramentas e utilitários'
    ])

    return (
        <div className="nav-component fixed-top">
            <div className="nav-component-bar">
                <nav className="nav-ref navbar navbar-expand-lg sticky-top">
                    <div className="container-ref container space-between text-uppercase"></div>
                    <a className="navbar-brand d-flex justify-content-center align-items-center text-white">
                        <img className="me-1" src={reactLogo} alt="Logo" width="32" height="32" />
                        <span>Estumano</span>
                    </a>
                    <button className="navbar-toggler border-0 text-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <div className="d-inline-flex w-100">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-0 mb-lg-0 w-100 justify-content-end">
                                <li className="nav-item">
                                    {
                                        React.Children.toArray(
                                            routerLinks.map((routerLink) =>
                                                <a className="nav-link d-flex justify-content-start align-items-center text-decoration-none text-white" style={{ padding: '8px 16px' }}>
                                                    <span className="text-uppercase" style={{ fontSize: '12px', cursor: 'pointer' }}> {routerLink} </span>
                                                </a>
                                            )
                                        )
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}