const { TODOS } = require('./TODOS')

Cypress.Commands.add("createDefaultTodos", () => {
  let cmd = Cypress.log({
    name: 'create default todos',
    consoleProps() {
      return {
        "Inserted Todos": TODOS
      }
    }
  })

  TODOS.forEach((text) => {
    cy.get(".new-todo").type(`${text}{enter}`, { log: false })
  })

  cy.get(".todo-list li", { log: false }).then((listItems) => {
    cmd.set({el: listItems }).snapshot().end()
  })
})