// @componets
import { Header } from './components/ui/header'
import { InfoColumns } from './components/infoColumns'
import { Form } from './components/form'
import { Footer } from './components/footer'

// @vendors
import { useEffect, useState } from 'react'


function App() {
    return (
        <div className="App">
            <Header />
            <InfoColumns />
            <Form />
            <Footer />
        </div>
    )
}

export default App
