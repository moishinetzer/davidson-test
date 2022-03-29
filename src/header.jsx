import { Link } from 'react-router-dom';

import './Header.css';

const HeaderLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);

  return <Link to={`/${page}`}>{title}</Link>;
};

const Header = () => {
    return (
      <div className='header'>
        <HeaderLink page='index' />
        <HeaderLink page='about' />
        <HeaderLink page='contact' />
        <HeaderLink page='portfolio' />
      </div>
    );
  };
  
  export default Header;

  <Link to={`/${link}`} className='headerlink-title'>
  {title}
</Link>