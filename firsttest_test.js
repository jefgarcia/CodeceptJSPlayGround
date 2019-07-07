/// <reference path="./steps.d.ts" />
Feature('Firsttest');

Scenario('test something', (I) => {
    I.amOnPage('http://automationpractice.com/index.php');
    I.moveCursorTo('//*[@id="block_top_menu"]/ul/li[2]', 1, 1);
    I.wait(2);
    //I.wait('Evening Dresses');
    I.moveCursorTo('//*[@id="block_top_menu"]/ul/li[2]/ul/li[2]/a', 1, 1);
    I.click('//*[@id="block_top_menu"]/ul/li[2]/ul/li[2]/a');
    I.see('Dresses');
});
