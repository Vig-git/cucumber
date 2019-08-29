Feature: Add Customer
  I want to use the template for my feature file

  @tag1
  Scenario: Generate the customer id
    Given User should launch browser
    And User click add customer link
    When User provide valid det
      | fname   | vignesh         |
      | lname   | raj             |
      | email   | vicky@gmail.com |
      | address | chennai         |
      | phoneno |         1234565 |
    Then To verify the customer id is dispayed
