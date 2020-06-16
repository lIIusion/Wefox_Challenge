var myContracts_page = function(){
    
    this.clickMyContracts = function(){
        //Click on My Contracts
        element(by.cssContainingText("a"," My Contracts ")).click();
    };
    
    this.noContract = function(){
        return element(by.cssContainingText('p','No contracts added')).getText();
    };
}
module.exports = new myContracts_page();