function Intro(props) {
  const {
    mainContent,
    subContent,
    backgroundImg,
    searchBy,
    searchInput,
    handleSearchBy,
    handleSearchInput,
    handleSubmit,
  } = props;

  return (
    <div>
      <section>
        <div
          style={{ background: `url(${backgroundImg}) center/cover no-repeat` }}
          className="intro intro-container"
        >
          <div className="content-container">
            <p className="content main-sub-header">
              {mainContent}
              <br />
              {subContent}
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="button-container">
              <button
                name="title"
                className="input-button"
                onClick={handleSearchBy}
              >
                Search by Title
              </button>
              <button
                name="author"
                className="input-button"
                onClick={handleSearchBy}
              >
                Search by Author
              </button>
            </div>

            <div className="input-container">
              {searchBy && (
                <div>
                  <input
                    className="input-search"
                    type="text"
                    value={searchInput}
                    placeholder={`Search by ${searchBy}`}
                    onChange={handleSearchInput}
                  />
                  <button type="submit" className="search-button">
                    Search
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Intro;
