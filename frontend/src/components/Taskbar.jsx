function Taskbar() {
    return (
        <div className = "taskbar">
            <button className = "xp-start-button">
            <span className= "xp-logo">
                <span className="flag-quad-red"></span>
                <span className="flag-quad-green"></span>
                <span className="flag-quad-blue"></span>
                <span className="flag-quad-yellow"></span>
            </span>
            <span className= "xp-text">start</span>
            </button>
            <div className="clock">clock goes here</div>
        </div>
    )
}
export default Taskbar