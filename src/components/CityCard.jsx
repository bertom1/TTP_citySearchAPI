import React from 'react'
import '../index.css'

const CityCard = (props) => {
    return (
        <div className = 'card'>
            {props.zip}
        </div>
    )
}

export default CityCard