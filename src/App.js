// @componets
import { Header } from './components/ui/header'
import { InfoColumns } from './components/info-columns'
import { Contact } from './services/Contacts'

// @vendors
import { useEffect, useState } from 'react'

function App() {
    return (
        <div className="App">
            <Header />
            <InfoColumns/>
            <Contact />

        </div>
    )
}

export default App
