import React, { Component } from 'react'
import { Row, Grid } from '../lib/layout'
import dateFormat from 'dateformat'

class Education extends Component {
  // schema: jsonresume.org/schema/
  static propTypes = {
    institution: React.PropTypes.string.isRequired,
    area: React.PropTypes.string.isRequired,
    studyType: React.PropTypes.string,
    startDate: React.PropTypes.string,
    endDate: React.PropTypes.string,

    // non standard fields
    location: React.PropTypes.string,
    summary: React.PropTypes.string
  }

  render () {
    let startedAt = dateFormat(new Date(this.props.startDate), 'yyyy')
    let endedAt = dateFormat(new Date(this.props.endDate), 'yyyy')

    return (
      <Row classes='cv-item'>
        <Grid width={3} classes='cv-item-description'>
          <h6>{this.props.institution}</h6>
          <p>
            {this.props.location}<br />
            <span className='mute'>{startedAt} - {endedAt}</span>
          </p>
        </Grid>
        <Grid width={9} classes='cv-item-details'>
          <h4>{this.props.studyType} in {this.props.area}</h4>
          <p className='last'>{this.props.summary}</p>
        </Grid>
      </Row>
    )
  }
}

export default Education
