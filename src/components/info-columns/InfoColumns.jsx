// @vendors
import React from 'react'
import { Container, Row } from 'react-bootstrap'

// @components
import { Grid } from '../ui/grid/Grid'

// @static
import data from '../../data/dataColumnsInfo.json'

export const InfoColumns = () => {
    console.log(data.gridData)
    return (
        <Container className="section ">
            <Row>
                {data.gridData.map((item, index) => (
                    <Grid icon={item.url} key={index} text={item.text} />
                ))}
            </Row>
        </Container>
    )
}
