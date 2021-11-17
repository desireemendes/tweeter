/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

$(document).ready(function () {
  const createTweetElement = function (tweet) {
    console.log("mytweet", tweet);
    const $tweet = $(`
  <article class="tweets">
          <span class="tweeter-profile"></span>
            <img src="${tweet.user.avatars}"/>
            <h2>${tweet.user.name}</h2>
            <span class="userhandle">
              <h2>${tweet.user.handle}</h2>
          </span>
          <div class="content">
            <h2>${tweet.content.text}</h2>
          </div>
          <footer>
            <div>
              <p>${timeago.format(tweet.created_at)}</p>
            </div>
            <div>
              <i class="far fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              </div>
          </footer>
      </article>`);
    return $tweet;
  }
})