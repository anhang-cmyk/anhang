import React from 'react'

export default class Detail extends React.PureComponent {
  constructor (props) {
    super(props)
    console.log(this.props.match.params, 1)
  }

  // 变更
  componentWillReceiveProps (nextProps) {
    console.log(nextProps.match.params, 2)
  }
  
  render () {
    return (
      <div>Detail</div>
    )
  }
}