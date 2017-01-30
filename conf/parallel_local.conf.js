var browserstack = require('browserstack-local');
require('../env.js');
nightwatch_config = {
    src_folders: ["tests/local"],

    selenium: {
        "start_process": false,
        "host": "hub-cloud.browserstack.com",
        "port": 80
    },

    common_capabilities: {
        'build': 'nightwatch-browserstack',
        'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
        'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
        'browserstack.debug': true,
        'browserstack.local': true
    },

    // DOC: https://www.browserstack.com/automate/node#setting-os-and-browser`
    test_settings: {
        default: {},
        chrome: {
            desiredCapabilities: {
                browser: "chrome",
                'browser_version': '37.0',
                'os': 'Windows',
                'os_version': '10'
            }
        },
        firefox: {
            desiredCapabilities: {
                browser: "firefox",
                'browser_version': '32.0',
                'os': 'Windows',
                'os_version': '8'
            }
        },
        safari: {
            desiredCapabilities: {
                browser: "safari",
                'browser_version': '10',
                'os': 'Windows',
                'os_version': '10'
            }
        },
        ie: {
            'browserName': 'IE',
            'browser_version': '11.0',
            'os': 'Windows',
            'os_version': '8',
            'resolution': '1024x768'
        },
        iphone: {
            'browserName': 'iPhone',
            'platform': 'MAC',
            'device': 'iPhone 6S Plus'
        },
        android: {
            'browserName': 'android',
            'platform': 'ANDROID',
            'device': 'Google Nexus 5'
        }
    }
};

// Code to support common capabilites
for (var i in nightwatch_config.test_settings) {
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
    config['desiredCapabilities'] = config['desiredCapabilities'] || {};
    for (var j in nightwatch_config.common_capabilities) {
        config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
    }
}

module.exports = nightwatch_config;
