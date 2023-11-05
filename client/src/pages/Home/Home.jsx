import "./Home.css";
import axios from "axios";
import mentorIcon from "./mentoring.png";
import videoIcon from "./cam-recorder.png";
import essayIcon from "./wirte.png";

const handleLogin = () => {
  axios
    .get("/profile", { withCredentials: true })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const Home = () => {
  return (
    <main className="home-main">
      <About />
    </main>
  );
};

function About() {
  return (
    <>
      <section className="w-100 d-inline-block text-center align-items-center">
        <div className="pt-5 m-5 d-flex justify-content-center">
          <div>
            <h1 className="logo ">Welcome back, Myles</h1>
          </div>
        </div>
        <br />
        <div className="container my-5">
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-8">
              <div className="search">
                <i className="fa fa-search"></i>

                <input
                  type="text"
                  id="search-bar"
                  className="form-control"
                  placeholder="Search for Name, School, Major..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="spacer"></div>
      <div className="row connections mt-4 pb-4 rounded-3 justify-content-center">
        <div className=" bg-white card col-7 me-3 rounded-3">
          <h3 className="m-2">My Connections</h3>
          <div className="row row-cols-2">
            <div className="col mb-3">
              <div className="grow container bg-white rounded-3 card shadow">
                <div className="d-flex flex-column text-center justify-content-center align-items-center">
                  <img
                    src="https://picsum.photos/150/150"
                    className="rounded-circle border p-2 my-2 mt-3 "
                    width="150"
                  ></img>
                  <div className="text-container ">
                    <p className="p-0 mb-2">
                      <b>
                        <span className="names ">Thomas Jefferson</span>
                      </b>
                      <br />
                      Boston College &#8226; Computer Science
                      <br />
                      Brownsburg, IN
                    </p>
                  </div>
                  <div className="open-to-icons d-flex justify-content-evenly my-1">
                    <div className="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                      <img
                        src={mentorIcon}
                        className=""
                        width="30"
                        height="auto"
                        title="Mentoring"
                      />
                    </div>
                    <div className="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={videoIcon} width="30" height="auto" />
                    </div>
                    <div className="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={essayIcon} width="30" height="auto" />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                  >
                    Chat Now
                  </button>

                  <div className="content-container ">
                    <p className="pb-2 mb-2">Interests & Involvements</p>
                    <div className="row d-flex justify-content-evenly align-items-center ">
                      <div className="col ">
                        <p>Maker</p>
                      </div>
                      <div className="col ">
                        <p>Full Stack Developer</p>
                      </div>
                      <div className="col ">
                        <p>Robotics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-3">
              <div className="grow container bg-white rounded-3 card shadow">
                <div className="d-flex flex-column text-center justify-content-center align-items-center">
                  <img
                    src="https://picsum.photos/150/150"
                    className="rounded-circle border p-2 my-2 mt-3 "
                    width="150"
                  ></img>
                  <div className="text-container ">
                    <p className="p-0 mb-2">
                      <b>
                        <span className="names ">Thomas Jefferson</span>
                      </b>
                      <br />
                      Boston College &#8226; Computer Science
                      <br />
                      Brownsburg, IN
                    </p>
                  </div>
                  <div className="open-to-icons d-flex justify-content-evenly my-1">
                    <div className="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                      <img
                        src={mentorIcon}
                        className=""
                        width="30"
                        height="auto"
                        title="Mentoring"
                      />
                    </div>
                    <div className="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={videoIcon} width="30" height="auto" />
                    </div>
                    <div className="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={essayIcon} width="30" height="auto" />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                  >
                    Chat Now
                  </button>

                  <div className="content-container ">
                    <p className="pb-2 mb-2">Interests & Involvements</p>
                    <div className="row d-flex justify-content-evenly align-items-center ">
                      <div className="col ">
                        <p>Maker</p>
                      </div>
                      <div className="col ">
                        <p>Full Stack Developer</p>
                      </div>
                      <div className="col ">
                        <p>Robotics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-3">
              <div className="grow container bg-white rounded-3 card shadow">
                <div className="d-flex flex-column text-center justify-content-center align-items-center">
                  <img
                    src="https://picsum.photos/150/150"
                    className="rounded-circle border p-2 my-2 mt-3 "
                    width="150"
                  ></img>
                  <div className="text-container ">
                    <p className="p-0 mb-2">
                      <b>
                        <span className="names ">Thomas Jefferson</span>
                      </b>
                      <br />
                      Boston College &#8226; Computer Science
                      <br />
                      Brownsburg, IN
                    </p>
                  </div>
                  <div className="open-to-icons d-flex justify-content-evenly my-1">
                    <div className="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                      <img
                        src={mentorIcon}
                        className=""
                        width="30"
                        height="auto"
                        title="Mentoring"
                      />
                    </div>
                    <div className="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={videoIcon} width="30" height="auto" />
                    </div>
                    <div className="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={essayIcon} width="30" height="auto" />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                  >
                    Chat Now
                  </button>

                  <div className="content-container ">
                    <p className="pb-2 mb-2">Interests & Involvements</p>
                    <div className="row d-flex justify-content-evenly align-items-center ">
                      <div className="col ">
                        <p>Maker</p>
                      </div>
                      <div className="col ">
                        <p>Full Stack Developer</p>
                      </div>
                      <div className="col ">
                        <p>Robotics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-3">
              <div className="grow container bg-white rounded-3 card shadow">
                <div className="d-flex flex-column text-center justify-content-center align-items-center">
                  <img
                    src="https://picsum.photos/150/150"
                    className="rounded-circle border p-2 my-2 mt-3 "
                    width="150"
                  ></img>
                  <div className="text-container ">
                    <p className="p-0 mb-2">
                      <b>
                        <span className="names ">Thomas Jefferson</span>
                      </b>
                      <br />
                      Boston College &#8226; Computer Science
                      <br />
                      Brownsburg, IN
                    </p>
                  </div>
                  <div className="open-to-icons d-flex justify-content-evenly my-1">
                    <div className="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                      <img
                        src={mentorIcon}
                        className=""
                        width="30"
                        height="auto"
                        title="Mentoring"
                      />
                    </div>
                    <div className="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={videoIcon} width="30" height="auto" />
                    </div>
                    <div className="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={essayIcon} width="30" height="auto" />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                  >
                    Chat Now
                  </button>

                  <div className="content-container ">
                    <p className="pb-2 mb-2">Interests & Involvements</p>
                    <div className="row d-flex justify-content-evenly align-items-center ">
                      <div className="col ">
                        <p>Maker</p>
                      </div>
                      <div className="col ">
                        <p>Full Stack Developer</p>
                      </div>
                      <div className="col ">
                        <p>Robotics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 bg-secondary rounded-3 card">
          <i>
            <h3 className="m-2">Pending Connections</h3>
          </i>
          <div className="row row-cols 1">
            <div className="col mb-3">
              <div className="grow container bg-white rounded-3 card shadow-sm">
                <div className="d-flex flex-column text-center justify-content-center align-items-center">
                  <img
                    src="https://picsum.photos/150/150"
                    className="rounded-circle border p-2 my-2 mt-3 "
                    width="150"
                  ></img>
                  <div className="text-container ">
                    <p className="p-0 mb-2">
                      <b>
                        <span className="names ">Thomas Jefferson</span>
                      </b>
                      <br />
                      <span className="last-online">
                        <i>Last Online - Tuesday</i>
                      </span>
                      <br />
                      Boston College &#8226; Computer Science
                      <br />
                      Brownsburg, IN
                    </p>
                  </div>
                  <div className="open-to-icons d-flex justify-content-evenly my-1">
                    <div className="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                      <img
                        src={mentorIcon}
                        className=""
                        width="30"
                        height="auto"
                        title="Mentoring"
                      />
                    </div>
                    <div className="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={videoIcon} width="30" height="auto" />
                    </div>
                    <div className="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={essayIcon} width="30" height="auto" />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                  >
                    Message
                  </button>

                  <div className="content-container ">
                    <p className="pb-2 mb-2">Interests & Involvements</p>
                    <div className="row d-flex justify-content-evenly align-items-center ">
                      <div className="col ">
                        <p>Maker</p>
                      </div>
                      <div className="col ">
                        <p>Full Stack Developer</p>
                      </div>
                      <div className="col ">
                        <p>Robotics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col mb-3">
            <div className="grow container bg-white rounded-3 card shadow-sm">
              <div className="d-flex flex-column text-center justify-content-center align-items-center">
                <img
                  src="https://picsum.photos/150/150"
                  className="rounded-circle border p-2 my-2 mt-3 "
                  width="150"
                ></img>
                <div className="text-container ">
                  <p className="p-0 mb-2">
                    <b>
                      <span className="names ">Thomas Jefferson</span>
                    </b>
                    <br />
                    <span className="last-online">
                      <i>Last Online - Tuesday</i>
                    </span>
                    <br />
                    Boston College &#8226; Computer Science
                    <br />
                    Brownsburg, IN
                  </p>
                </div>
                <div className="open-to-icons d-flex justify-content-evenly my-1">
                  <div className="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                    <img
                      src={mentorIcon}
                      className=""
                      width="30"
                      height="auto"
                      title="Mentoring"
                    />
                  </div>
                  <div className="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                    <img src={videoIcon} width="30" height="auto" />
                  </div>
                  <div className="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                    <img src={essayIcon} width="30" height="auto" />
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                >
                  Message
                </button>

                <div className="content-container ">
                  <p className="pb-2 mb-2">Interests & Involvements</p>
                  <div className="row d-flex justify-content-evenly align-items-center ">
                    <div className="col ">
                      <p>Maker</p>
                    </div>
                    <div className="col ">
                      <p>Full Stack Developer</p>
                    </div>
                    <div className="col ">
                      <p>Robotics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //       <h1>High School Networking App</h1>
//       <button onClick={handleLogin}>Login</button> */}
    </>
  );
}

export default Home;
