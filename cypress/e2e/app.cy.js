const { TODOS } = require('../support/TODOS')

describe("React TodoMVC", () => {  
  beforeEach(() => {
    cy.visit('http://localhost:8888')
  })

  it("adds a single todo", () => {
    cy.get(".new-todo").type(`${TODOS[0]}{enter}`)
    cy.get(".todo-list li").should("have.length", 1)

    cy.get(".todo-list li")
      .eq(0)
      .find("label")
      .should("contain", TODOS[0])

    cy.get(".todo-count").contains("1 item left")
  })
  
  it("adds three todos", () => {
    // cy.createDefaultTodos() // using custom command
    // cy.get(".todo-list li").should("have.length", 3)
    
    // cy.get(".todo-count").contains("3 items left")

    cy.createDefaultTodos().as("todos") // using custom command
    cy.get("@todos").should("have.length", 3)
    
    cy.get(".todo-count").contains("3 items left")
  })
  
  it("appends new items to the bottom of the list", () => {
    // cy.createDefaultTodos()
  
    // TODOS.forEach((text, idx) => {
    //   cy.get(".todo-list li")
    //   .eq(idx)
    //   .find("label")
    //   .should("contain", text)
    // })

    cy.createDefaultTodos().as("todos")
  
    TODOS.forEach((text, idx) => {
      cy.get("@todos")
      .eq(idx)
      .find("label")
      .should("contain", text)
    })
  })
})
