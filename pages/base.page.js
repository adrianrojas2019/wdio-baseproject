class BasePage{

    /**************************************  Elements  **************************************/

    get hambMenu() {return $("//div/i[@class='nav-item fa fa-bars fa-2x']")}
    get settings() {return $("//ul/li/span[contains(text(),'Settings')]")}
    get confirm()  {return $("//div[@class='clickable-wrapper confirm clickable-icon-and-text']")}


    /**************************************  Actions  **************************************/

    goToSettings(){
        this.hambMenu.click();
        this.settings.waitForClickable();
        this.settings.click();
    }

}

module.exports = new BasePage();