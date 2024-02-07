$(document).ready(function() {
    $('.question-box').click(function() {
      $(this).next('.answer-box').toggleClass('closed');
    });
  });
  