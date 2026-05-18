
Feature: Login tests

    Scenario: Verify user can login with valid credentials
        Given I am on the landing page
        When I click on the sign in manually tab
        Then I should be redirected to the sign in page
        When I enter valid email
        Then I enter valid password
        When I click on the sign in button
        Then I should be logged in successfully
        When I click on the profile icon
        Then I should see a dropdown menu
        When I click on the logout button
        Then I should be logged out successfully

    Scenario: Verify user cannot login with invalid credentials
        Given I am on the landing page
        When I click on the sign in manually tab
        Then I should be redirected to the sign in page
        When I enter invalid email
        Then I enter invalid password
        When I click on the sign in button
        Then I should see an error message indicating invalid credentials
            