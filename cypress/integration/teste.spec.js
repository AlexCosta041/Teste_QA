/// <reference types="cypress">

context('Automacao QA', () => {
    it('Clicar nos botoes', () => {
        cy.visit('https://wj-qa-automation-test.github.io/qa-test');  
        cy.get('#btn_one').click();
        cy.get('#btn_two').click();
        cy.get('#btn_three').click();
        cy.get('#first_name').type('Primeiro nome');
        cy.get('#select_box').select('option_two');
        cy.get('#opt_three').check();
        cy.get('[alt="selenium"]').click();
       // cy.get('button#btn_one.btn.btn-lg.btn-default').contains('One').click();
       // cy.get('#btn_two').click();
       // cy.get('#btn_three').click();

        

       
       
       

        

        

    });
});


