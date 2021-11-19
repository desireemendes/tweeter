// Shows character count, if over 140 characters, turns red
$(document).ready(function() {
  $('#tweet-text').keyup(function() {
    const $tweetCounter = $(this).siblings('div').children('.counter');
    $tweetCounter.text(140 - $(this).val().length);
    if ($(this).val().length > 140) {
      $tweetCounter.css('color', 'red');
    } else {
      $tweetCounter.css('color', 'black');
    }
  });
});