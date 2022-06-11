// @vendors
import { useEffect } from 'react'

// @firebase
import { app } from 'src/services/firestore'

export const Header = () => {
    //const storageRef = app.storage().ref()

    return (
        <section className="header">
            {/* <img src="" /> */}
            Hello World
        </section>
    )
}
