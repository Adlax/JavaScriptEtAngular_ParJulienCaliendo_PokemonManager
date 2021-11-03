// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  SELENIUM_PROMISE_MANAGER: true,
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 999999,
    print: function () { }
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: 'pretty' } }));
    browser.driver.manage().window().setSize(1366, 1024);
    // track mouse movements
    // var trackMouse = function() {
    //
    //   angular.module('trackMouse', []).run(function($document) {
    //
    //     function addDot(ev) {
    //
    //       var color = 'black',
    //         size = 6;
    //
    //       switch (ev.type) {
    //         case 'click':
    //           color = 'red';
    //           break;
    //         case 'dblclick':
    //           color = 'blue';
    //           break;
    //         case 'mousemove':
    //           color = 'green';
    //           break;
    //       }
    //
    //       var dotEl = $('<div></div>')
    //         .css({
    //           position: 'fixed',
    //           height: size + 'px',
    //           width: size + 'px',
    //           'background-color': color,
    //           top: ev.clientY,
    //           left: ev.clientX,
    //
    //           'z-index': 9999,
    //
    //           // make sure this dot won't interfere with the mouse events of other elements
    //           'pointer-events': 'none'
    //         })
    //         .appendTo('body');
    //
    //       setTimeout(function() {
    //         dotEl.remove();
    //       }, 1000)
    //
    //     }
    //
    //     $document.on({
    //       click: addDot,
    //       dblclick: addDot,
    //       mousemove: addDot
    //     });
    //
    //   });
    //
    // };
    // browser.addMockModule('trackMouse', trackMouse);
  }
};
