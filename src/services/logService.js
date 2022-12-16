// import Raven from "raven-js";

function init() {
    // Raven.config('https://5b8e7ba493924c26bce1d7df56c5ad5c@o4504318707630080.ingest.sentry.io/4504318735876096', {
    //     release: '1-0-0',
    //     environment: 'development-test',
    // }).install();
}

function log(error) {
    console.log(error);
    // Raven.captureException(error);
}

export default {
    init,
    log
}