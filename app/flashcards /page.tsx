import React from "react"
import "./flashcards.css"

function Card() {
    return <div className="flash-card">Front side</div>
}

export default function App() {
    return (
        <div className="App">
                <h1>FLASHCARDS</h1>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

