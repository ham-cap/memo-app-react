import React from 'react'
export default class TestComponent extends React.Component {
  render() {
    return (
      <div>
        <p>TestComponent</p>
        <p>props: {this.props.hoge}</p>
      </div>
    )
  }
}
