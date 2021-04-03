/// <reference types="cypress" />

context('Testing shenlong invocation', () => {
  before(() => {    
    cy.visit('http://localhost:3000/dragon-ball-manager')
  })

  it('Should not invocate if user doesnt have 7 dragon balls', () => {
    cy.get('[data-testid="card-shenlong"]').should('exist')
    cy.get('[data-testid="invoke-button"]').click()
    cy.get('[data-testid="modaltext"]').should('contain.text', 'Você não tem todas as esferas para invocar o shenlong')
    cy.get('[data-testid="back"]').click()
  })
})

context('Testing the ball filter', () => {
  beforeEach(() => {    
    cy.visit('http://localhost:3000/dragon-ball-manager')
  })

  it('Should show all balls', () => {
    cy.get('[data-testid="filter"').select('all')
    cy.get('[alt="1 estrela"]').should('exist')
    cy.get('[alt="2 estrelas"]').should('exist')
    cy.get('[alt="3 estrelas"]').should('exist')
    cy.get('[alt="4 estrelas"]').should('exist')
    cy.get('[alt="5 estrelas"]').should('exist')
    cy.get('[alt="6 estrelas"]').should('exist')
    cy.get('[alt="7 estrelas"]').should('exist')
    cy.get('.card-title').should('have.length', 7)
  })

  it('Should show the balls found', () => {
    cy.get('[data-testid="filter"').select('me')
    cy.get('[alt="1 estrela"]').should('exist')    
    cy.get('[alt="5 estrelas"]').should('exist')
    cy.get('[alt="6 estrelas"]').should('exist')
    cy.get('[alt="7 estrelas"]').should('exist')
    cy.get('.card-title').should('have.length', 4)
  })

  it('Should show the balls not found', () => {
    cy.get('[data-testid="filter"').select('notme')    
    cy.get('[alt="2 estrelas"]').should('exist')
    cy.get('[alt="3 estrelas"]').should('exist')
    cy.get('[alt="4 estrelas"]').should('exist')
    cy.get('.card-title').should('have.length', 3)
  })

  it('Should show the modal to validate the 2-star ball', () => {
    cy.get('button').eq(1).click()
    cy.get('label').should('contain.text', 'Insira o código da esfera de 2 estrelas:')    
  })
})