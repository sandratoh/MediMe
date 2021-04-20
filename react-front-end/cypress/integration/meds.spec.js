/* global cy */

describe("Medications, user can add, edit and delete", () => {
  it("should log in", () => {
    cy.visit("/");

    cy.contains("Log In").click();

    cy.get("[data-testid=email-input]").type("rachel@email.com");
    cy.get("[data-testid=password-input]").type("password");

    cy.contains("LOGIN").click();
  });

  it("should add a new medication", () => {
    cy.contains("Medications").click();

    cy.contains("New").click();

    cy.get("input").first().type("2030-02-02");

    cy.get("[data-testid=med--name-input]")
      .type("Acetaminophen");

    cy.get("[data-testid=med--nickname-input]")
      .type("Pain relief");

    cy.get("[data-testid=med--pharmacy-input]")
      .type("The Medicine Shoppe Pharmacy");

    cy.get("[data-testid=med--doctor-input]")
      .type("Dr. Strange");

    cy.get("[data-testid=med--plus-button]")
      .click();

    cy.get("[data-testid=med--instructions-input]")
      .type("Twice a day");

    cy.get("[name=water]")
      .click();

    cy.contains("Save").click();

    cy.contains("Acetaminophen").should("exist");
  })

  it("should update a medication", () => {
    cy.contains(".card", "Acetaminophen").click();

    cy.contains("Edit").click();

    cy.contains("Acetaminophen").clear().type("Oxycodone");

    cy.contains("Save").click();

    cy.get("[data-testid=back-button]")
      .click();

    cy.contains("Oxycodone").should("exist");
  })

  it("should delete a medication", () => {
    cy.contains("Oxycodone").click();

    cy.contains("Delete").click();

    cy.contains(".card", "Oxycodone").should("not.exist");
  })
})