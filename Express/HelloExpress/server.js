const express = require("express")
const app =express();
// this needs to be below the other code blocks
app.listen( 8000, () => console.log(`Listening on port: ${8000}`) );

// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createUser = () => {
    const newuser = {
        password: faker.internet.password(),
        email: faker.internet.email(), 
        phoneNumber:faker.phone.number(),
        lastName:faker.name.lastName(),
        firstName:faker.name.firstName(),
        id:faker.datatype.uuid(),
      };
      return newuser;
    };
    
    const createCompany = () => {
      const newcompany={
      id:faker.datatype.uuid(),
      name:faker.company.name(),
      address:{
      street:faker.address.street(),
      city:faker.address.city(),
      state:faker.address.state(),
      zipCode:faker.address.zipCode(),
      country:faker.address.country() ,
      }
      };
      return newcompany;
    };

// console.log(createUser());
// console.log(createCompany());

// const newFakeUser = createUser();
// console.log(newFakeUser);

app.get("/api/users/new", (req, res) => {
  res.json( createUser() );
  
});

// const newFakeCompany=createCompany();
// console.log(newFakeCompany);


app.get("/api/companies/new", (req, res) => {
  res.json( createCompany() );
  
});


app.get("/api/user/company", (req, res) => {

  var userCompany={
    user:createUser(),
    company:createCompany()
  }
  res.json( userCompany );
});

