// @vendors
import { Card, Col } from 'react-bootstrap'

// @styles
import './grid.sass'

export const InfoGrid = ({ icon, text }) => {
    console.log(typeof text, text)
    return (
        <Col className="box mx-4">
            <Card>
                <Card.Header>
                    <img
                        alt={`grid-icon-${icon}`}
                        className="grid-icon"
                        src={icon}
                    />
                </Card.Header>
                <Card.Body>
                    <p className="grid-text">{text}</p>
                </Card.Body>
            </Card>
        </Col>
    )
}
