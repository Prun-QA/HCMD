Feature: Workflow tests
    Scenario: Verify user can view workflow items, add new workflow, and disable an existing active workflow after login
        Given I am on the landing page
        When I click on the sign in manually tab
        Then I should be redirected to the sign in page
        When I enter valid email
        Then I enter valid password
        When I click on the sign in button
        Then I should be logged in successfully
        When I click on the workflow tab
        Then I should be redirected to the workflow page
        Then I should see the workflow page title
        Then I should see the table containing all existing workflows
        When I click on the add new workflow button
        Then I should be redirected to the add new workflow page
        Then I input the workflow title in the workflow title field
        When I click on the request category dropdown
        Then I select the request category from the dropdown list
        When I click on the request type dropdown
        Then I select the request type from the dropdown list
        Then I input the short description in the short description field
        Then I click on the proceed button
        Then I should be redirected to the next form page
        Then I input the stage title in the stage title field
        When I click on the authorizer role dropdown
        Then I search on the authorizer role dropdown
        Then I select the authorizer role from the dropdown list
        When I click on the authorizer dropdown field
        Then I select the authorizer from the dropdown list
        Then I input the SLA timeline in the SLA timeline field
        When I click on the SLA type dropdown
        Then I select the SLA type from the dropdown list
        When I click on save stage button
        Then I tick the end the flow here checkbox
        Then I click on the proceed button
        Then I should be redirected to the next page
        When I click on the create workflow button again
        Then I should see a confirmation message
        When I click on the create workflow button on the confirmation message
        Then I should get a success message indicating the workflow was created successfully
        When I click on the cancel button on the workflow creation success message
        Then I should be redirected back to the workflow page
        When I click on the three dots icon for an active workflow in the workflow table
        Then I should see a dropdown menu on the active workflow
        When I click on the deactivate workflow button in the dropdown menu
        Then I should see a deactivate workflow confirmation message
        When I click on the yes deactivate button for deactivate workflow
        Then I should get a success message indicating the workflow was deactivated successfully
        # When I click on the three dots icon for the deactivated workflow in the workflow table
        # Then I should see a dropdown menu on the deactivated workflow
        # When I click on the activate workflow button in the dropdown menu
        # Then I should see an activate workflow confirmation message
        # When I click on the yes activate button for activate workflow
        # Then I should get a success message indicating the workflow was activated successfully
        When I click on the profile icon
        Then I should see a dropdown menu
        When I click on the logout button
        Then I should be logged out successfully