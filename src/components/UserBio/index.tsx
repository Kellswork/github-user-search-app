import locationIcon from "../../assets/images/icon-location.svg";
import websiteIcon from "../../assets/images/icon-website.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import comapnyIcon from "../../assets/images/icon-company.svg";
import UserStats from "../UserStats";
import IconLInk from "../IconLink";
import { GitHubUserProp } from "./type";
import { company, formattedDate } from "../../utils/helpers";
import "./index.scss";

export default function UserBio({
  data
}: {
data: GitHubUserProp | null
}) {

  const octocatUserData = {
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    name: "The Octocat",
    login: "octocat",
    created_at: "2011-01-25T18:44:36Z",
    bio: null,
    public_repos: 8,
    followers: 15188,
    following: 9,
    location: "San Francisco",
    blog: "https://github.blog",
    twitter_username: null,
    company: "@github",
  };

  const displayData =
    typeof data === "string" || !data ? octocatUserData : data;

  return (
    <div className="user-bio">
      <div className="user-bio__header">
        <div className="user-bio__img">
          <img src={displayData?.avatar_url} alt="" />
        </div>
        <div className="user-bio__text">
          <h1>{displayData?.name ?? displayData?.login}</h1>
          <h3>@{displayData?.login}</h3>
          <p>Joined {formattedDate(displayData?.created_at)}</p>
        </div>
      </div>

      <div className="user-bio__about">
        {displayData?.bio ? (
          <p>{displayData?.bio}</p>
        ) : (
          <p className="disabled">This profile has no bio</p>
        )}
      </div>
      <div className="user-stats">
        <UserStats label="repos" value={displayData?.public_repos} />
        <UserStats label="Followers" value={displayData?.followers} />
        <UserStats label="Following" value={displayData?.following} />
      </div>
      <ul className="icon-link__list">
        <IconLInk
          name={displayData?.location}
          imgSrc={locationIcon}
          altText="Location Icon"
        />
        <IconLInk
          name={displayData?.blog}
          imgSrc={websiteIcon}
          altText="Blog link"
          link={displayData?.blog}
        />
        <IconLInk
          name={displayData?.twitter_username}
          imgSrc={twitterIcon}
          altText="Twitter Icon"
          link={`https://twitter.com/${displayData?.twitter_username}`}
        />
        <IconLInk
          name={displayData?.company}
          imgSrc={comapnyIcon}
          altText="Company Icon"
          link={`https://github.com/${company(displayData?.company)}`}
        />
      </ul>
    </div>
  );
}
