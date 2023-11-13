import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I open ecommerce page', ()=>{
    cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
});

When('I add items to cart', ()=>{
    cy.xpath('//a[text()="iphone X"]//ancestor::div[@class="card-body"]//following-sibling::div/button').click();
    cy.xpath("//a[contains(text(),'Checkout')]").click();  

});

When('I validate the total prices', ()=>{
    cy.xpath('//table/tbody//tr//h3/strong').invoke('text').then((totalPrice)=>{
        expect(totalPrice).to.contains('100000');

    });
    cy.get('.btn.btn-success').click();

})

Then('I select the country submit and verify Thank you', ()=>{
    cy.get('input#country').type('Rohini');
    cy.wait(3000);
    cy.get('#checkbox2').click({force:true});
    cy.get("input[type='submit']").click();
    cy.xpath("//div[@class='alert alert-success alert-dismissible']").invoke('text').then((msg)=>{
        expect(msg).to.contains('Thank you! Your order will be delivered in next few weeks :-)');
    })

});

