import React from "react";

export default function Repositories({ props }) {
  return (
    <ul>
      {props.slice(1).map((repo) => {
        return (
          <li key={repo.id.toString()} className="list">
            <span className="repo-text">{repo.name} - </span>
            <span className="repo-description">{repo.description}</span>
          </li>
        );
      })}
    </ul>
  );
}
