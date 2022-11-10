// @componets
import { Header } from './components/ui/header'
import { InfoColumns } from './components/infoColumns'
import { Contact } from './services/Contacts'
import { Footer } from './components/footer'

// @vendors
import { useEffect, useState } from 'react'

function App() {
    return (
        <div className="App">
            <Header />
            <InfoColumns />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
