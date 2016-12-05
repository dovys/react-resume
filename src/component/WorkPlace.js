import React, { Component } from 'react'
import { Row, Grid } from '../lib/layout'
import dateFormat from 'dateformat'

class WorkPlace extends Component {
  // schema: jsonresume.org/schema/
  static propTypes = {
    company: React.PropTypes.string.isRequired,
    position: React.PropTypes.string.isRequired,
    website: React.PropTypes.string,
    startDate: React.PropTypes.string.isRequired,
    endDate: React.PropTypes.string.isRequired,
    summary: React.PropTypes.string,
    highlights: React.PropTypes.arrayOf(React.PropTypes.string),

    // non standard fields
    tags: React.PropTypes.arrayOf(React.PropTypes.string)
  }

  render () {
    let startedAt = dateFormat(new Date(this.props.startDate), 'mmm yyyy')
    let endedAt = dateFormat(new Date(this.props.endDate), 'mmm yyyy')

    return (
      <Row classes='cv-item'>
        <Grid width={3} classes='cv-item-description'>
          <h6>{this.props.company}</h6>
          <p><span className='mute'>{startedAt} - {endedAt}</span></p>
        </Grid>
        <Grid width={9} classes='cv-item-details'>
          <h4>
            {this.props.position}
            {this.renderTags(this.props.tags)}
          </h4>
          <p>{this.props.summary}</p>
        </Grid>
        {this.renderHighlights(this.props.highlights)}
      </Row>
    )
  }

  renderHighlights(highlights) {
    if (highlights === undefined || highlights.length === 0) {
      return
    }

    return (
      <Grid width={12} classes='cv-item-details cv-item-bullet-points'>
        Highlight features I was highly involved in developing:
        <ul>
          {highlights.map((hl, i) => <li key={i}>{hl}</li>)}
        </ul>
      </Grid>
    )
  }

  renderTags(tags) {
    if (tags === undefined) {
      return
    }

    return (
      <span className='tags'>
        {tags.map((t, i) => <span className='tag' key={i}>{t}</span>)}
      </span>
    )
  }
}

export default WorkPlace
