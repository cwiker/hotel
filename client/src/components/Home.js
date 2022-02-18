import "./home.css"
import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <div className="home-bg">
          <div className="home-main">
            <div className="home-welcome">
              <div className="home-content">
                <h1>Welcome to Suite Finder</h1><br/>
                <p>
                  The Easiest and Most Effective Solution to Your Lodging
                  Needs.<br /><br/><br/>
                  <b>Get away from coding, let us take care of your vacation.</b>
                </p>
              </div>
              <Link to="/rooms"><button className="home-button">
                View Rooms
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home
