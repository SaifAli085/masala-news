import React from "react";
import noimage from "../img/noimage.jpg";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={imageUrl ? imageUrl : noimage}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}...
            <span className="badge text-bg-danger mx-2 my-2">{source}</span>
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-danger">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
            rel="noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
