import "./search-panel.css";

const SearchPanel = () => {
  return (
    <div>
      <input
        class="input"
        name="text"
        placeholder="Minsk"
        type="search"
      ></input>
      <button className="search">Search</button>
    </div>
  );
};

export default SearchPanel;
