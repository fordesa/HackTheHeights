import "./StudentProfile.css";
import homePhoto from "./home.png"
import networkPhoto from "./network.png"
import profilePhoto from "./profile.png"
import collegePhoto from "./collegeStudent.jpeg"
import collegeBanner from "./collegeBannerPhoto.jpg"
import { Link } from "react-router-dom";

const StudentProfile = () => {
  return (
    <main className="student-profile-main">
      <About />
    </main>
  );
};

function About({user}) {
  return (
    <>
      <div className="w-100 h-25 pd-1 topnav row align-items-center">
        <Link to={"/"} className="link col-sm-1 text-center"><img src={homePhoto} className="photos"/></Link>
        <input className="fields col-sm-4" placeholder="Name"/>
        <select className="fields col-sm-3"> 
          <option value="BC"> Boston College </option>
          <option value="BU"> Boston University </option>
          <option value="NEU"> Northeastern </option>
        </select>
        <Link to={""} className="link col-sm-2 text-center p-0"> <button className="fields w-90"> Search </button> </Link>
        <img src={profilePhoto} className="photos col-sm-1"/>
        <img src={networkPhoto} className="photos col-sm-1"/>
      </div>
      <div className="col-sm-12 w-auto content">
        <div className="upper w-100">
          <img className="top" src={collegeBanner}/>
          <img src={collegePhoto} className="profileImage"/>
        </div>
        <div className="bottom w-100 row">
          <div className="basic col-sm-3 align-items-center">
            <p className="info"> Jane Doe <br/>
               doeja@bc.edu <br/>
               Computer Science </p>
          </div>
          <div className="schools col-sm-4">
            <p> Interested Schools </p>
          </div>
          <div className="preferences col-sm-4">
            <p> School Preferences </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentProfile;
