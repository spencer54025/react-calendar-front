import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

export default function Header (props) {
    return(
        <div className='header-wrapper'>
            <div className="left">
                <button onClick={() => props.monthChanger('previous')}><FontAwesomeIcon icon={faAngleLeft} /></button>
            </div>
            <div className="month-name">
                <h1>{props.monthName}</h1>
            </div>
            <div className="right">
                <button onClick={() => props.monthChanger('next')}><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
        </div>
    )
}
