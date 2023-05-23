import './Titulos.scss'

function Titulos() {

    return (
        <>
            <div className='contenedor__titulos'>
                <h1>BOOK ROOMS, HOMES & APTS</h1>
                <div className='contenedor__titulos--busqueda'>
                    <div>
                        <h4>HOTEL</h4>
                        <h2>Dubay</h2>
                    </div>
                    <div>
                        <h4>CHECK IN</h4>
                        <h3>18 April</h3>
                    </div>
                    <div>
                        <h4>CHECK OUT</h4>
                        <h3>20 April</h3>
                    </div>
                    <div>
                        <h4>GUESTS</h4>
                        <select className='cantidad'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <button>SEARCH</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Titulos