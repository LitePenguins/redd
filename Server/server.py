import praw
import pprint

import os
import json

from datetime import datetime

from flask import Flask, render_template, request, jsonify, redirect
from flask_cors import CORS
from PIL import Image
from configparser import SafeConfigParser


app = Flask(__name__)
CORS(app)
parser = SafeConfigParser()
parser.read("config.ini")

reddit = praw.Reddit(
    client_id=parser.get("config", "client_id"),
    client_secret=parser.get("config", "client_secret"),
    redirect_uri="http://localhost:9874/login",
    user_agent="testscript",
)


@app.route("/test", methods=["POST"])
def post_test():
    print(request.json)
    return request.data


@app.route("/login", methods=["GET"])
def login():
    # print(request.args)
    # print(request.args["code"])
    print(reddit.auth.authorize(request.args["code"]))
    return redirect("http://localhost:3000/dashboard", code=302)


@app.route("/delete", methods=["POST"])
def delete_saved_data():
    data = request.json
    print(data["id"])

    reddit.submission(data["id"]).unsave()
    return jsonify(data)


@app.route("/saved", methods=["GET"])
def retrieve_saved_data():

    saved_info = []  # to be json'd
    subreddits = []
    count = 0
    # links = []

    for item in reddit.user.me().saved(limit=100):
        print(str(count) + ": ", end="")
        print(type(item))

        # url
        if isinstance(item, praw.models.reddit.submission.Submission):
            dict = {}
            print("Submission")
            dict["type"] = "submission"

            try:
                print(item.media["reddit_video"]["fallback_url"])
                print(type(item.media))
                dict["video"] = True
                dict["media"] = item.media["reddit_video"]["fallback_url"]
            except:
                dict["video"] = False
                dict["media"] = ""
                pass
            # self post check
            if not (item.is_self):
                dict["self"] = False
                if (
                    item.url.endswith("png")
                    or item.url.endswith("jpg")
                    or item.url.endswith("jpeg")
                    or item.url.endswith("gif")
                ):
                    # links.append(str(item.url))
                    dict["image"] = True
                else:
                    dict["image"] = False
            else:
                dict["self"] = True
                dict["image"] = False

            dict["selftext"] = item.selftext

            # title
            try:
                print("Title: " + item.title)
                dict["title"] = item.title
            except AttributeError:
                print("no title")

            # author
            print("Author: " + str(item.author))
            dict["author"] = str(item.author)

            # date
            print(
                "Date: "
                + datetime.utcfromtimestamp(item.created_utc).strftime(
                    "%Y-%m-%d %H:%M:%S"
                )
            )
            dict["date"] = datetime.utcfromtimestamp(item.created_utc).strftime(
                "%Y-%m-%d %H:%M:%S"
            )
            # ID
            print("ID: " + str(item.id))
            dict["id"] = str(item.id)

            # direct url
            try:
                print("url: " + str(item.url))
                dict["url"] = str(item.url)
            except AttributeError:
                print("no url")
                dict["url"] = ""

            # subreddit
            try:
                if not str(item.subreddit) in subreddits:
                    subreddits.append(str(item.subreddit))

                print("Subreddit: " + str(item.subreddit))
                dict["subreddit"] = str(item.subreddit)
            except:
                print("no sub")

            print(dict)
            saved_info.append(dict)

        # check if comment
        elif isinstance(item, praw.models.reddit.comment.Comment):
            # dict["type"] = "comment"
            print("Comment")

        count += 1

    # print(request.args)
    print("---")
    # if not "self" in request.args:
    #     return "Error: no self field provided"

    # for i in reddit_info:
    #     if not i["self"] == json.loads(request.args["self"].lower()):
    #         print(i)

    # print(request.args["type"])

    # print(json.loads(request.args["image"].lower()))
    # print(saved_info)

    print(type(request.args["image"].lower()))

    if not request.args["image"].lower() == "all":
        saved_info = [
            i
            for i in saved_info
            if i["image"] == json.loads(request.args["image"].lower())
        ]

    # final_info = []
    # for i in saved_info:
    #     print(i)
    #     if i["image"] == json.loads(request.args["image"].lower()):
    #         final_info.append(i)

    return jsonify({"saved_info": saved_info, "subreddits": subreddits})


if __name__ == "__main__":
    app.run(host="localhost", port=9874)
