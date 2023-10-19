import React from 'react'

export default function Navbar(props) {
    const onClick = (e) => {
        e.preventDefault();
        const q = document.getElementById('searchBox2').value;
        props.handleSearch(q);
    }
    const handleModeClick = (e) => {
        e.preventDefault();
        console.log("button clicked")
        props.toggleMode();
    }
    return (
        <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light'}`} id='navbar'>
            <div className="container-fluid" style={{"font-family": "Pacifico, cursive"}}>
                <a className="navbar-brand" href="#">Image Gallery</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input box3" type="checkbox" role="switch" onInput={handleModeClick} id="flexSwitchCheckDefault"/>
                    </div>
                    {/* <button >mode change</button> */}
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" id='searchBox2' type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit" onClick={onClick}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
