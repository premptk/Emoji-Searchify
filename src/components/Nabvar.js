import React, { Component } from "react";

export class Nabvar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Emoji_Yourself
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="/smileys-and-people">
                    Smileys & People
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="/animals-and-nature">
                    Animals & Nature
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="/food-and-drink">
                    Food & Drink
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="/travel-and-places">
                    Travel & Places
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="/activities">
                    Activities
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="/objects">
                    Objects
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="/symbols">
                    Symbols
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="/flags">
                    Flags
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nabvar;
