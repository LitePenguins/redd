import React, { Component } from "react";

import "./Dashboard.css";

import ImageContainer from "./Image/ImageContainer";
import TextContainer from "./Text/TextContainer";
import Sidebar from "./Sidebar/Sidebar";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      imageData: [],
      textData: [],
      savedInfo: [],
      subreddits: [],
      loading: true,
    };
    this.filterItems = this.filterItems.bind(this);
  }

  filterItems(sub) {
    let imageFilteredItems = [];
    let textFilteredItems = [];
    for (let data of this.state.savedInfo) {
      if ("All" === sub && data.image === true) {
        imageFilteredItems.push(data);
      } else if (data.subreddit === sub && data.image === true) {
        imageFilteredItems.push(data);
      }

      if ("All" === sub && data.image === false) {
        textFilteredItems.push(data);
        console.log(data);
      } else if (data.subreddit === sub && data.image === false) {
        textFilteredItems.push(data);
        console.log(data);
      }
    }
    this.setState({ imageData: imageFilteredItems });
    this.setState({ textData: textFilteredItems });
  }

  componentDidMount() {
    const url = "http://localhost:9874/saved?image=all";

    // axios.get(url).then((response) => {
    //   console.log(response.data);
    //   this.setState({ links: response.data });
    // });
    fetch(url).then((res) => {
      res.json().then((result) => {
        let images = [];
        let text = [];
        let saved = [];
        let subs = [];

        console.log(result.saved_info);
        for (let i of result.saved_info) {
          saved.push(i);
          if (!i.self && (i.image || i.video)) {
            images.push({
              title: i.title,
              author: i.author,
              url: i.url,
              subreddit: i.subreddit,
              id: i.id,
              videoUrl: i.media,
              image: i.image,
              date: i.date,
            });
          } else {
            text.push({
              title: i.title,
              author: i.author,
              url: i.url,
              subreddit: i.subreddit,
              id: i.id,
              date: i.date,
              text: i.selftext,
            });
          }
        }

        for (let subreddit of result.subreddits) {
          subs.push(subreddit);
        }
        console.log(images);
        console.log(text);

        subs.sort((a, b) => {
          a = a.toLowerCase();
          b = b.toLowerCase();
          if (a === b) return 0;
          return a < b ? -1 : 1;
        });

        this.setState({ imageData: images });
        this.setState({ textData: text });
        this.setState({ savedInfo: saved });
        this.setState({ subreddits: subs });
        this.setState({ loading: false });
      });
    });
  }

  render() {
    return (
      <div>
        <Sidebar
          data={this.state.savedInfo}
          subs={this.state.subreddits}
          onSelected={this.filterItems}
        />
        <div className="containers">
          <ImageContainer
            links={this.state.imageData}
            load={this.state.loading}
          />
          <TextContainer
            links={this.state.textData}
            load={this.state.loading}
          />
        </div>
      </div>
    );
  }
}
