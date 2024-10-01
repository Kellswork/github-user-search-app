import "./styles/main.scss";
import Layout from "./layout";
import locationIcon from "./assets/images/icon-location.svg";
import websiteIcon from "./assets/images/icon-website.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import comapnyIcon from "./assets/images/icon-company.svg";
import SearchBar from "./components/SearchBar";
import userImage from "./assets/images/octocat.svg";
import UserStats from "./components/UserStats";
import IconLInk from "./components/IconLink";

function App() {
  return (
    <Layout>
      <SearchBar />
      <div className="user-bio">
        <div className="user-bio__header">
          <div className="user-bio__img">
            <img src={userImage} alt="" />
          </div>
          <div className="user-bio__text">
            <h1>The Octocat</h1>
            <h3>@octocat</h3>
            <p>Joined 25 Jan 2011</p>
          </div>
        </div>

        <div className="user-bio__about">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        </div>
        <div className="user-stats">
          <UserStats label="repos" value={8} />
          <UserStats label="Followers" value={3938} />
          <UserStats label="Following" value={9} />
        </div>
        <ul className="icon-link__list">
          <IconLInk
            name="San Francisco"
            imgSrc={locationIcon}
            altText="Location Icon"
            link=''
          />
          <IconLInk
            name="https://github.blog"
            imgSrc={websiteIcon}
            altText="Website Icon"
            link=''
          />
          <IconLInk
            name="Not Available"
            imgSrc={twitterIcon}
            altText="Twitter Icon"
            link=''
          />
          <IconLInk
            name="@github"
            imgSrc={comapnyIcon}
            altText="Company Icon"
            link=''
          />
        </ul>
      </div>
    </Layout>
  );
}

export default App;
