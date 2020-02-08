import React, {Fragment} from "react";
import App from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/global.css";

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Fragment>
                <Component {...pageProps} />
            </Fragment>
        );
    }
}

export default MyApp;