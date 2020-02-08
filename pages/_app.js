import React from "react";
import App, { Container } from "next/app";
// import { Provider } from "react-redux";
// import createStore from "../store";

// export const store = createStore();
import "bootstrap/dist/css/bootstrap.min.css";

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
            <Container>
                {/* <Provider store={store}> */}
                    <Component {...pageProps} />
                {/* </Provider> */}
            </Container>
        );
    }
}

export default MyApp;