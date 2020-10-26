import React from "react";
import Repositories from "./Repositories";
import NoUser from "./NoUser";

export default function Results({ data }) {
  if (data.filter((d) => d.message === "Not Found").length > 0) {
    return <NoUser />;
  } else
    return (
      <div className="results">
        {data.slice(0, 1).map((prop) => (
          <div className="userInfo" key={prop.id.toString()}>
            <h2>{prop.login}</h2>
            <div>
              <img
                width="200"
                alt={`user: ${prop.login}`}
                src={prop.avatar_url}
              />
            </div>
            <p>User Name: {prop.name}</p>
            <p>User Location: {prop.location}</p>
            <p>User Bio: {prop.bio}</p>
            <p>User Repos:</p>
          </div>
        ))}
        <div className="repoResults">
          {data.slice(1).map((prop) => (
            <Repositories props={prop} />
          ))}
        </div>
      </div>
    );
}
