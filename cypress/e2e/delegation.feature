Feature: Delegation
    Scenario: Verify user can delegate a request after login
        Given I am on the landing page
        When I click on the sign in manually tab
        Then I should be redirected to the sign in page
        When I enter valid email
        Then I enter valid password
        When I click on the sign in button
        Then I should be logged in successfully
        When I click on the delegation module
        Then I should be redirected to the delegation page
        When I click on the delegated to dropdown
        Then I select a staff from the dropdown list of delegated to
        When I click on the duration dropdown
        Then I select a duration from the dropdown list
        Then I should fill in the reason field with a valid reason for delegation
        When I click on the set delegation button
        Then I should see a confirmation message for setting the delegation
        When I click on the yes proceed button for setting the delegation
        Then I should get a success message indicating the delegation was set successfully
        When I click on the cancel button on the success message for the newly set delegation
        Then I should be redirected back to the delegation page
        Then I should see the delegation details of the newly set delegation on the delegation page
        When I click on the cancel delegation button for the newly set delegation
        Then I should see a confirmation message for removing the delegation
        When I click on the yes remove button for removing the delegation
        Then I should get a success message indicating the delegation was removed successfully
        When I click on the profile icon
        Then I should see a dropdown menu
        When I click on the logout button
        Then I should be logged out successfully