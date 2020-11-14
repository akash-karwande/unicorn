import React, { useState } from 'react'
import Voting from './Voting'

function Office() {

    const [modernOffice, setModernOffice] = useState({
        name: "ModernOffice",
        votes: 0
    })

    const [offsite, setoffsite] = useState({
        name: "Offsite",
        votes: 0
    })

    const increaseModernOffice = () => {
        setModernOffice({
            votes: modernOffice.votes + 1
        })
    }

    return (
        <div>
            <h2>Make your Voting</h2>
            <Voting modernOffice={modernOffice} offsite={offsite} increaseModern={increaseModernOffice} />
        </div>
    )
}

export default Office
