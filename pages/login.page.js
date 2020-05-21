loginData = require('../data/credentials')

class Login{

    /**************************************  Elements  **************************************/

    get btnAccept() {return $("//*[@class='notice-button btn btn-lg btn-primary']")}
    get inputUsername() {return $("//input[@placeholder='Email'][@autocomplete='off']")}
    get inputPassword() {return $("//input[@placeholder='Password'][@autocomplete='off']")}
    get btnLogin() {return $("//*[@class='login-button btn btn-lg btn-primary']")}


    /**************************************  Actions  **************************************/

    login(username){
        this.clickBtnAccept();
        this.enterUsername(username);
        this.enterPasword();
        this.clickBtnLogin();
    }
    
    clickBtnAccept(){
        this.btnAccept.waitForDisplayed();
        this.btnAccept.click();
    }

    clickBtnLogin(){
        this.btnLogin.click();
    }

    enterUsername(username){
        this.inputUsername.waitForDisplayed();
        this.inputUsername.setValue(username);
    }

    enterPasword(){
        this.inputUsername.waitForDisplayed();
        this.inputPassword.setValue(loginData.password);
    }

}

module.exports = new Login();