import "./index.scss"
export default function SearchForm() {
  return (
    <div className="search-form-container">
      <h4 className='search-form__title'>BOOK ROOMS,HOMES & APTS</h4>
      <div className="search-form">
        <div className="search-form__item">
          <label htmlFor="hotel">Hotel</label>
          <input type="text" id="hotel" placeholder="Where are you going" className="search-for--input" />
        </div>
        <div className="search-form__item">
          <label htmlFor="">Check In</label>
          <input type="date" id="checkOut" className="search-for--input" />
        </div>
        <div className="search-form__item">
          <label htmlFor="">Check Out</label>
          <input type="date" id="checkIn" className="search-for--input" />
        </div>
        <div className="search-form__item">
          <label htmlFor="guests">Guests</label>
          <select type="select" id="guests" >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select >
        </div>
        <input type="submit" value="Search" />
      </div>
    </div >
  )
}
