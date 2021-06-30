const Header = ({ query, handleQuery }) => {
  return (
    <div className="header__container">
      <div className="header__search">
        <img src="/icons/search.svg" />
        <input
          placeholder="search for countries"
          value={query}
          onChange={(event) => handleQuery(event.target.value)}
        />
      </div>
    </div>
  )
}
export default Header
