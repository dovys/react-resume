import React, { Component } from 'react'

export class Grid extends Component {
  static propTypes = {
    width: React.PropTypes.number.isRequired,
    children: React.PropTypes.any.isRequired,
    classes: React.PropTypes.string,
  }

  render () {
    let classes = this.props.classes !== undefined ? ' ' + this.props.classes : ''

    return (
      <div className={'span' + this.props.width + classes}>
          {this.props.children}
      </div>
    )
  }
}

export class Row extends Component {
  static propTypes = {
    children: React.PropTypes.any.isRequired,
    classes: React.PropTypes.string,
  }

  render () {
    let classes = this.props.classes !== undefined ? ' ' + this.props.classes : ''

    return (
      <div className={'row' + classes}>
          {this.props.children}
      </div>
    )
  }
}

export class Section extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.any.isRequired,
  }

  render () {
    return (
      <div>
        <Row>
          <Grid width={3}>&nbsp;</Grid>
          <Grid width={9}>
            <h3 className='cv-section-title'>{this.props.title}</h3>
          </Grid>
        </Row>
        {this.props.children}
      </div>
    )
  }
}
