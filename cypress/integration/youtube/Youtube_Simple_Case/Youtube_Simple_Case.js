import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";

let REQUEST_INFO;

// before hook
before(() => {
    cy.fixture('requestInfo.json').then((request_info) => {
        REQUEST_INFO = request_info;
    })
});

Given(/^open youtube website$/, function () {
    // 打印日志
    console.log("open youtubu website");

    // 清除窗口或标签页临时保存的数据
    sessionStorage.clear()

    // 访问页面
    cy.visit(REQUEST_INFO.url);

    // 断言判断title是否为Youtube
    cy.title().should("eq", "YouTube");
});
When(/^switch the menu to music tab$/, function () {
    // 点击Music板块
    // cy.reload();
    cy.contains("Music").click();
});
Then(/^view the the page under the tab$/, function () {
    cy.get('[aria-selected=true]').within(() => {
        cy.contains("Music")
    });
});
And(/^click the explore tab$/, function () {
    cy.contains("#endpoint", "Explore").click()
})
And(/^input excel for search$/, function () {
    cy.get("#search-input").type('excel{enter}')
    // cy.contains("#search-icon-legacy", "Search").click()
    // cy.intercept('**?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8').as('search')
})
And(/^select the first video$/, function () {
    // cy.wait('@search')
    // cy.contains('Microsoft Excel Tutorial for Beginners - Full Course').click()
    cy.get('img[src*="Vl0H-qTclOg"]').eq(0)
        .click()
    //     .parents().parents()
    //     .as('openTheFirst')
    //     .should('have.attr', 'href', '/watch?v=Vl0H-qTclOg')
    // cy.get('@openTheFirst')
    //     .click()
    cy.intercept('**?v=Vl0H-qTclOg**').as('openFirstVideo')
})
And(/^pause the video$/, function () {
    cy.wait('@openFirstVideo')
    // cy.wait(10000)
    cy.get('div[class="ytp-left-controls"]').within(() => {
        cy.get('[class="ytp-play-button ytp-button"]').click()
        cy.get('[class="ytp-next-button ytp-button"]').click()
    })
    // cy.get('button[class="ytp-play-button ytp-button"]').click()
    cy.wait(1000)
    // cy.reload()     // 为true是强制重新加载不使用缓存
    cy.get('#ytd-player').click()
})
Then(/^click the menu and jump to home$/, function () {
    cy.get('button[aria-label="Guide"]').click()
    cy.get('button[aria-label="Guide"]').should('have.attr', 'aria-pressed', 'true')
    cy.contains("#endpoint", "Home").click()
})
