/// <reference types="Cypress" />

describe("Bar Chart", () => {
    beforeEach(() => {
        cy.visit('/')
        // let the chart load by observing the rendered bars
        cy.get('.frappe-chart g.dataset-0 rect').should('have.length', 12)
    })
  it("shows bar chart", () => {
    cy.get(".frappe-chart")
      .should("be.visible")
      .and((chart) => {
        expect(chart.height()).to.be.greaterThan(200);
      })
  });
});
