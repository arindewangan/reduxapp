import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const amount = useSelector(state => state.amount);
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">ANF BANK</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmain" aria-controls="navmain" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmain">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <a className="nav-link" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/about">About</a>
                      </li>
                  </ul>
                  <div>
                    <button disabled={true} className="btn btn-primary">Your Balance: {amount}</button>
                  </div>
                </div>
            </div>
        </nav>
      </div>
  )
}

