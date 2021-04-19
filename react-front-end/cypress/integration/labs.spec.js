describe("User can add, edit, and delete lab records", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.contains(/log in/i).click();

    cy.get("[data-testid=email-input]").type("rachel@email.com");
    cy.get("[data-testid=password-input]").type("password");

    cy.contains("LOGIN").click();

  });
  
  it("should add a lab record", () => {

  });

  it("should edit a lab record", () => {

  });

  it("should delete a lab record", () => {

  });
});