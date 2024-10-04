import locationIcon from "../../assets/images/icon-location.svg";
import websiteIcon from "../../assets/images/icon-website.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import comapnyIcon from "../../assets/images/icon-company.svg";
import UserStats from "../UserStats";
import IconLInk from "../IconLink";
import useFetch from "../../hooks/useFetch";
import { GitHubUserProp } from "./type";
import { company, formattedDate } from "../../utils/helpers";
import "./index.scss";

export default function UserBio({ selecetedUser }: { selecetedUser: string }) {
  const url = `https://api.github.com/users/${selecetedUser}`;
  const { data, isLoading, error } = useFetch<GitHubUserProp>(url);

  return (
    <div className="user-bio">
      <div className="user-bio__header">
        <div className="user-bio__img">
          <img src={data?.avatar_url} alt="" />
        </div>
        <div className="user-bio__text">
          <h1>{data?.name ?? data?.login}</h1>
          <h3>@{data?.login}</h3>
          <p>Joined {formattedDate(data?.created_at)}</p>
        </div>
      </div>

      <div className="user-bio__about">
        {data?.bio ? (
          <p>{data?.bio}</p>
        ) : (
          <p className="disabled">This profile has no bio</p>
        )}
      </div>
      <div className="user-stats">
        <UserStats label="repos" value={data?.public_repos} />
        <UserStats label="Followers" value={data?.followers} />
        <UserStats label="Following" value={data?.following} />
      </div>
      <ul className="icon-link__list">
        <IconLInk
          name={data?.location}
          imgSrc={locationIcon}
          altText="Location Icon"
        />
        <IconLInk
          name={data?.blog}
          imgSrc={websiteIcon}
          altText="Blog link"
          link={data?.blog}
        />
        <IconLInk
          name={data?.twitter_username}
          imgSrc={twitterIcon}
          altText="Twitter Icon"
          link={`https://twitter.com/${data?.twitter_username}`}
        />
        <IconLInk
          name={data?.company}
          imgSrc={comapnyIcon}
          altText="Company Icon"
          link={`https://github.com/${company(data?.company)}`}
        />
      </ul>
    </div>
  );
}
