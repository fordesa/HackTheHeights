import "./Registration.css";

const Registration = () => {
  return (
    <main className="registration-main">
      <Registration_Header />
    </main>
  );
};

function Registration_Header() {
  return (
    <section className="">
      <div className="px-4 py-5 px-md-5 text-center text-lg-start background">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                Building bridges  <br />
                <span className="text-primary">to higher education</span>
              </h1>
              <p className="p_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" />
                          <label className="form-label" for="form3Example1">First name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" />
                          <label className="form-label" for="form3Example2">Last name</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" />
                      <label className="form-label" for="form3Example3">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" />
                      <label className="form-label" for="form3Example4">Password</label>
                    </div>

                    <button type="submit" className="signup-button btn btn-primary btn-block mb-4">
                      Sign up
                    </button>

                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;