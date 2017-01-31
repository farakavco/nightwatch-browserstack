module.exports = {
    'vjsPlayer basic Functionality': function (browser) {
        browser
            .url('http://127.0.0.1:8004/dist/')
            .waitForElementVisible('.vjs-big-play-button', 1000)
            .click('.vjs-big-play-button', function () {
                browser.pause(10000);
                browser.click('.vjs-theater-mode-btn');
                browser.pause(1000);
                browser.click('.vjs-theater-mode-btn');
                browser.click('.vjs-fullscreen-control');
                browser.pause(1000);
                browser.click('.vjs-fullscreen-control');
                browser.click('.vjs-volume-menu-button');
                browser.pause(1000);
                browser.click('.vjs-volume-menu-button');
                this.getLog('browser', function (logEntriesArray) {
                    console.log('Log length: ' + logEntriesArray.length);
                    logEntriesArray.forEach(function (log) {
                        if (log.level != 'WARNING' && log.level != 'INFO') {
                            console.log('[' + log.level + '] ' + log.timestamp + ' : ' + log.message);
                        }
                    });
                });
                browser.end();
            });
    }
};
