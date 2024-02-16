describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");

    // two player cards should be visible
    const firstPlayer = cy.get('[data-testid="player-player-1"]');
    const secondPlayer = cy.get('[data-testid="player-player-2"]');
    firstPlayer.should("be.visible");
    secondPlayer.should("be.visible");
  });
});
