/**
 * @description - redux-todo-list e2e suits
 * @author - yang.yuncai <383235388@qq.com>
 */

/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');

describe('redux todo list', () => {
  it('should insert todo item', () => {
    browser.url('http://todomvc.com/examples/react/#/');
    browser.waitForExist('.new-todo');

    // create todo item
    browser.element('.new-todo').setValue('just say hello world!');
    browser.keys('Enter');
    browser.element('.new-todo').setValue('just prepare the marrige!');
    browser.keys('Enter');
    browser.element('.new-todo').setValue('just fight with the boring!');
    browser.keys('Enter');

    // access value from browser.elements return
    expect(browser.elements('.todo-list > li').value).to.have.lengthOf(3);

    browser.saveScreenshot('__snapshot__/todo-items.png');
  });

  it('should filter todo item status', () => {
    // mark the first todo as complete
    browser
      .element('.view:first-child')
      .element('input')
      .click();

    browser.element('a=Active').click();
    expect(browser.elements('.todo-list > li').value).to.have.lengthOf(2);
    browser.saveScreenshot('__snapshot__/todo-active.png');

    browser.element('a=Completed').click();
    expect(browser.elements('.todo-list > li').value).to.have.lengthOf(1);
    browser.saveScreenshot('__snapshot__/todo-complete.png');
  });
});
