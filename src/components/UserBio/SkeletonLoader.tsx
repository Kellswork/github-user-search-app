import React from "react";
import UserStats from "../UserStats";
import "./index.scss";

export default function SkeletonLoader() {
  return (
    <div className="user-bio">
      <div className="user-bio__header">
        <div className="user-bio__img">
      <div className="skeleton skeleton__img"></div>
        </div>
        <div className="user-bio__text skeleton__text">
          <p className="skeleton skeleton__text-item"></p>
          <p className="skeleton skeleton__text-item"></p>
          <p className="skeleton skeleton__text-item"></p>
        </div>
      </div>
      <div className="user-bio__about">
        <p className="skeleton skeleton__text"></p>
      </div>
      <div className="user-stats">
        <UserStats label="repos" value={0} />
        <UserStats label="Followers" value={0} />
        <UserStats label="Following" value={0} />
      </div>
      <ul className="icon-link__list">
      <li><div className="skeleton skeleton__icon"></div></li>
        <li><div className="skeleton skeleton__icon"></div></li>
        <li><div className="skeleton skeleton__icon"></div></li>
        <li><div className="skeleton skeleton__icon"></div></li>
      </ul>
    </div>
  );
}

