Feature: login for OrangeHRM

Scenario: login with valid credentials
    Given providing valid url
    When providing valid username and password
    Then clicking login button

Scenario: login with valid username and password pass value in step
    Given providing valid url
    When providing valid username as "Admin" and password as "admin123"
    Then clicking login button
