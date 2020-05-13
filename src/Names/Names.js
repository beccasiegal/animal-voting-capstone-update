import React from 'react'
import { Link, Router } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Names.css'

export default function Name(props) {
  return (
    <Router>
      <h2 className='Name_title'>
        <Link to={`/names/${props.id}`}>
          {props.name}
        </Link>
      </h2>
      <div className='Name__dates'>
        <div className='Name__dates-modified'>
          Modified
          {' '}
          <span className='Date'>
            {format(props.modified, 'Do MMM YYYY')}
          </span>
        </div>
      </div>
    </Router>
  )
}