module.exports = {
    'vjsPlayer basic Functionality': function (browser) {
        browser
            .url('http://127.0.0.1:8004/dist/')
            .waitForElementVisible('.vjs-big-play-button', 1000)
            .click('.vjs-big-play-button', function () {
                browser.pause(10000);
                browser.getLogTypes(function (result) {
                    console.log(result);
                });
                browser.getLog('browser', function (result) {
                    console.log(result);
                });
                browser.end()
            })
    }
};
