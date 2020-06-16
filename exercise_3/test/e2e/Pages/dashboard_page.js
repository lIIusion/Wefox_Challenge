var dashboard_page = function(){
    //Load agent's image by element xpath
    this.agentImage = function(){
        return element(by.xpath("//img[@src='//s3.eu-central-1.amazonaws.com/financefox-pro-public-bucket/Agent/a0f58000000C0UvAAK/QAlogowefox.png']")).isPresent();
    };

    //Click on LogOut
    this.clickLogout = function(){
        element(by.cssContainingText('a',' Log out ')).click();
        return require('./home_page.js');
    };
}
module.exports = new dashboard_page();