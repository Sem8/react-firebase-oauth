import React from 'react';
import PropTypes from 'prop-types';

import './Layout.css';

const propTypes = {
    children: PropTypes.node.isRequired,
    contentCenter: PropTypes.bool
};

const defaultProps = {
    contentCenter: false
};

const Layout = ({ children, contentCenter }) => {
    return (
        <Section>
            <header>
                <h1>OAuth Authentication with Firbase</h1>
            </header>
            <main className={contentCenter ? 'content-center' : ''}>{children}</main>
            <footer>
                <p>
                    Made with { ' '}
                    <span role="img" aria-label='heart emoji'>
                        ??
                    </span> {' '}
                    By Sem Limi
                </p>
            </footer>

        </Section>
    );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;