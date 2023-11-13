Feature: eCommerce e2e validation

    Scenario: ecommerce products delivery
    Given I open ecommerce page
    When I add items to cart
    And I validate the total prices
    Then I select the country submit and verify Thank you