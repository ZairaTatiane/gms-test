/// <reference types="cypress"/>

describe('US-012-Funcionalidades: Cadastro de membros', () => {
beforeEach(() => {
  cy.visit('/')
});

afterEach (() => {
  cy.screenshot()
});

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `zaira${Date.now()}@teste.com`
    cy.preencherCadastro('Fabio' , 'Araujo', email, '11989898937', 'Teste@12345')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })

  it.only('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Fabio20' , 'Araujo', 'fabio@teste.com', '11989898937', 'Teste@12345')  
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
  });
})