import React, { Component } from 'react'
import WorkPlace from './WorkPlace.js'
import Education from './Education.js'
import BasicInformation from './BasicInformation.js'
import { Section } from '../lib/layout'

class Resume extends Component {
  static propTypes = {
    basics: React.PropTypes.shape(BasicInformation.propTypes),
    work: React.PropTypes.arrayOf(React.PropTypes.shape(WorkPlace.propTypes)).isRequired,
    education: React.PropTypes.arrayOf(React.PropTypes.shape(Education.propTypes))
  }

  render() {
    return (
      <div className='wrap'>
        <div className='content'>
          <BasicInformation {...this.props.basics} />
          <Section title='Recent work experience'>
            {this.props.work.map((wp, i) => <WorkPlace key={i} {...wp} />)}
          </Section>
          <Section title='Education'>
            {this.props.education.map((e, i) => <Education key={i} {...e} />)}
          </Section>
        </div>
      </div>
    );
  }
}

export default Resume;
