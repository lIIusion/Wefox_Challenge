var profile_page = function(){
    //Click on Profile on the Dashboard
    this.clickProfile = function(){
        element(by.cssContainingText("a"," Profile ")).click();
    };

    //Click on manage personal Data
    this.clickPersonalData = function(){
        element(by.cssContainingText('h4','Personal details')).click();
    };

    //Get personal details
    this.getFormControlName = function(value){
        return element(by.css("input[formControlName=" + value + "]")).getAttribute('value');
    };

    this.getFirstName = function(){
        return element(by.css("input[formControlName=first_name]")).getAttribute('value');
    };
    
    this.getLastName = function(){
        return element(by.css("input[formControlName=last_name]")).getAttribute('value');
    };

    this.getBirthDate = function(){
        return element(by.css("input[formControlName=birthdate]")).getAttribute('value');
    };

    this.getEmail = function(){
        return element(by.css("input[formControlName=email]")).getAttribute('value');
    };

    this.getPhone = function(){
        return element(by.css("input[formControlName=phone]")).getAttribute('value');
    };

    this.getStreet = function(){
        return element(by.css("input[formControlName=street]")).getAttribute('value');
    };

    this.getZipCode = function(){
        return element(by.css("input[formControlName=zip_code]")).getAttribute('value');
    };

    this.getCity = function(){
        return element(by.css("input[formControlName=city]")).getAttribute('value');
    };

    this.getPersonalData = function(){
        let personal_data = {};

        element(by.css("input[formControlName=first_name]")).getAttribute('value').then(function(text){
            personal_data.first_name = text;
        });
        element(by.css("input[formControlName=last_name]")).getAttribute('value').then(function(text){
            personal_data.last_name = text;
        });
        element(by.css("input[formControlName=birthdate]")).getAttribute('value').then(function(text){
            personal_data.street = text;
        });
        element(by.css("input[formControlName=street]")).getAttribute('value').then(function(text){
            personal_data.street = text;
        });

        return personal_data;
    };
}
module.exports = new profile_page();