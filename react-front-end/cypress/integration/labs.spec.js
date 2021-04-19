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
    // cy.visit("/labs");
    cy.wait(1000);
    cy.contains("Lab Records").click();

    // 2. Click new button
    cy.contains(/new/i).click();

    // 3. Enter info into fields
    cy.get("[data-testid=lab-date-input]")
      .type("2024-03-01");

    cy.get("[data-testid=lab-name]")
      // .get("textarea").first()
      .type("Dexter's Laboratory");

    cy.get("[data-testid=lab-record-type]")
      .click();

    cy.contains("MRI")
      .click();

    cy.get("[data-testid=lab-doctor]")
      .type("Dr. Janice Flamingo");

    // 4. Press save
    cy.contains(/save/i)
      .click();

    // 5. Expect to contain new record
    cy.contains(".card", "Mar 01 2024");
    cy.contains(".card", "Dexter's Laboratory");

  });

  it("should edit a lab record", () => {
    // 1. Click into lab records
    cy.wait(1000);
    cy.contains("Lab Records").click();

    // 2. Click on first lab record
    cy.contains(".card", "Dexter's Laboratory")
      .click();

    // 3. Expect to see record detail page
    // 4. Click on edit
    cy.contains(/edit/i)
      .click();
      
    // 5. Update record
    cy.contains("Dexter's Laboratory")
      .clear()  
      .type("Dexter's New Lab");

    cy.contains("MRI")
      .click();
    // 6. Click on submit
    cy.contains("Ultrasound")
      .click();

    cy.contains(/save/i)
      .click();
    // 7. Expect to see new updated page
    cy.get(".lab-detail--data")
      .contains("Dexter's New Lab");

    cy.get(".lab-detail--data")
      .contains(/ultrasound/i);

    // 8. Go back to list
    // cy.get("span")
    //   .contains(".back-button")
    //   .click()

    // 9. Expect to see new updated record in list
    // cy.contains(".card", "Dexter's New Lab")
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