import { faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="headerList">
        <div className="headerListitem">
          <FontAwesomeIcon icon={faBed} />
        </div>  
      </div>
    </div>
  )
}

export default Header