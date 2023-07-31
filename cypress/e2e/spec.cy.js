const getBaseUrl = () => {
  return process.env.NODE_ENV === 'production'
    ? 'https://bisonhubert.com'
    : 'http://localhost:3000'
}

const baseUrl = getBaseUrl()

describe('Portfolio Site', () => {
  it('Loads /', () => {
    cy.visit(baseUrl)
    cy.contains('Bison rules.')
  })
})
