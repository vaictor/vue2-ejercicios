describe('Carga la plataforma educ', () => {

    it('Usuario: Visita la url del sitio de DEV educ', () => {
        
        cy.visit('http://deveduc.ddns.net:88/index.demo')

    })

    it('Usuario: Visita la url del sitio de PRUEBAS educ', () => {
        
        cy.visit('http://educ.ddns.net:88/')

    })

})