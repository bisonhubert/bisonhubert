const getBaseUrl = () => {
  return process.env.NODE_ENV === "production"
    ? "https://bisonhubert.com"
    : "http://localhost:5173";
};

const baseUrl = getBaseUrl();

describe("Portfolio Site", () => {
  it("Loads root", () => {
    cy.visit(baseUrl);
  });
});
