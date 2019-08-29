Feature: Add Customer
  I want to use the template for my feature file

  @tag1
  Scenario Outline: Generate the customer id
    Given User should launch browser
    And User click add customer link
    When User provide valid detail"<fname>","<lname>","<email>","<address>","<phone>"
    Then To verify the customer id is dispayed

    Examples: 
      | fname     | lname   | email            | address   | phone    |
      | vignesh   | raj     | abc@gmail.com    | chennai   |   123456 |
      | ganesh    | kumar   | ganesh@gmail.com | bangalore | 27725783 |
      | cristiano | ronaldo | cr7@gmail.com    | portugal  |  2722782 |
