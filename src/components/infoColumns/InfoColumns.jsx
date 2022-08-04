// @vendors
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { async } from '@firebase/util'

// @components
import { Grid } from '../ui/grid/Grid'

// @services
import { db_firestore } from '../../services/firebaseConf'

export const InfoColumns = () => {
    const [objectives, setObjectives] = useState([])
    useEffect(() => {
        const getObjetives = async () => {
            setObjectives([])
            const q = query(collection(db_firestore, 'objetives'))
            const query_objetives = await getDocs(q)
            // console.log('QO', query_objetives);
            query_objetives.forEach((objetive) => {
                console.log('id', objetive.id)
                console.log('data', objetive.data().image, objetive.data().content)
                setObjectives( prev => [ ...prev, {
                    image: objetive.data().image,
                    text: objetive.data().content,
                }])
                /* setImages(objetive.data().image);
                setText_objetives(objetive.data().content) */
            })
        }
        getObjetives()
    }, [])
    // console.log('OBJ', objectives)
    return (
        <div className="section ">
            <Row>
                {objectives.map((item, index) => (
                    <Grid icon={item.image} key={index} text={item.text} />
                ))}
            </Row>
        </div>
    )
}
