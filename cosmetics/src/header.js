import React from 'react';

function Header() {
    return (
        <nav classNameName="navbar navbar-expand-lg navbar-dark blue lighten-2 mb-4">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline mr-auto">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-mdb-color btn-rounded btn-sm my-0 ml-sm-2" type="submit">Search</button>
                </form>
            </div>
            <a className="navbar-brand" href="#">Navbar</a>
        </nav>
    ) 
}

export default Header;