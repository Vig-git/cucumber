Feature: Add Tariff plan twodmap
  I want to use the template for my feature file

  @tag1
  Scenario: Generate the Tariff plans
    Given User should launch the browser
    And User click add tariff plans
    When User provide the valid details
      | mrent | freelm | freeim | sms | lpm | imc | spc |
      |   123 |    234 |    345 | 567 | 789 | 901 | 122 |
      |   101 |    202 |    303 | 404 | 505 | 606 | 707 |
    Then To verify the text is dispayed
