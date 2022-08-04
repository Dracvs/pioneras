// @vendors
import { Col } from 'react-bootstrap'

export const Grid = ({ clear, icon, text }) => {
    console.log(typeof text, text)
    return (
        <Col className="box mx-4">
            <img alt={`grid-icon-${icon}`} className="grid-icon" src={icon} />
            <p className="m-2 " >{text}</p>
        </Col>
    )
}

// grid4 ${clear ? 'clear' : ''}
