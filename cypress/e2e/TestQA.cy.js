context('Live88', () => {
  beforeEach(() => {
    cy.visit('https://static.live88.io/game/ld-client/latest/index.html?config_id=65ae3b3ff098df4e79a999e7&session_id=314a07e7-29c5-49c8-b1c8-e41d27960475&lobby_url=&deposit_url=&device_platform=desktop&engine_base_url=wss://app.live88.io&sub_partner_id=otcasino&lang=en&ts=1744816660657')
    
  })
  it('Test one', () => {
    cy.wait(3000).get('.lootboxes-button-wrapper > .button').click()
  })

  it('Test two', () => {
    cy.wait(3000).get('#nav-opener').click().get('#settings').click()
  })
}
)