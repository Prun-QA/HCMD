Feature: Dashboard
    Scenario: Verify user can view dashboard items, add new role, and disable an existing active role after login
        Given I am on the landing page
        When I click on the sign in manually tab
        Then I should be redirected to the sign in page
        When I enter valid email
        Then I enter valid password
        When I click on the sign in button
        Then I should be logged in successfully
        Then I should see the table containing all existing roles
        When I click on the three dots icon for an active role in the roles table
        Then I should see a dropdown menu on the active role
        When I click on the disable role button in the dropdown menu
        Then I should see a disable role confirmation message
        When I click on the yes proceed button for disable role
        Then I should get a success message indicating the role was disabled successfully
        When I click on the three dots icon for the disabled role in the roles table
        Then I should see a dropdown menu on the disabled role
        When I click on the enable role button in the dropdown menu
        Then I should see a enable role confirmation message
        When I click on the yes proceed button for enable role
        Then I should get a success message indicating the role was enabled successfully
        When I click on the add new role button
        Then I should be redirected to the add new role page
        When I click on the role type dropdown
        Then I select the role type from the dropdown list
        Then I input the role name in the role name field
        Then I input the role description in the role description field
        Then I click on the proceed button
        Then I should be redirected to the add involved staff form page
        When I click on the select a staff dropdown
        Then I select a staff from the dropdown list
        Then I click on the proceed button again
        Then I should be redirected to the preview role page
        Then I should see the details of the newly added role on the preview role page
        When I click on the create role button
        Then I should see a confirmation message
        When I click on yes proceed button againn
        Then I should get a success message indicating the role was created successfully
        When I click on the cancel button on the success message
        Then I should be redirected back to the dashboard page
        When I click on the profile icon
        Then I should see a dropdown menu
        When I click on the logout button
        Then I should be logged out successfully