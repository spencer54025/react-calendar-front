import React from 'react'

export default function Header (props) {
    return(
        <div className='header-wrapper'> 
            {/* <button>&#8592;</button> */}
            <h1>{props.monthName}</h1>
            {/* <button>&#8594;</button> */}
        </div>
    )
}
