import React from "react";

import Feed from "./feed";
import FeedInput from "./feedInput";

import { FEEDS } from "../../Constants/feeds";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const Feeds = () => {
  return (
    <>
      <div
        style={{
          height: 570,
        }}
      >
        <PerfectScrollbar component="div" className="pr-4 pt-4 pb-4 pl-2">
          <FeedInput />
          {FEEDS.map((feed) => (
            <Feed feed={feed} key={feed.id} />
          ))}
        </PerfectScrollbar>
      </div>
    </>
  );
};

export default Feeds;
