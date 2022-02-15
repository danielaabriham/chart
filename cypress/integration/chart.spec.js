/// <reference types="Cypress" />

describe("Bar Chart", () => {
  it("shows bar chart", () => {
    cy.visit("http://localhost:1234/");
    cy.get(".frappe-chart")
      .should("be.visible")
      .and((chart) => {
        expect(chart.height()).to.be.greaterThan(200);
      })
      .find("g.dataset-0 rect")
      .should("have.length", 12);
  });
});
