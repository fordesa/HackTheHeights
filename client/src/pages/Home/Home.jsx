import "./Home.css";
import bellPhoto from "./active.png"
import chatPhoto from "./chat.png"
import profilePhoto from "../Profile/profile.jpg"
import mentorPhoto1 from "./egor.jpg"
import mentorIcon from "./mentoring.png"
import videoIcon from "./cam-recorder.png"
import essayIcon from "./wirte.png"
import {Link} from "react-router-dom"
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
      
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  <img src={bellPhoto} width="30"></img>
                </a>
              </li>
              <li class="nav-item">
                <Link to="/profile">
                  <img src={profilePhoto} width="30"></img>
                </Link>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="#">
                  <img src={chatPhoto} width="30"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>  
      </nav>
      <section class="w-100 d-inline-block text-center align-items-center">
        <div class="pt-5 mt-5">
          <div><h1 class="logo">Welcome back, Myles</h1></div>
        </div>

        <div class="container my-5">

                      <div class="row height d-flex justify-content-center align-items-center">
                        <div class="col-md-8">
                          <div class="search">
                            
                            <i class="fa fa-search"></i>

                            <input type="text" id="search-bar" class="form-control" placeholder="Search for Name, School, Major..."/>
                          </div>
                          
                        </div>
                        
                      </div>
                  </div>
        
      </section>
        <div id="spacer">
      
      </div>
      <div class="row connections my-4 rounded-3 justify-content-center">
        <div class=" bg-primary col-7 me-3">
          <h3>My Connections</h3>
          <div class="row row-cols-2">

            <div class="col">
              <div className="container bg-secondary">
                <div class="d-flex justify-content-start align-items-center">
                  <img src="https://picsum.photos/100/100" class="rounded-circle p-2 me-2 " width="80" ></img>
                  <div class="text-container ">
                    <p class="p-0 m-0"><b><span class="names">Thomas Jefferson</span></b><br />
                    Boston College</p>
                  </div>
                  <button type="button" class="btn btn-lg btn-primary ms-auto ">Chat</button>
                </div>
                <div class="content-container ">
                  <p class="p-0 m-0">Computer Science &#8226; 2025 </p>
                  <p class="p-0 m-0">From: Brownsburg, IN</p>
                  <p class="p-0 m-0">Interests & Involvements</p>
                  <ul>
                    <li>Maker</li>
                    <li>Full Stack Developer</li>
                    <li>Robotics</li>
                  </ul>
                  <p>I'm open to: </p>
                </div>
                <div class="open-to-icons d-flex justify-content-evenly mx-4">
                  <div class="d-flex col-3 justify-content-center">
                    <img src={mentorIcon} width="45" height="auto"/>
                  </div>
                  <div class="d-flex col-3 justify-content-center">
                    <img src={videoIcon} width="45" height="auto"/>
                  </div>
                  <div class="d-flex col-3 justify-content-center">
                    <img src={essayIcon} width="45" height="auto"/>
                  </div>
                </div>
                <div class="open-to-icons d-flex justify-content-evenly mx-4">
                  <div class="d-flex col-3 justify-content-center">
                    <p>Mentoring</p>
                  </div>
                  <div class="d-flex col-3 justify-content-center">
                    <p>Video Call</p>
                  </div>
                  <div class="d-flex col-3 justify-content-center">
                    <p>Essay Help</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col ">
              <div className="container  bg-secondary">
                <div class="d-flex justify-content-start align-items-center">
                  <img src="https://picsum.photos/100/100" class="rounded-circle p-2 me-2 " width="80" ></img>
                  <div class="text-container ">
                    <p class="p-0 m-0"><b><span class="names">Thomas Jefferson</span></b><br />
                    Boston College</p>
                  </div>
                  <button type="button" class="btn btn-lg btn-primary ms-auto ">Chat</button>
                </div>
                <div class="content-container ">
                  <p class="p-0 m-0">Computer Science &#8226; 2025 </p>
                  <p class="p-0 m-0">From: Brownsburg, IN</p>
                  <p class="p-0 m-0">Interests & Involvements</p>
                  <ul>
                    <li>Maker</li>
                    <li>Full Stack Developer</li>
                    <li>Robotics</li>
                  </ul>
                  <p>I'm open to: </p>
                </div>
                <div class="open-to-icons d-flex justify-content-evenly mx-4">
                  <div class="d-flex col-3 justify-content-center">
                    <img src={mentorIcon} width="45" height="auto"/>
                  </div>
                  <div class="d-flex col-3 justify-content-center">
                    <img src={videoIcon} width="45" height="auto"/>
                  </div>
                  <div class="d-flex col-3 justify-content-center">
                    <img src={essayIcon} width="45" height="auto"/>
                  </div>
                </div>
                <div class="open-to-icons d-flex justify-content-evenly mx-4">
                  <div class="d-flex col-3 justify-content-center">
                    <p>Mentoring</p>
                  </div>
                  <div class="d-flex col-3 justify-content-center">
                    <p>Video Call</p>
                  </div>
                  <div class="d-flex col-3 justify-content-center">
                    <p>Essay Help</p>
                  </div>
                </div>
              </div>
            </div>
            

            
        
        </div>
        </div>
        <div class="col-4 bg-primary">
          <h3>Pending Connections</h3>
          <div class="row ">
          <div class="col bg-secondary mx-2"> 
            <div class="d-flex justify-content-start align-items-center me-2">
              <img src="https://picsum.photos/100/100" class="rounded-circle p-2 me-2 " width="80" ></img>
              <div class="text-container ">
                <p class="p-0 m-0"><b><span class="names">Thomas Jefferson</span></b><br />
                Boston College</p>
              </div>
              <button type="button" class="btn btn-lg btn-primary ms-auto ">Chat</button>
            </div>
            <div class="content-container ">
              <p class="p-0 m-0">Computer Science &#8226; 2025 </p>
              <p class="p-0 m-0">From: Brownsburg, IN</p>
              <p class="p-0 m-0">Interests & Involvements</p>
              <ul>
                <li>Maker</li>
                <li>Full Stack Developer</li>
                <li>Robotics</li>
              </ul>
              <p>I'm open to: </p>
            </div>
            <div class="open-to-icons d-flex justify-content-evenly mx-4">
              <div class="d-flex col-3 justify-content-center">
                <img src={mentorIcon} width="45" height="auto"/>
              </div>
              <div class="d-flex col-3 justify-content-center">
                <img src={videoIcon} width="45" height="auto"/>
              </div>
              <div class="d-flex col-3 justify-content-center">
                <img src={essayIcon} width="45" height="auto"/>
              </div>
            </div>
            <div class="open-to-icons d-flex justify-content-evenly mx-4">
              <div class="d-flex col-3 justify-content-center">
                <p>Mentoring</p>
              </div>
              <div class="d-flex col-3 justify-content-center">
                <p>Video Call</p>
              </div>
              <div class="d-flex col-3 justify-content-center">
                <p>Essay Help</p>
              </div>
            </div>
            </div>
            </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;
