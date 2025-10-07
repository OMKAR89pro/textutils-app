// import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar sticky-top navbar-expand-lg navbar-${props.mode==='light'?'light':'dark'} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li> */}
            </ul>

            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
              <button onClick={() => props.switchMode("light")} className="btn btn-light mx-1" title="Enable Light Mode">Light</button>
              <button onClick={() => props.switchMode("dark")} className="btn btn-dark mx-1" title="Enable Dark Mode">Dark</button>
              <button onClick={() => props.switchMode("blue")} className="btn btn-primary mx-1" title="Enable Ocean Mode">Ocean</button>
              <button onClick={() => props.switchMode("green")} className="btn btn-success mx-1" title="Enable Forest Mode">Forest</button>
              <button onClick={() => props.switchMode("cyan")} className="btn btn-secondary mx-1" title="Enable Cyan Mode">Cyan</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
