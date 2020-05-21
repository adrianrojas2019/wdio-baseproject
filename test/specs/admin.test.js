//var assert = require('assert');
//import {expect} from 'chai';
//import assert from 'assert';
//import {addContext} from 'mochawesome/addContext';

const login = require('../../pages/login.page');
const dashboard = require('../../pages/dashboard.page');
credentials = require('../../data/credentials');

describe("interaction with CH web element", function(){
    let cifTenant = null;
    let leaTenant = null;

    before('Should login first', ()=>{
        console.log('begore hook')
    });

    beforeEach(() => {
        browser.url('/');
        console.log('BeforeEach')
        //addContext(this,"This is a test");
    });

    it("Login into Gallery as administrator", function(){
        browser.url('/');
        browser.pause(5000) //wait until page is loaded
        //Add User Name
        const userName = $('#username');
        const userPassword = $('#password');
        const login = $('#login');

        browser.maximizeWindow();
        userName.setValue('diplus2');  // const global variable later
        //Add User Password
        userPassword.setValue('drillin6');  // const global variable later
        browser.pause(2000)
        //Click on Login Page
        login.click();
        browser.pause(20000)
        var title = browser.getTitle();
        console.log(title);
        //assert.equal(title,'Enverus Gallery')
        expect(title).to.equal('Enverus Gallery');
        expect($('.projectTitle').isDisplayed(),'Project Title is not displayed').to.equal(true);

        
        /* //wait until spinner is gone and until CH thumbnail is visible
        
        const elem = $("//span[text()='Courthouse 2.0']");
        expect(elem).toHaveText('Courthouse 2.0');         // pending create locators in another file
        //Assert ?
        browser.pause(1000);
        //Click on Thumbnail
        const thumbnailIcon = $('#applications > section > article.di-carousel-item.courthouse.ng-star-inserted > a');
        thumbnailIcon.click();

        browser.pause(10000); 
        //Assert CH has been loaded successfully  */
    });

    it("Click on CH Thumbnail", function(){        
        //browser.url('/');
        browser.pause(4000) //wait until page is loaded
        //Add User Name
        const userName = $('#username');
        const userPassword = $('#password');
        const login = $('#login');
        browser.maximizeWindow();
        userName.setValue('diplus2');  // const global variable later
        //Add User Password
        userPassword.setValue('drillin6');  // const global variable later
        browser.pause(2000)
        //Click on Login Page
        login.click();
        
        browser.pause(2000);
        browser.url('/courthouse/');
        browser.pause(20000);
    });

});