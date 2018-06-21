import React, { Component } from "react";
import "./styles.css";

class ToDo extends Component {

  constructor(props) {
    super(props)
    this.state = { addItem: "", items: [] }
  }

  handleAdd = (e) => {
    e.preventDefault()
    this.setState({ addItem: e.target.value })
  }

  handleAddClick = (e, addItem) => {
    e.preventDefault()
    if (!this.state.addItem) { return }
    const newItem = { name: this.state.addItem }
    this.setState({ items: [...this.state.items, newItem], newItem: "" })
  }

  handleDeleteClick = (e, index) => {

    const tempItems = [...this.state.items]
    tempItems.splice(index,1)
    this.setState({items : tempItems})
  }

  render() {
    return (
      <section className="to-do">
        <h1>My To-do List</h1>
        <input type="text" value={this.state.addItem} onChange={this.handleAdd} />
        <input type="submit" value="AddItem" onClick={(e) => this.handleAddClick(e, this.state.addItem)} />
        <div className="to-do-list">
          {
            this.state.items.map((item, index) => {
              return (
                <ul>
                  <li>Item {index + 1} : {item.name} &nbsp;
                    <input type="submit" value="Delete" onClick={(e) =>this.handleDeleteClick(e,index)} />
                  </li>
                </ul>
              )

            })
          }
        </div>
         
      </section>

    );
  }

}

export default ToDo;


