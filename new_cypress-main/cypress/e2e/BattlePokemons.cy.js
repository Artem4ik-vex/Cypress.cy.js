describe('Длинный автотест для сайта', function () {

    it('Автотест на проведение покупки нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/');
        
         cy.get('#k_email').type('USSER_LOGIN');
         cy.get('#k_password').type('USSER_PASS');

         cy.get('.MuiButton-root').click();

         cy.wait(2000);

         cy.get('.style_1_heading_38_400_pokemon_classic').contains('Покемоны')

         cy.get('.header_card_trainer').click();

         cy.wait(2000);

         cy.get('[data-qa="shop"]').click();

         cy.wait(2000);

         cy.get('.available > button').first().click(); 

         cy.wait(2000);

         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996');
         cy.get(':nth-child(1) > .style_1_base_input').type('1226');
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('GERMAN DOLNIKOV');

         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();

         cy.wait(2000);

         cy.get('.style_1_base_input').type('56456');

         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();

         cy.wait(2000);
         
         cy.contains('Покупка прошла успешно').should('be.visible');







     })
 }) 