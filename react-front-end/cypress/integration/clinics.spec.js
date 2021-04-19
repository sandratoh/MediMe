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

    cy.get("form").get("[data-testid=medical-center-input]").type("Hospital A");

    cy.get("form").get("[data-testid=doctor-input]").type("Dr. Strange");

    cy.get("form")
      .get("[data-testid=reason-visit-input]")
      .type("Cough and sore throat");

    cy.get("form").get("[data-testid=diagnosis-input]").type("Common cold");

    cy.contains(/save/i).click();

    cy.contains(".card", "Hospital A").should("exist");
  });

  it("should update a clinical visit", () => {
    cy.contains(".card", "Hospital A").click();

    cy.contains("Clinical Visit Detail").should("exist");

    cy.contains("Hospital A").should("exist");

    cy.contains(/edit/i).click();

    cy.contains("Hospital A").clear().type("Hospital C");

    cy.contains(/save/i).click();

    cy.contains("Clinical Visit Detail").should("exist");

    cy.contains("Hospital C").should("exist");

    cy.get("[data-testid=back-button]").click();

    cy.contains(".card", "Hospital C").should("exist");
  });

  it("should delete a clinical visit", () => {
    cy.contains(".card", "Hospital C").click();

    cy.contains(/delete/i).click();

    cy.contains(".card", "Hospital C").should("not.exist");
  });
});
