import React, { Component } from 'react'
import { Grid, Row } from '../lib/layout'

const countryCodeMapping = {
  DE: 'Germany'
}

class BasicInformation extends Component {
  // schema: jsonresume.org/schema/
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    email: React.PropTypes.string,
    phone: React.PropTypes.string.isRequired,
    website: React.PropTypes.string.isRequired,
    summary: React.PropTypes.string.isRequired,
    location: React.PropTypes.shape({
      city: React.PropTypes.string,
      address: React.PropTypes.string,
      postalCode: React.PropTypes.string,
      countryCode: React.PropTypes.string,
      region: React.PropTypes.string
    }),
    profiles: React.PropTypes.arrayOf(React.PropTypes.shape({
      network: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      username: React.PropTypes.string
    }))
  }

  render () {
    let websiteTrimmed = this.props.website.replace(/.*?:\/\//g, '')
    let country = countryCodeMapping[this.props.location.countryCode]

    return (
      <div>
        <Row>
          <Grid width={9}>
            <h1 className='logo'>
                {this.props.name}<br />
              <small>{this.props.label}</small>
            </h1>
          </Grid>
          <Grid width={3}>
            <ul className='contact-info fixed'>
              <li><a href={'mailto:' + this.props.email}>{this.props.email}</a></li>
              <li><a href={this.props.website} target='_blank'>{websiteTrimmed}</a></li>
              <li><strong>{this.props.phone}</strong></li>
              <li>{this.props.location.city}, {country}</li>
            </ul>
          </Grid>
        </Row>
        <Row>
          <Grid width={12} classes='cv-profile'>
            {this.props.summary}
          </Grid>
        </Row>
      </div>
    )
  }
}

export default BasicInformation
