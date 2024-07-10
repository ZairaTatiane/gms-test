/// <reference types="cypress"/>

describe('US-012-Funcionalidades: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://192.168.1.14:8081/')
    cy.get('#signup-firstname').type('Zaira')
    cy.get('#signup-lastname').type('Tatiane')
    cy.get('#signup-email').type('zaira2@testes.com')
    cy.get('#signup-phone').type('119832989832')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})