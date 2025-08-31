import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as result_page from "../locators/result_page.json"
import * as recovery_page from "../locators/recovery_password_page.json"
describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
         cy.visit('/');
         cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');

           });

    afterEach('Конец теста', function () {
         cy.get(result_page.close).should('be.visible'); //  гет находит кнопку крестик  а шулд проверяет свойство обьекта  а би визайбл  проверяет виден ли он пользоваетлю

           });

    it('Верный логин и верный пароль', function () {
         
         
         cy.get(main_page.email).type(data.login); // гет находит нужное поле а тайп вводит нужный текст
         cy.get(main_page.password).type(data.password); // гет анходит нужное поле а тайп вводит нужный текст
         cy.get(main_page.login_button).click(); //  гет нашел кнопку войти  а клик нажал на нее
         cy.get(result_page.title).contains('Авторизация прошла успешно');// гет находит нужный элемент на странице( местоположение текста) а контейнс проверяе тна этом элементе определенный текст 
         cy.get(result_page.title).should('be.visible'); // гет находит нужный элесмент на странцие а шулд проверяет его свойтво  а именнно через бай визайбл что он виден пользователю 
         
        })





    it('Верный логин и неверный пароль', function () {

        
        
         cy.get(main_page.email).type(data.login); // гет находит нужное поле а тайп вводит нужный текст
         cy.get(main_page.password).type('iLoveqastudio7'); // гет анходит нужное поле а тайп вводит нужный текст в данном случае неверный пароль
         cy.get(main_page.login_button).click(); //  гет нашел кнопку войти  а клик нажал на нее
        
         cy.get(result_page.title).contains('Такого логина или пароля нет');// гет находит нужный элемент на странице( местоположение текста) а контейнс проверяе тна этом элементе определенный текст 
         cy.get(result_page.title).should('be.visible'); // гет находит нужный элесмент на странцие а шулд проверяет его свойтво  а именнно через бай визайбл что он виден пользователю 

         
        })





    it('Проверка что в логине есть @', function () {
        
         

         cy.get(main_page.email).type('germandolnikov.ru'); // гет находит нужное поле а тайп вводит нужный текст (ввел логин без @)
         cy.get(main_page.password).type(data.password); // гет анходит нужное поле а тайп вводит нужный текст в данном случае Bерный пароль
         cy.get(main_page.login_button).click(); //  гет нашел кнопку войти  а клик нажал на нее
        
         cy.get(result_page.title).contains('Нужно исправить проблему валидации');// гет находит нужный элемент на странице( местоположение текста) а контейнс проверяе тна этом элементе определенный текст 
         cy.get(result_page.title).should('be.visible'); // гет находит нужный элесмент на странцие а шулд проверяет его свойтво  а именнно через бай визайбл что он виден пользователю 
         
         
        })



    it('Проверка востановления пароля', function () {

         
         cy.get(main_page.fogot_pass_btn).click(); // гет нашел нужную кнопку а клик нажал на нее
         
         cy.get(recovery_page.email).type('german@dolnikov.ru');// ввел почту для востановления

         cy.get(recovery_page.send_button).click(); // находит нужную кнопку и нажимает на нее

         cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); // находит нужный элесент на странцие и проверяет определенный текст
         cy.get(result_page.title).should('be.visible'); // Текст виден пользователю
         
        })


 }) 

//   запуск через терминал : npx cypress run --spec cypress/e2e/login.cy.js --browser chrome



 // План
 // + Найти поле логин и ввести правильный логин
 // + Найти поле пароль и ввести правильный пароль
 // + Найти кнопку войти и нажать на нее
 // + Проверить, что авторизация прошла успешно