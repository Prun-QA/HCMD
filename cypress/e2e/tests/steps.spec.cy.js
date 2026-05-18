
import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';

let hcmd;

Before(function () {
    cy.fixture('hcmd').then(function (data) {
        hcmd = data;
    })
})

let role;

Before(function () {
    role = {
        name: faker.lorem.words(2),
        shortDescription: faker.lorem.sentence(),
    };
});

let workflow;

Before(function () {
  workflow = {
    title:            faker.lorem.words(3),
    shortDescription: faker.lorem.sentence(),
    stageTitle:       faker.lorem.words(2),
    slaTimeline:      faker.number.int({ min: 1, max: 30 }),
    // ↑ generates a random number between 1 and 30 days
  };
});
// Test case: Sign in manually and log out successfully
Given('I am on the landing page', () => {
    cy.visit('/');
})
When('I click on the sign in manually tab', () => {
    cy.get(hcmd.signInManuallyTab).click();
})
Then('I should be redirected to the sign in page', () => {
    cy.url().should('include', '/login');
})
When('I enter valid email', () => {
    cy.get(hcmd.emailInput).type(hcmd.validEmail);
})
Then('I enter valid password', () => {
    cy.get(hcmd.passwordInput).type(hcmd.validPassword);
})
When('I click on the sign in button', () => {
    cy.get(hcmd.signInButton, {timeout: 10000}).click();
}) // Wait for 5 seconds to allow the login process to complete and the dashboard to load
Then('I should be logged in successfully', () => {
    cy.url().should('include', '/dashboard');
})
When('I click on the profile icon', () => {
    cy.get(hcmd.profileIcon).click();
})
Then('I should see a dropdown menu', () => {
    cy.get(hcmd.dropdownMenu).should('be.visible');
})
When('I click on the logout button', () => {
    cy.get(hcmd.logoutButton).click();
})
Then('I should be logged out successfully', () => {
    cy.url().should('include', '/login');
})


// Test case: Sign in with invalid credentials
When('I enter invalid email', () => {
    cy.get(hcmd.emailInput).type(hcmd.invalidEmail);
})
Then('I enter invalid password', () => {
    cy.get(hcmd.passwordInput).type(hcmd.invalidPassword);
})
Then('I should see an error message indicating invalid credentials', () => {
    cy.get(hcmd.errorMessage).should('be.visible');
})

// Test case: Dashboard accessibility and role creation after login
Then('I should see the table containing all existing roles', () => {
    cy.get(hcmd.rolesTable).should('be.visible');
})
When('I click on the three dots icon for an active role in the roles table', () => {
    cy.get(hcmd.activeRoleThreeDotsIcon).first().click();
})
Then('I should see a dropdown menu on the active role', () => {
    cy.get(hcmd.threedotdropdownMenu).should('be.visible');
})
When('I click on the disable role button in the dropdown menu', () => {
    cy.contains('Disable Role').click();
})
Then('I should see a disable role confirmation message', () => {
    cy.contains('This role will not be active on the platform again').should('be.visible');
})
When('I click on the yes proceed button for disable role', () => {
    cy.contains('Yes, Proceed').click(); // Wait for 5 seconds to allow the roles table to refresh and display the updated status of the role
})
Then('I should get a success message indicating the role was disabled successfully', () => {
    cy.contains('Role deactivated successfully').should('be.visible');
})
When('I click on the three dots icon for the disabled role in the roles table', () => {
    cy.get(hcmd.disabledRoleThreeDotsIcon).first().click();
})
Then('I should see a dropdown menu on the disabled role', () => {
    cy.get(hcmd.threedotdropdownMenu).should('be.visible');
})
When('I click on the enable role button in the dropdown menu', () => {
    cy.contains('Enable Role').click();
})
Then('I should see a enable role confirmation message', () => {
    cy.contains('This role will become active on the platform again').should('be.visible');
})
When('I click on the yes proceed button for enable role', () => {
    cy.contains('Yes, Proceed').click();// Wait for 5 seconds to allow the roles table to refresh and display the updated status of the role
})
Then('I should get a success message indicating the role was enabled successfully', () => {
    cy.contains('Role activated successfully').should('be.visible');
})
When('I click on the add new role button', () => {
    cy.get(hcmd.addNewRoleButton).click();
})
Then('I should be redirected to the add new role page', () => {
    cy.url().should('include', '/create');
})
When('I click on the role type dropdown', () => {
    cy.get(hcmd.roleTypeDropdown).click();
})
Then('I select the role type from the dropdown list', () => {
    cy.get(hcmd.roleTypeOption).click();
})
Then('I input the role name in the role name field', () => {
    cy.get(hcmd.roleNameInput).type(role.name);
})
Then('I input the role description in the role description field', () => {
    cy.get(hcmd.roleDescriptionInput).type(role.shortDescription);
})
Then('I click on the proceed button', () => {
    cy.get(hcmd.proceedButton).click();
})
Then('I should be redirected to the add involved staff form page', () => {
    cy.url().should('include', '/create');
})
When('I click on the select a staff dropdown', () => {
    cy.get(hcmd.selectStaffDropdown).click();
})
Then('I select a staff from the dropdown list', () => {
    cy.get(hcmd.staffOption).click();
})
Then('I click on the proceed button again', () => {
    cy.get(hcmd.proceedButton).click();
})
Then('I should be redirected to the preview role page', () => {
    cy.url().should('include', '/create');
})
Then('I should see the details of the newly added role on the preview role page', () => {
    cy.get(hcmd.roleDetails).should('be.visible');
})
When('I click on the create role button', () => {
    cy.get(hcmd.createRoleButton).click();
})
Then('I should see a confirmation message', () => {
    cy.get(hcmd.confirmationMessage).should('be.visible');
})
When('I click on yes proceed button againn', () => {
    cy.get(hcmd.yesProceedButton).click();
})
Then('I should get a success message indicating the role was created successfully', () => {
    cy.contains('Role created successfully').should('be.visible');
})
When('I click on the cancel button on the success message', () => {
    cy.get(hcmd.cancelButton).click();
})
Then('I should be redirected back to the dashboard page', () => {
    cy.url().should('include', '/dashboard'); // Wait for 2 seconds to allow the dashboard to load and display the updated roles table
})

// Test case: Workflow accessibility and creation after login
When('I click on the workflow tab', () => {
    cy.get(hcmd.workflowTab, {timeout: 10000}).click();
})
Then('I should be redirected to the workflow page', () => {
    cy.url().should('include', '/workflow');
})
Then('I should see the workflow page title', () => {
    cy.get(hcmd.workflowPageTitle).should('be.visible');
})
Then('I should see the table containing all existing workflows', () => {
    cy.get(hcmd.workflowsTable).should('be.visible');
})
When('I click on the three dots icon for an active workflow in the workflow table', () => {
    cy.get(hcmd.activeWorkflowDotsIcon).scrollIntoView().first().click();
})
Then('I should see a dropdown menu on the active workflow', () => {
    cy.get(hcmd.workflowDropdown).should('be.visible');
})
When('I click on the deactivate workflow button in the dropdown menu', () => {
    cy.contains('Deactivate').click();
})
Then('I should see a deactivate workflow confirmation message', () => {
    cy.contains('Are you sure you want to deactivate this workflow? This action will disable the workflow for all users.').should('be.visible');
})
When('I click on the yes deactivate button for deactivate workflow', () => {
    cy.contains('Yes, Deactivate').click();
})
Then('I should get a success message indicating the workflow was deactivated successfully', () => {
    cy.contains('Workflow deactivated successfully').should('be.visible');
})
When('I click on the three dots icon for the deactivated workflow in the workflow table', () => {
    cy.get(hcmd.inactiveWorkflowDotsIcon).scrollIntoView().first().click();
})
Then('I should see a dropdown menu on the deactivated workflow', () => {
    cy.get(hcmd.workflowDropdown).should('be.visible');
})
When('I click on the activate workflow button in the dropdown menu', () => {
    cy.contains('Activate').click();
})
Then('I should see an activate workflow confirmation message', () => {
    cy.contains('Are you sure you want to activate this workflow? This action will enable the workflow for all users.').should('be.visible');
})
When('I click on the yes activate button for activate workflow', () => {
    cy.contains('Yes, Activate').click();
})
Then('I should get a success message indicating the workflow was activated successfully', () => {
    cy.contains('Workflow activated successfully').should('be.visible');
})
When('I click on the add new workflow button', () => {
    cy.get(hcmd.addNewWorkflowButton).click();
})
Then('I should be redirected to the add new workflow page', () => {
    cy.url().should('include', '/workflow/create');
})
Then('I input the workflow title in the workflow title field', () => {
    cy.get(hcmd.workflowTitleField).type(workflow.title);
})
When('I click on the request category dropdown', () => {
    cy.get(hcmd.requestCategoryDropdown).click();
})
Then('I select the request category from the dropdown list', () => {
    cy.get(hcmd.requestCategoryOption).click();
})
When('I click on the request type dropdown', () => {
    cy.get(hcmd.requestTypeDropdown).click();
})
Then('I select the request type from the dropdown list', () => {
    cy.get(hcmd.requestTypeOption).scrollIntoView().click();
    cy.get(hcmd.requestTypeDropdown).click(); // Click again to close the dropdown
})
Then('I input the short description in the short description field', () => {
    cy.get(hcmd.shortDescriptionField).type(workflow.shortDescription);
})
Then('I should be redirected to the next form page', () => {
    cy.url().should('include', '/workflow/create');
})
Then('I input the stage title in the stage title field', () => {
    cy.get(hcmd.stageTitleField).scrollIntoView().type(workflow.stageTitle);
})
When('I click on the authorizer role dropdown', () => {
    cy.contains('Select options').scrollIntoView().click();
})
Then('I search on the authorizer role dropdown', () => {
    cy.get(hcmd.authorizerRoleSearchField).type('registrar');
})
Then('I select the authorizer role from the dropdown list', () => {
    cy.get('.overflow-y-auto > :nth-child(1)').click();
})
When('I click on the authorizer dropdown field', () => {
    cy.contains('Select options').click();
})
Then('I select the authorizer from the dropdown list', () => {
    cy.get('.overflow-y-auto > .px-3').click();
})
Then('I input the SLA timeline in the SLA timeline field', () => {
    cy.get(hcmd.slaTimelineField).type(workflow.slaTimeline);
})
When('I click on the SLA type dropdown', () => {
    cy.get(hcmd.slaTypeDropdown).click();
})
Then('I select the SLA type from the dropdown list', () => {
    cy.get(hcmd.slaTypeOption).click();
})
When('I click on save stage button', () => {
    cy.get(hcmd.saveStageButton).click();
})
Then ('I tick the end the flow here checkbox', () => {
    cy.get(hcmd.endFlowCheckbox).check();
})
Then('I should be redirected to the next page', () => {
    cy.url().should('include', '/workflow/create');
})
When ('I click on the create workflow button', () => {
    cy.get(hcmd.createWorkflowButton).click();
})
Then('I should be redirected to the preview workflow page', () => {
    cy.url().should('include', '/create-workflow/preview');
})
When('I click on the create workflow button again', () => {
    cy.get(hcmd.createWorkflowButton).click();
})
When('I click on the create workflow button on the confirmation message', () => {
    cy.get(hcmd.confirmWorkflowCreationButton).click();
})
Then('I should get a success message indicating the workflow was created successfully', () => {
    cy.contains('Workflow Created Successfully').should('be.visible');
})
When('I click on the cancel button on the workflow creation success message', () => {
    cy.get(hcmd.cancelButton).click();
})
Then('I should be redirected back to the workflow page', () => {
    cy.url().should('include', '/workflow');
})
