let loginData = require('../data/credentials');
let fake = require('../data/fake.data');

class Dashboard{

    /**************************************  Elements  **************************************/

    get modal() {return $("//div[@class='modal-content']")}
    get btnAddTenant() {return $("//div[@class='add-card']//i[@class='fa icon fa-plus']")}
    get inputTenantName() {return $("//div[@class='form-group']//label[contains(text(),'Tenant Name')]//following::input[2]")}
    get inputTenantCode() {return $("//div[@class='form-group']//label[contains(text(),'Tenant Code')]//following::input[2]")}
    get inputTenantAddress() {return $("//div[@class='form-group']//label[contains(text(),'Tenant Address')]//following::input[2]")}
    get inputCity() {return $("//div[@class='col-sm-5 col-xs-12 city form-group']//label[contains(text(),'City')]//following::input[2]")}
    get inputState() {return $("//div[@class='col-sm-3 col-xs-6 state form-group']//label[contains(text(),'State')]//following::input[2]")}
    get inputZip() {return $("//div[@class='col-sm-4 col-xs-6 zip form-group']//label[contains(text(),'Zip')]//following::input[2]")}
    get inputPhone() {return $("//input[@name='number'][@autocomplete='off']")}
    get typeSelect() {return $("//div[@class='modal-content']//select[@name='type']")}
    get inputsMock() {return $$("//div[@class='row']//input[@name=('agencyUrl') or(@name='LEA ORI') or(@name='Terminal ID')][@autocomplete='off']")}
    get confirm()  {return $("//div[@class='clickable-wrapper confirm clickable-icon-and-text']")}

    tenantTitle(tenant) {return $(`//h3[@class='single-line'][contains(text(),'${tenant}')]`)}

    /**************************************  Actions  **************************************/

    clickBtnAddTenant(){
        this.btnAddTenant.waitForDisplayed();
        this.btnAddTenant.click();
    }

    createLEATenant(){
        let data = fake.getTenantInfo('lea');

        this.clickBtnAddTenant();
        this.fillTenantInformation(data);
        this.typeSelect.selectByAttribute('value', 'lea');
        this.fillMockInputs();
        this.confirm.click();
        this.modal.waitForExist(2000, true);
        return data;
    }

    createCIFTenant(){
        let data = fake.getTenantInfo('cif');

        this.clickBtnAddTenant();
        this.fillTenantInformation(data);
        this.typeSelect.selectByAttribute('value', 'cif');
        this.confirm.click();
        this.modal.waitForExist(2000, true);
        return data;
    }

    fillMockInputs(){
        browser.pause(1000);
        this.inputsMock.forEach(element => {
            element.addValue("mock");
        });
    }

    fillTenantInformation(data){
        this.inputTenantName.waitForDisplayed();
        this.inputTenantName.addValue(data.name);
        this.inputTenantCode.addValue(data.code);
        this.inputTenantAddress.addValue(data.address);
        this.inputCity.addValue(data.city);
        this.inputState.addValue(data.state);
        this.inputZip.addValue(data.zip);
        this.inputPhone.addValue(data.phone);
    }
}

module.exports = new Dashboard();