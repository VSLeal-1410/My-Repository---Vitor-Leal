/// <reference types="cypress"/>
describe('Testes de Api', function(){
    it('Listar todos os objetos', function(){
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects'

        }).then(function(response){
            expect(response.status).to.equal(200)
        })
    })

    it('Listar objeto por ID', function () {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects?id=ff808181923ed5e201927110625c658e'
        }).then(function(response){
            expect(response.status).to.equal(200)
            
        })
    })
})