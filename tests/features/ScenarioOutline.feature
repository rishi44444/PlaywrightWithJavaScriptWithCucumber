Feature: login for OrangeHRM

  Scenario Outline: login with valid username and password pass value in in examples
    Given providing valid url
    When providing valid username as "<name>" and password as "<password>"
    Then clicking login button

    Examples:
      | name  | password |
      | Admin | admin123 |
      |       | admin123 |
      | Admin |          |
