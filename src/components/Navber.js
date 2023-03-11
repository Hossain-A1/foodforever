
import { NavLink } from "react-router-dom";

const Navber = ({searchHandler,searchQuery,setSearchQuery,inputRef}) => {

// nav active is here
const navActive = ({isActive})=>{
  return {
    color: isActive ? '#16a34a' : null 
  }
}


  return (
    <nav className="navber container mx-auto flex justify-between items-center py-5 flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="logo text-2xl font-bold lowercase italic">
        <span className="text-green-600">F</span>ood
        <span className="text-rose-600">E</span>ver
      </h2>
      <form className="search-bar" onSubmit={searchHandler}>
        <input
          ref={inputRef}
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)}
          type="search"
          placeholder="Search foods menu __"
          required
          className="bg-white/80 p-2 px-6 lg:w-96 rounded-full outline-1 outline-green-600/50 focus:bg-slate-50 text-gray-900 duration-300"
        />
      </form>
      <ul className="menu flex gap-2">
        <li>
          <NavLink style={navActive} end to="/" className="text-gray-600 hover:text-gray-900 duration-300">
            Home
          </NavLink>
        </li> 
        <li>
          <NavLink  style={navActive} to="/favourites" className="text-gray-600 hover:text-gray-900 duration-300">
            favourites <span className="favourites-counter font-bold text-rose-600">(17)</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navber;
