import "./App.css"

function App() {
    return (
        <>
            <div className="desktop">

                <div className= "window" style={{width: 400}}>
                    <div className="title-bar">
                    <div className="title-bar-text">Java OOP Review</div>
                    <div className="title-bar-controls">

                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div className="window-body">
                <p>Welcome! Lessons coming soon..</p>
            </div>
            </div>
            </div>
        </>
    )
}
export default App
