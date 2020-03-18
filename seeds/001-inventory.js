exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('inventory')
    .truncate()
    .then(function() {
      const cars = [
        {
          VIN: 'avinone',
          Make: 'Dodge',
          Model: 'Durango',
          Mileage: '10,000',
          Trans: 'Automatic',
          Title: ''
        },
        {
          VIN: 'avintwo',
          Make: 'Toyota',
          Model: 'Corolla',
          Mileage: '8,500',
          Trans: '',
          Title: ''
        },
        {
          VIN: 'avinthree',
          Make: 'Acura',
          Model: 'TL',
          Mileage: '30,000',
          Trans: 'Automatic',
          Title: ''
        },
        {
          VIN: 'avinfour',
          Make: 'Dodge',
          Model: 'Charger',
          Mileage: '30,000',
          Trans: 'Automatic',
          Title: ''
        },
        {
          VIN: 'avinfive',
          Make: 'Toyota',
          Model: 'Highlander',
          Mileage: '77,500',
          Trans: '',
          Title: ''
        },
        {
          VIN: 'avinsix',
          Make: 'Acura',
          Model: 'MDX',
          Mileage: '40,000',
          Trans: 'Automatic',
          Title: ''
        },
        {
          VIN: 'avinseven',
          Make: 'Jeep',
          Model: 'Grand Cherokee',
          Mileage: '20,000',
          Trans: 'Automatic',
          Title: ''
        },
        {
          VIN: 'avineight',
          Make: 'Mercedes Benz',
          Model: 'S 550',
          Mileage: '8,500',
          Trans: '',
          Title: ''
        },
        {
          VIN: 'avinnine',
          Make: 'Acura',
          Model: 'RL',
          Mileage: '15,000',
          Trans: 'Automatic',
          Title: ''
        },
        {
          VIN: 'avinten',
          Make: 'Dodge',
          Model: 'Challenger',
          Mileage: '13,465',
          Trans: 'Automatic',
          Title: ''
        },
        {
          VIN: 'avineleven',
          Make: 'Toyota',
          Model: 'Matrix',
          Mileage: '8,500',
          Trans: '',
          Title: ''
        },
        {
          VIN: 'avintwelve',
          Make: 'Acura',
          Model: 'RDX',
          Mileage: '37,234',
          Trans: 'Automatic',
          Title: ''
        },
        {
          VIN: 'avinthirteen',
          Make: 'RAM',
          Model: 'Rebel',
          Mileage: '10,000',
          Trans: 'Automatic',
          Title: ''
        },
        {
          VIN: 'avinfourteen',
          Make: 'GMC',
          Model: 'Sierra',
          Mileage: '8,500',
          Trans: '',
          Title: ''
        },
        {
          VIN: 'avinfifteen',
          Make: 'Chevrolet',
          Model: 'Silverado',
          Mileage: '200',
          Trans: 'Automatic',
          Title: ''
        }
      ]

      // Inserts seed entries
      return knex('inventory').insert(cars)
    })
}
