import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    return (
        <div>
            <button className="btn btn-primary" onClick={props.onClick}> Click Me</button>
        </div>
    )
}

Button.propTypes = {

}

export default Button
