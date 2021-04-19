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
    cy.contains("Lab Records").click();

    cy.contains(/new/i).click();

    cy.get("[data-testid=lab-date-input]")
      .type("2024-03-01");

    cy.get("[data-testid=lab-name]")
      .type("Dexter's Laboratory");

    cy.get("[data-testid=lab-record-type]")
      .click();

    cy.contains("MRI")
      .click();

    cy.get("[data-testid=lab-doctor]")
      .type("Dr. Janice Flamingo");

    cy.contains(/save/i)
      .click();

    cy.contains(".card", "Mar 01 2024");
    cy.contains(".card", "Dexter's Laboratory");
  });

  it("should edit a lab record", () => {
    cy.contains("Lab Records").click();

    cy.contains(".card", "Dexter's Laboratory")
      .click();

    cy.contains(/edit/i)
      .click();
      
    cy.contains("Dexter's Laboratory")
      .clear()  
      .type("Dexter's New Lab");

    cy.contains("MRI")
      .click();

    cy.contains("Ultrasound")
      .click();

    cy.contains(/save/i)
      .click();

    cy.get(".lab-detail--data")
      .contains("Dexter's New Lab");

    cy.get(".lab-detail--data")
      .contains(/ultrasound/i);
  });

  it("should delete a lab record", () => {
    cy.contains("Lab Records").click();

    cy.contains(".card", "Dexter's New Lab")
      .click();

    cy.contains(/delete/i)
      .click();

    cy.contains(".card", "Dexter's New Lab").should('not.exist');
  });
});