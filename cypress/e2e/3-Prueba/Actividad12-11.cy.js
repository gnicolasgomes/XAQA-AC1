describe('First Test', ()=>{
    it('Visitar página y validar contactos, foto, descripción', ()=>{
    cy.visit('https://automationintesting.online/')
    cy.get('.contact > :nth-child(3) > :nth-child(1)').contains('Shady Meadows B&B')
    cy.get('.contact > :nth-child(3) > :nth-child(2)').contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S')
    cy.get('.contact > :nth-child(3) > :nth-child(3)').contains('012345678901')
    cy.get('.contact > :nth-child(3) > :nth-child(4)').contains('fake@fakeemail.com')
    cy.get(':nth-child(4) > :nth-child(1) > .row > .col-sm-3 > .img-responsive').should('be.visible')
    cy.get('.col-sm-10 > p').contains('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.')
})
})

