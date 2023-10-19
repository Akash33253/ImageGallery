import React from 'react'

export default function Banner(props) {
  const onClick = (e)=>{
    e.preventDefault();
    const q = document.getElementById('searchBox1').value;
    props.handleSearch(q);
  }
  return (
    <div className='container-fluid d-flex' id='banner'>
      <h1 style={{"fontFamily": "'Pacifico', cursive"}}>Ignite Your Imagination Through Imagery</h1>
      <form className="d-flex searchBox" role="search">
        <input className="form-control me-2" id="searchBox1" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit" onClick={onClick}>Search</button>
      </form>
    </div>
  )
}
