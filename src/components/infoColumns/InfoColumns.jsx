// @vendors
import React from 'react'
import { Container, Row } from 'react-bootstrap'

// @styles
import './infoColumns.sass'

// @components
import { InfoGrid } from '../ui/InfoGrid'

// @static
import data from '../../data/dataColumnsInfo.json'

export const InfoColumns = () => {
    console.log(data.gridData)
    return (
        <Container className="section ">
            <Row>
                {data.gridData.map((item, index) => (
                    <InfoGrid icon={item.url} key={index} text={item.text} />
                ))}
            </Row>
        </Container>
    )
}
