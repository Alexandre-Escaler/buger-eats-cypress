var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

deliver: function() {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var data = {
        nome: `${firstName} ${lastName}`,
          cpf: cpf.generate(),
          email: faker.internet.email(firstName),
          whatsapp: '11999999999',
          endereco: {
              cep: '03547030',
              rua: 'Rua Marcos Grotti Vidal',
              numero: '12',
              complemento: 'Ap 3',
              bairro: 'Cidade Patriarca',
              cidade_uf: 'São Paulo/SP'
          },
          metodo_entrega: 'Moto',
          cnh: 'cnh-digital.jpg'
    }

    return data

}

}