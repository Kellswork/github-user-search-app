import React from "react";
import "./App.css";
import Layout from "./layout";
import locationIcon from "./assets/images/icon-location.svg";
import websiteIcon from "./assets/images/icon-website.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import comapnyIcon from "./assets/images/icon-company.svg";

function App() {
  return (
    <Layout>
      <div className="user-bio">
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div className="user-bio__header">
            <h2>The Octocat</h2>
            <p>@octocat</p>
            <p>Joined 25 Jan 2011</p>
          </div>
        </div>
        <div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </p>
          </div>
          <div>
            <div>
              <p>Repos</p>
              <p>8</p>
            </div>
            <div>
              <p>Followers</p>
              <p>3938</p>
            </div>
            <div>
              <p>Following</p>
              <p>9</p>
            </div>
            <div>
              <div className="icon-link-container">
                <p>san francisco</p>
                <img src={locationIcon} alt="" />
              </div>
              <div className="icon-link-container">
                <p>https://github.blog</p>
                <img src={websiteIcon} alt="" />
              </div>
              <div className="icon-link-container">
                <p>Not Available</p>
                <img src={twitterIcon} alt="" />
              </div>
              <div className="icon-link-container">
                <p>@github</p>
                <img src={comapnyIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
