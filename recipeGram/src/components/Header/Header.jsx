import './Header.scss'
import searchIcon from '../../assets/icons/search-24px.svg'
import logoClear from '../../assets/images/text-1704344969850.png';
import logoWhite from '../../assets/images/text-1704344946577.png';
import menuLogo from '../../assets/icons/menu-svgrepo-com.svg';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  return(
    <header className="header">
      <NavLink to='/'>
        <img className="header__logo" src={logoClear} alt="RecipeGram logo"/>
      </NavLink>
      <div className="header__search">
        <img className='header__search-img' src={searchIcon} alt="search icon" />
        <input className="header__search-text" type="text" placeholder="Search"/>
      </div>
      <img className="header__menu" src={menuLogo} alt="menu icon" />
    </header>
  )
}

export default Header;