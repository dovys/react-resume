import React from 'react'
import ReactDOM from 'react-dom'
import Resume from './component/Resume'
import './layout/css/base.css'
import './layout/css/grid.css'
import './layout/css/layout.css'
import * as data from '../resume.json'

ReactDOM.render(
  <Resume {...data} />,
  document.getElementById('root')
)
