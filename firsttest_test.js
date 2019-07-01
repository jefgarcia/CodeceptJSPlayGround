/// <reference path="./steps.d.ts" />
Feature('Firsttest');

Scenario('test something', (I) => {
    I.amOnPage('https://github.com');
    I.see('GitHub');

});
