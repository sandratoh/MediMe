describe("User can add, edit, delete clinical visits", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.contains("Log In").click();

    cy.get("[data-testid=email-input]").type("angel@email.com");
    cy.get("[data-testid=password-input]").type("password");

    cy.contains("LOGIN").click();
  });

  it("should add new clinical visit", () => {
    cy.wait(1000);

    cy.contains("Clinical Visits").click();

    cy.contains("New").click();

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

    cy.contains("Save").click();
  });

  it("should update a clinical visit", () => {
    cy.wait(1000);

    cy.contains("Clinical Visits").click();

    cy.contains("Hospital A").click();

    cy.contains("Edit").click();

    cy.contains("Hospital A").clear().type("Hospital C");

    cy.contains("Save").click();
  });

  it("should delete a clinical visit", () => {
    cy.wait(1000);

    cy.contains("Clinical Visits").click();

    cy.contains("Hospital C").click();

    cy.contains("Delete").click();
  });
});
