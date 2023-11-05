import "./Search.css";

const Search = () => {
  return (
    <main className="search-main d-flex h-100">
      <Filters />
      <Search_Page />
    </main>
  );
};

function Search_Page() {
  return (
    <section className="h-100 search-page container my-4 ms-2 me-4 rounded-3 col-8 p-3 justify-content-between">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <p>Showing <b>6</b> Results</p> 
        </div>
        <div className="d-flex align-items-center">
          <p>Sort by: </p>
          <button type="submit" className="btn"><b>Alphabetical</b></button>
        </div>
      </div>

      <div className="user-info-section d-flex align-items-center my-4 w-100 justify-content-between">
        <img className="rounded-circle" src="https://picsum.photos/id/64/90/90"/>
        <div className="text-container col-4">
          <p className="p-0 m-0 lh-1">First Last, <br />
          Student at <b>Boston College</b></p>
        </div>
        <div className="col-2">
          <p className="lh-1">Open to: <br />
          <b>Essay Reading</b><br />
          <b>General Advice</b></p>
        </div>
        <button type="submit" className="btn btn-xl btn-primary ">
          <p className="m-0">Connect</p>
        </button>
      </div>

      <hr />

      <div className="user-info-section d-flex align-items-center my-4 w-100 justify-content-between">
        <img className="rounded-circle" src="https://picsum.photos/id/65/90/90"/>
        <div className="text-container col-4">
          <p className="p-0 m-0 lh-1">First Last, <br />
          Student at <b>Boston College</b></p>
        </div>
        <div className="col-2">
          <p className="lh-1">Open to: <br />
          <b>All</b></p>
        </div>
        <button type="submit" className="btn btn-xl btn-primary ">
          <p className="m-0">Connect</p>
        </button>
      </div>

      <hr />

      <div className="user-info-section d-flex align-items-center my-4 w-100 justify-content-between">
        <img className="rounded-circle" src="https://picsum.photos/id/342/90/90"/>
        <div className="text-container col-4">
          <p className="p-0 m-0 lh-1">First Last, <br />
          Student at <b>Boston College</b></p>
        </div>
        <div className="col-2">
          <p className="lh-1">Open to: <br />
          <b>Essay Reading</b><br />
          <b>General Advice</b></p>
        </div>
        <button type="submit" className="btn btn-xl btn-primary ">
          <p className="m-0">Connect</p>
        </button>
      </div>

      <hr />

      <div className="user-info-section d-flex align-items-center my-4 w-100 justify-content-between">
        <img className="rounded-circle" src="https://picsum.photos/id/177/90/90"/>
        <div className="text-container col-4">
          <p className="p-0 m-0 lh-1">First Last, <br />
          Student at <b>Boston College</b></p>
        </div>
        <div className="col-2">
          <p className="lh-1">Open to: <br />
          <b>Essay Reading</b><br />
          <b>General Advice</b></p>
        </div>
        <button type="submit" className="btn btn-xl btn-primary ">
          <p className="m-0">Connect</p>
        </button>
      </div>

      <hr />

      <div className="user-info-section d-flex align-items-center my-4 w-100 justify-content-between">
        <img className="rounded-circle" src="https://picsum.photos/id/331/90/90"/>
        <div className="text-container col-4">
          <p className="p-0 m-0 lh-1">First Last, <br />
          Student at <b>Boston College</b></p>
        </div>
        <div className="col-2">
          <p className="lh-1">Open to: <br />
          <b>Essay Reading</b><br />
          <b>General Advice</b></p>
        </div>
        <button type="submit" className="btn btn-xl btn-primary ">
          <p className="m-0">Connect</p>
        </button>
      </div>

      <hr />

      <div className="user-info-section d-flex align-items-center my-4 w-100 justify-content-between">
        <img className="rounded-circle" src="https://picsum.photos/id/338/90/90"/>
        <div className="text-container col-4">
          <p className="p-0 m-0 lh-1">First Last, <br />
          Student at <b>Boston College</b></p>
        </div>
        <div className="col-2">
          <p className="lh-1">Open to: <br />
          <b>Essay Reading</b><br />
          <b>General Advice</b></p>
        </div>
        <button type="submit" className="btn btn-xl btn-primary ">
          <p className="m-0">Connect</p>
        </button>
      </div>

      <hr />
      
    </section>
  );
}

function Filters() {
  return (
    <section className="filters container my-4 ms-4 me-2 rounded-3 col-3 p-3 h-75">
      <button type="submit" className="btn btn-primary btn-lg">Apply Filters</button>
      <hr />
      <div className="active-filters container">
        <h3>Active Filters</h3>
        <p className="text-muted">No Active Filters</p>
      </div>
      <hr />
      <div className="major container">
        <h3>Major</h3>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <hr />
      <div className="college container">
        <h3>College</h3>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <hr />
      <div className="availability container">
        <h3>Availability</h3>
        <h4>Open to ...</h4>
        <ul>
          <li className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Essay Reading</label>
          </li>
          <li className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">General Advice</label>
          </li>
          <li className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Video Calling</label>
          </li>
        </ul>
      </div> 
    </section>
  )
}

export default Search;
