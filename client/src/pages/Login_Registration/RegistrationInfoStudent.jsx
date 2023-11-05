import "./RegistrationInfo.css";

const Registration = () => {
  return (
    <main className="registration-Info">
      <Registration_Info />
    </main>
  );
};
/* Student: Name, Propspective Major, Schools, Hometown, Grad Year
  Mentor:  Availability, Involvement, Major, Name*/
function Registration_Info() {
  return (
    <>
      <form className="">
          <div className="form-group">
              <label for="exampleInputEmail1" className="m-2">Name</label>
              <input type="text" className="form-control w-auto mr-auto" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First and Last Name"/>
          </div>
          <div className="form-group">
              <label for="exampleInputPassword1" className="m-2"> Prospective Major </label>
              <input type="text" className="form-control w-auto m-2" id="exampleInputPassword1" placeholder="Major"/>
          </div>
          <div className="form-group">
              <label for="exampleInputPassword1" className="m-2"> Schools </label>
              <input type="text" className="form-control m-2 w-auto" id="exampleInputPassword1" placeholder="Schools"/>
          </div>
          <div className="form-group">
              <label for="exampleInputPassword1" className="m-2"> Hometown </label>
              <input type="text" className="form-control m-2 w-auto" id="exampleInputPassword1" placeholder="Hometown"/>
          </div>
          <div className="form-group">
              <label for="exampleInputPassword1" className="m-2"> Grad Year </label>
              <input type="text" className="form-control m-2 w-auto" id="exampleInputPassword1" placeholder="Year"/>
          </div>
          <button type="submit" className="btn btn-primary m-3">Submit</button>
      </form>
    </>
  );
}

export default Registration;