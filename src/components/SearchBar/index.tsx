import searchIcon from '../../assets/images/icon-search.svg'
import './index.scss'

export default function SearchBar() {
  return (
    <div className='search-container'>
      <img src={searchIcon} alt="" />
      <input placeholder="Search GitHub username..."/>
      <span className='error-msg'></span>
      <button className='search-container__btn'>Search</button>
    </div>
  );
}
