const faker = require('faker');

class Fake{

    getTenantInfo(type){

        let state = faker.address.stateAbbr();

        console.log("Estado: "+state);

        return {
            name: faker.company.companyName(),
            code: faker.random.alphaNumeric(8),
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            state: state,
            zip: faker.address.zipCode(),
            phone: faker.phone.phoneNumber(),
            type: type
        }
    }

}

module.exports = new Fake();