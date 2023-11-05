import "./Home.css";
import bellPhoto from "./active.png"
import chatPhoto from "./chat.png"
import profilePhoto from "../Profile/profile.jpg"
import mentorPhoto1 from "./egor.jpg"
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
          <div><h1 class="logo">GradConnect</h1></div>
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
      <div class="row text-center connections my-4 ms-2 me-4 rounded-3 p-3 justify-content-start">
          <div class="col"></div>
          <div class=" bg-color col-6">
            <h3>My Connections</h3>
            <div class="bg-gray d-flex align-items-center justify-content-start m-2"> 
              <img src="https://picsum.photos/100/100" class="rounded-circle p-2 mx-2 " width="100" ></img>
              <div class="text-container">
                <p class="p-0 m-0"><b><span class="names">Thomas Jefferson</span></b> &#183; New Message<br />
                Boston College</p>
              </div>
              <button type="button" class="btn btn-lg btn-primary ms-auto me-4">Connect</button>

            </div>
            <div class="m-4 row match-container bg-gray"> 
              <div class="col">
                <img src="https://picsum.photos/100/100" class="rounded-circle" width="100"></img>
              </div>
              <div>

              </div>
            </div>
          </div>
          <div class="col"></div>
      </div>
      
    </>
  );
}

export default Home;
