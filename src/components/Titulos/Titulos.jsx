import './Titulos.scss'

function Titulos() {

  return (
    <>
      <div className='contenedor__titulos'>
        <h1>BOOK ROOMS, HOMES & APTS</h1>
        <div className='contenedor__titulos--busqueda'>
          <div className='contenedor__titulos--box'>
            <div className='contenedor__titulos--mobileBox'>
              <div className='contenedor__titulos--border'>
                <h4>HOTEL</h4>
                <h2>Dubay</h2>
              </div>
              <div className='contenedor__titulos--border'>
                <h4>CHECK IN</h4>
                <input type="date" id="checkOut" className="search-for--input" />
              </div>
            </div>
            <div className='contenedor__titulos--mobileBox'>
              <div className='contenedor__titulos--border'>
                <h4>CHECK OUT</h4>
                <input type="date" id="checkIn" className="search-for--input" />
              </div>
              <div className='contenedor__titulos--border'>
                <h4>GUESTS</h4>
                <select className='cantidad'>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className='contenedor__titulos--box'>
              <button>SEARCH</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Titulos
