# Redd - A Reddit saved data explorer

## Features 
* Explore Reddit saved data, images (link posts) and text posts (self posts)
* Uses OAuth 2.0 for signin, no need for password sign in
* Filter and search by Subreddit
* Organize data by removing saved items 
* Export saved data to computer in .csv format
* Download images locally (currently broken due to CORS limitations)
* Upload saved data to a mongoDB server (disabled for public)

## Requirements
* [npm](https://nodejs.org/en/)
* [Python 3.x](https://www.python.org/downloads/)
* [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Installation
Make sure the above are installed.
Then, run the following commands:

```
git clone https://github.com/LitePenguins/Redd
cd Redd
npm i
```

Make a new Reddit app at https://www.reddit.com/prefs/apps to get a **client id** and **client secret**. The redirect uri should be ```http://localhost:xxxx/login```, xxxx being any port you want to run your backend on. Make sure you update it in ```server.py```.


Navigate to Redd\src\components\Home\Home.jsx, update the following:
```
href={`https://www.reddit.com/api/v1/authorize.compact?client_id=CLIENTIDHERE&response_type=code&state=${state}&redirect_uri=http://localhost:9874/login&scope=vote%20history%20identity%20read%20save`}
```

and insert your client id in CLIENTIDHERE.

Run ```npm start``` to run the front end.

In Redd\Server, update config.ini with your client id and client secret.

Open another command window and run the below for the backend (in Redd):

```
cd Server
python server.py
```

## Screenshots
![mainDashboard1](https://i.imgur.com/6iH69iO.png)
![mainDashboard2](https://i.imgur.com/E6BYnNV.png)
![homescreen](https://i.imgur.com/Y76T9Lf.png)


## Stack 
### Front-End
- JavaScript
 - React Bootstrap (React-Bootstrap)
- FontAwesome

### Back-End
- Python
 - Flask
- PRAW: The Python Reddit API Wrapper
- JavaScript
 - MongoDB (disabled for public)

### Libraries Used
- React-Bootbox
- React-Loading-Skeleton
- Flask
- Flask-CORS
- configparser


