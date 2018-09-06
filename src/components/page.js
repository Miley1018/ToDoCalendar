import React from 'react'
import {moveTo} from '../actions'
import {connect} from 'react-redux'

class Page extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.toIndex == nextProps.name) {
      this.state.tasks.push(nextProps.task)
      this.setState({
        tasks: this.state.tasks
      })
    }
  }
  move(dir, task) {
    let to
    if (dir == 0) {
      to = this.props.name - 1 < 1 ? 4 : this.props.name - 1
    } else {
      to = this.props.name + 1 > 4 ? 1 : this.props.name + 1
    }
    this.props.moveTo(to, task)
    const index = this.state.tasks.indexOf(task)
    if (index > -1) {
      this.state.tasks.splice(index, 1)
    }
    this.setState(
      {tasks: this.state.tasks}
    )
  }
  renderPrompt() {
    let ta = prompt('Please enter your task: ')
    this.state.tasks.push(ta)
    this.setState({tasks: this.state.tasks})
  }
  renderBody() {
    let N = 0
    return this.state.tasks.map((task) => {
      return (
        <div key={N++} style={{display: 'flex', height: '20%'}}>
          <div style={{width: '15%'}} onClick={() => this.move(0, task)}>←</div>
          <div style={{width: '70%', textAlign: 'center', overflow: 'auto'}}>{task}</div>
          <div style={{width: '15%', textAlign:'right'}} onClick={() => this.move(1, task)}>→</div>
        </div>)
    })
  }
  render() {
    return (
      <div className='page'>
        <div className='pageTop'>
          <div style={{alignSelf:'center', fontSize:'28px'}}>
            {this.props.name}
          </div>
        </div>
        <div className='pageBody'>
          {this.renderBody()}
        </div>
        <div className='pageBottom'>
          <span style={{fontSize: '40px', marginLeft: '10px', cursor: 'pointer'}} onClick={() => this.renderPrompt()}>+</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    toIndex:state.todo.toIndex,
    task: state.todo.task
  }
}
export default connect(mapStateToProps,{moveTo})(Page);
