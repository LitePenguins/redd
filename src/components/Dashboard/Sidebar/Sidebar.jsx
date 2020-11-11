import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Sidebar.css";

const Sidebar = (props) => {
  // const [subreddits, setSubreddits] = useState(props.subreddits);
  const [subreddit, setSubreddit] = useState();

  const selectItem = (e) => {
    e.preventDefault();
    console.log(subreddit);
    props.onSelected(subreddit);
  };

  const exportPosts = () => {
    let data = [];

    for (let entry of props.data) {
      let newEntry = entry;
      newEntry.selftext = newEntry.selftext.replace(/(\r\n|\n|\r)/gm, "");
      newEntry.selftext = `"${newEntry.selftext}"`;
      newEntry.url = newEntry.url.replace(/(\r\n|\n|\r)/gm, "");
      newEntry.url = newEntry.url + "\n";
      console.log(newEntry);
      data.push(Object.values(newEntry));
    }

    const headers = [
      "author",
      "date",
      "id",
      "image",
      "self",
      "selftext",
      "subreddit",
      "title",
      "type",
      "url\n",
    ];

    data.unshift(headers);

    let link = document.createElement("a");
    link.download = "test.csv";
    let blob = new Blob(data, { type: "text/csv" });
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="sidebar">
      <h1 style={{ padding: "1em", textAlign: "center" }}>Redd</h1>

      <section id="formSection">
        <Form id="filtersForm" onSubmit={selectItem}>
          <Form.Group>
            <Form.Label htmlFor="subredditInput">Subreddit</Form.Label>
            <Form.Control
              id="inputSubreddit"
              as="select"
              defaultValue="All"
              onChange={(e) => setSubreddit(e.target.value)}
            >
              <option>All</option>

              {props.subs.map((sub) => {
                return <option key={sub}>{sub}</option>;
              })}
            </Form.Control>
            {/* <div id="loadingSub">Loading subreddits...</div> */}
          </Form.Group>

          <Button
            id="submitFilterButton"
            variant="primary"
            style={{ marginBottom: "20px" }}
            onClick={selectItem}
          >
            Submit
          </Button>

          <Button
            id="exportItemsButton"
            variant="primary"
            onClick={exportPosts}
          >
            Export Posts
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default Sidebar;
