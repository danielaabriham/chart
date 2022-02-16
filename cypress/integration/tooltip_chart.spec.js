/// <reference types="Cypress" />

const tooltipHidden = () => {
  // because element is set to be hidden using attribute style="opacity:0"
  // we should check its visibility using "have.css" assertion
  return cy.get(".graph-svg-tip").should("have.css", "opacity", "0");
};

const tooltipVisible = () => {
  return cy.get(".graph-svg-tip").should("have.css", "opacity", "1");
};

describe("Tooltip Behaviour", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should show and hide tooltip", () => {
    const rectangles = ".frappe-chart g.dataset-0 rect";

    tooltipHidden();
    cy.get(rectangles)
      .eq(1) // pick the string bar
      .trigger("mousemove")
      .wait(1000);

    // assertion to check the text shown in the tooltip
    tooltipVisible().should("contain", "February");

    cy.get(rectangles).eq(1).trigger("mouseleave");

    tooltipHidden();
  });
});
