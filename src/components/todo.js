import React from 'react'
import Page from './page'

class Todo extends React.Component {
  renderPages() {
    let pages = []
    for (let i = 1; i <= 4; i++) {
      pages.push(<Page key={i} name={i}/>)
    }
    return pages
  }

  render() {
    return (
      <div className='whole'>
        {this.renderPages()}
      </div>
    )
  }
}

export default Todo
