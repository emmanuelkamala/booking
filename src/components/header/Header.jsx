import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import './header.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date() - 7,
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setOpenOptions] = useState();
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 0,
  })

  const handleOptionChange = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1, 
      }
    })
  }

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
            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
            </span>
            {
              openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />  
            }
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span> 
            {
              openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button onClick={() => handleOptionChange("adult", "d")} className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button onClick={() => handleOptionChange("adult", "i")} className="optionCounterButton">+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button onClick={() => handleOptionChange("children", "d")} className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button onClick={() => handleOptionChange("children", "i")} className="optionCounterButton">+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button onClick={() => handleOptionChange("room", "d")} className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button onClick={() => handleOptionChange("room", "i")} className="optionCounterButton">+</button>
                </div>
              </div>
            </div>      
            }   
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