/// <reference types="Cypress" />

const tooltipHidden = () => {
  // because element is set to be hidden using attribute style="opacity:0"
  // we should check its visibility using "have.css" assertion
  return cy.get(".graph-svg-tip").should("have.css", "opacity", "0");
};

const tooltipVisible = () => {
  return cy.get(".graph-svg-tip").should("have.css", "opacity", "0");
};

describe("Tooltip Behaviour", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should show and hide tooltip", () => {
    const rectangles = ".frappe-chart g.dataset-0 rect";

    tooltipHidden();
    cy.get(rectangles)
      .eq(0) // pick the string bar
      .trigger("mousemove")
      .wait(1000);

    // assertion to check the text shown in the tooltip
    tooltipVisible().should("contain", "January");

    cy.get(rectangles).eq(1).trigger("mouseleave");

    tooltipHidden();

    // cy.eyesCheckWindow({
    //   sizeMode: 'selector',
    //   selector: '.frappe-chart'
    // })

    // cy.eyesClose() // tell Applitools we are done
  })
});
