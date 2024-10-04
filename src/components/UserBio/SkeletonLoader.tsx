import React from "react";
import UserStats from "../UserStats";
import IconLInk from "../IconLink";
import locationIcon from "../../assets/images/icon-location.svg";
import websiteIcon from "../../assets/images/icon-website.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import comapnyIcon from "../../assets/images/icon-company.svg";
import "./index.scss";

export default function SkeletonLoader() {
  return (
    <div className="user-bio">
      <div className="user-bio__header">
        <div className="user-bio__img">
          {/* <img src={data?.avatar_url} alt="" /> */}
        </div>
        <div className="user-bio__text">
          <h1>{"laoding"}</h1>
          <h3>@{"laoding"}</h3>
          <p>Joined {"laoding"}</p>
        </div>
      </div>
      <div className="user-bio__about">
        <p>{"laoding"}</p>
      </div>
      <div className="user-stats">
        <UserStats label="repos" value={0} />
        <UserStats label="Followers" value={0} />
        <UserStats label="Following" value={0} />
      </div>
      <ul className="icon-link__list">
        <IconLInk
          name={"laoding"}
          imgSrc={locationIcon}
          altText="Location Icon"
        />
        <IconLInk name={"laoding"} imgSrc={websiteIcon} altText="Blog link" />
        <IconLInk
          name={"laoding"}
          imgSrc={twitterIcon}
          altText="Twitter Icon"
        />
        <IconLInk
          name={"laoding"}
          imgSrc={comapnyIcon}
          altText="Company Icon"
        />
      </ul>
    </div>
  );
}
