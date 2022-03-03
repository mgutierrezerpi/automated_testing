describe('Create User Vehicles', () => {
    it('does full flow', () => {
      const vins = [
        '1FAHP2F83EG181879'
      ]
      const email = 'you@cars.com'
      const password = 'your_pass'

      let isFirstTime = true
  
      vins.forEach(vin => {
        cy.visit('http://localhost:4000/sell/')

        // Add VIN
        cy.get('#by-vin').click()
        cy.get('#vin').type(vin)
        cy.get('#by-vin-tab > form .find-car-details').click()

        if (isFirstTime) {
          // Sign in
          cy.get('#email').type(email)
          cy.get('#password').type(password)
          cy.get('.session-form button').click()  
          isFirstTime = false
        }

        // Step 1 - Details
        cy.get('#user_vehicle_mileage').type('60608')
        cy.get('#user_vehicle_zip_code_input').type('60608')
        cy.get('#user_vehicle_exterior_color_id').select('Black')
        cy.get('#user_vehicle_interior_color_id').select('Black')
        cy.get('#user_vehicle_one_owner_true').click()
        cy.get('.submit-button-container button').click()

        // Step 2 - Car Features
        cy.get('button[type=submit]').click()

        // Step 3 - Listing Price
        cy.get('#user_vehicle_price').invoke('attr', 'value', 2500)
        cy.get('button[type=submit]').click()

        // Step 4 - Add Photos
        cy.get('button.sds-button').click()

        // Step 5 - Seller's Notes
        cy.get('#sellers-notes').type('this is a test')
        cy.get('button.sds-button').click()

        // Step 6 - Preview 
        cy.get('button.sds-button').click()
      })
    })
  }
)