/// <reference types="cypress" />
describe("page", () => {
  it("works", () => {
    cy.visit("/app/account");
    // wait for StackBlitz to boot up server
    cy.get("ion-button", { timeout: 60 * 1000 }).click();
    cy.get("ion-popover").should("be.visible");
  });
});
