import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div> 
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Plane</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">Find your next stay</h1>
        <p className="headerDesc">Search deals on hotels, homes, and much more...</p>
        <button className="headerBtn">Sign In / Register</button>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input type="text" placeholder='Where are you going?' className="headerSearchInput" />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span className="headerSearchText">Date to Date</span>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">2 adults 2 children 1 room</span>          
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>         
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header