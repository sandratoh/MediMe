/* global cy */

describe("User can add, edit, delete clinical visits", () => {
  it("should log in", () => {
    cy.visit("/");

    cy.contains(/log in/i).click();

    cy.get("[data-testid=email-input]").type("rachel@email.com");
    cy.get("[data-testid=password-input]").type("password");

    cy.contains("LOGIN").click();
  });

  it("should add new clinical visit", () => {
    cy.contains("Clinical Visits").click();

    cy.contains(/new/i).click();

    cy.contains("HOSPITAL").click();

    cy.get("form")
      .get("[data-testid=visit-date-input]")
      .get("input")
      .type("2025-04-20");

    cy.get("form").get("[data-testid=medical-center-input]").type("St. Paul's Hospital");

    cy.get("form").get("[data-testid=doctor-input]").type("Dr. Strange");

    cy.get("form")
      .get("[data-testid=reason-visit-input]")
      .type("Cough and sore throat");

    cy.get("form").get("[data-testid=diagnosis-input]").type("Common cold");

    cy.contains(/save/i).click();

    cy.contains(".card", "St. Paul's Hospital").should("exist");
  });

  it("should update a clinical visit", () => {
    cy.contains(".card", "St. Paul's Hospital").click();

    cy.contains("Clinical Visit Detail").should("exist");

    cy.contains("St. Paul's Hospital").should("exist");

    cy.contains(/edit/i).click();

    cy.contains("St. Paul's Hospital").clear().type("Surrey Memorial Hospital");

    cy.contains(/save/i).click();

    cy.contains("Clinical Visit Detail").should("exist");

    cy.contains("Surrey Memorial Hospital").should("exist");

    cy.get("[data-testid=back-button]").click();

    cy.contains(".card", "Surrey Memorial Hospital").should("exist");
  });

  it("should delete a clinical visit", () => {
    cy.contains(".card", "Surrey Memorial Hospital").click();

    cy.contains(/delete/i).click();

    cy.contains(".card", "Surrey Memorial Hospital").should("not.exist");
  });
});
