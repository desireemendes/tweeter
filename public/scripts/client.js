/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


//prevents cross-site scripting
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


//takes in tweet object and returns it in html
$(document).ready(function () {
  const createTweetElement = function (tweet) {
    console.log("mytweet", tweet);
    const $tweet = $(`
          <article class="tweets">
          <span class="tweeter-profile"></span>
            <img src="${tweet.user.avatars}"/>
            <h2>${tweet.user.name}</h2>
            <div class="userhandle">
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
  };

// Empties container and posts tweets in reverse-chronological order
  // const renderTweets = function (tweets) {
  //   const $tweets = $(".tweets")
  //   $tweets.empty();
  //   for (const tweet of tweets) {
  //     const $tweet = createTweetElement(tweet);
  //     $tweets.prepend($tweet);
  //   }
  // };
  
  // Empties container and posts tweets in reverse-chronological order
  const renderTweets = function (tweets) {
    const $tweets = $("#tweets-container")
    $("#tweets-container").empty();
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $("#tweets-container").prepend($tweet);
    }
  }

  // Gets tweets when the page loads
  const loadTweets = function () {
    $.ajax({
      url: '/tweets',
      success: (tweets) => {
        renderTweets(tweets);
      }
    })
  }
  loadTweets();
$("#tweet-text").on('input', function (event) {
  $('.new-tweet .error').empty()
})

//Posts new tweets
  $('#tweet-form').on('submit', function (event) {
    event.preventDefault();

    const serializeData = $(this).serialize();

    const tweetLength = $('#tweet-text').val().length
    if (tweetLength === 0) {
      $('.new-tweet .error')
      .empty()
      .append('Text field empty. Type something to tweet.')
      .slideDown(1000);
    } else if (tweetLength > 140) {
      $('.new-tweet .error')
      .empty()
      .append('You typed too much. Try again.')
      .slideDown(1000)
    } else {
      $('.new-tweet .error')
      .empty()
      .hide()
     $.post("/tweets", serializeData, (response) => {
      loadTweets();
      $("#tweet-text").val('')
      console.log(response);
    });
    }

  })

});