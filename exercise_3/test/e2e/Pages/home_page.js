require ('../Pages/dashboard_page.js');
var home_page = function(){
    //open url
    this.goTo = function(url){
        browser.get(url);
    };

    //get the current url of web Page
    this.getCurrentUrl = function(){
        return browser.getCurrentUrl();
    };

    //maximize window
    this.maximizeWindow = function(){
        browser.driver.manage().window().maximize();
    };

    //get current page's title
    this.titlePage = function(){
        return browser.getTitle();
    };

    //enter email in the email address field
    this.enterEmailAddress = function(value){
        element(by.cssContainingText("label","E-Mail Adresse")).click();
        element(by.id('user_name')).sendKeys(value);
    };

    //enter password in the password field
    this.enterPassword = function(value){
        element(by.cssContainingText("label","Passwort")).click();
        element(by.id('password')).sendKeys(value);
    };

    //click on login button
    this.clickLogin = function(value){
        element(by.buttonText(value)).click();
        return require('./dashboard_page.js');
    };
}
module.exports = new home_page();