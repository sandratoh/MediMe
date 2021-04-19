describe("User can add, edit, and delete lab records", () => {
  beforeEach(() => {
    cy.viewport("iphone-6+");

    cy.visit("/");

    cy.contains(/log in/i).click();

    cy.get("[data-testid=email-input]").type("rachel@email.com");
    cy.get("[data-testid=password-input]").type("password");

    cy.contains("LOGIN").click();

  });
  
  it("should add a lab record", () => {
    // 1. Click into lab records


    // 2. Click new button


    // 3. Enter info into fields


    // 4. Press save


    // 5. Expect to contain new record

  });

  xit("should edit a lab record", () => {
    // 1. Click into lab records


    // 2. Click on first lab record


    // 3. Expect to see record detail page


    // 4. Click on edit


    // 5. Update record


    // 6. Click on submit


    // 7. Expect to see new updated page


    // 8. Go back to list


    // 9. Expect to see new updated record in list

  });

  xit("should delete a lab record", () => {
    // 1. Click on lab record


    // 2. Find the first lab record


    // 3. Expect to see detail page


    // 4. Click on delete


    // 5. Expect to be redirected back to list


    // 6. Expect to not find deleted record


  });
});