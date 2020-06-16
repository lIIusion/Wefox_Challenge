
describe('Wefox Group - QA Automation Challenge', function() {

    var home = require("../Pages/home_Page");
    it('Go to Wefox Login Page and verify title', function() {  
        //Go to Wefox login Page
        home.goTo('https://my.wefox.de/login');
        home.maximizeWindow();


        //Verify Expected Page is loaded
        home.titlePage().then(title => {
            expect(title).toBe('Anmeldung - wefox','The page loaded is not the expected one'); 
        })     
    });

    it('Enter next credentials, do login and then check that the agent image is loaded:',function(){ 
        //Enter email address and password
        home.enterEmailAddress('aqawefox+testtecnico@wefoxgroup.com');
        home.enterPassword('qwertyasdf');

        //Click on Login
        var dashboard = home.clickLogin('Anmeldung');
        
        browser.driver.sleep(4000);
        browser.waitForAngularEnabled(false);

        //Verify Agent's Image is loaded
        var verifyImage = dashboard.agentImage();
        expect(verifyImage).toBe(true,'The agent broker image did not load.');
  
    });

   var myContracts = require("../Pages/myContracts_page");
    it('Click on contracts sections and check the label “No contracts added”',function(){
        //Click on my Contracts on the Dashboard
        myContracts.clickMyContracts();

        browser.driver.sleep(4000);
        browser.waitForAngularEnabled(false);
        
        //Verify My Contracts has no added contracts
        var noContractText = myContracts.noContract();
        expect(noContractText).toBe('No contracts added','The text is not expected');    
    
    });    
     
    var profile = require("../Pages/profile_page");
    it('check that personal  information is displayed',function(){
        //Click on Profile on the Dashboard
        profile.clickProfile();

        browser.driver.sleep(4000);
        browser.waitForAngularEnabled(false);

        //Click on manage personal details
        profile.clickPersonalData();
        browser.driver.sleep(4000);

        var first_name;
        var last_name;
        var birth_date;
        var email;
        var phone;
        var street;
        var zip_code;
        var city;
        profile.getFormControlName('first_name').then(function (text) {
            first_name = text;
        });
        profile.getFormControlName('last_name').then(function (text) {
            last_name = text;
        });
        profile.getFormControlName('birthdate').then(function (text) {
            birth_date = text;
        });
        profile.getFormControlName('email').then(function (text) {
            email = text;
        });
        profile.getFormControlName('phone').then(function (text) {
            phone = text;
        });
        profile.getFormControlName('street').then(function (text) {
            street = text;
        });
        profile.getFormControlName('zip_code').then(function (text) {
            zip_code = text;
        });
        profile.getFormControlName('city').then(function (text) {
            city = text;
            let personal_data = { 
                first_name: first_name,
                last_name: last_name,
                birth_date: birth_date,
                email: email,
                phone: phone,
                street: street,
                zip_code: zip_code,
                city: city  
        };
        
        const fs = require('fs');
        let data = JSON.stringify(personal_data, null, 2);
        //saving personal details in a json file 
        fs.writeFileSync('../json/Output.json', data);
        //Printing output.json file
        console.log(data);
        });
    });

    var dashboard = require("../Pages/dashboard_page");
    it('Click on logout then check that the wefox web was loaded',function(){
        //Click on Logout
        var home = dashboard.clickLogout();
        browser.driver.sleep(4000);
        //Confiming the url after the Logout
        home.getCurrentUrl().then(link => {
            expect(link).toBe('https://my.wefox.de/login','The page loaded is not the expected one');
        });
    });
});