$(document).ready(function() {
  $('.awesomeness_teller').on('click', function(e) {
    var awe_some = $(e.target).attr('data-heading');
    $('#awesomeness_holder').text(awe_some)
  }); 

  $('.skill_teller').on('click', function() {
    var route = window.location.pathname.split('/');
    var skill = route.pop();
    $('#skill_holder').text(skill);
  });

  $('.meal_teller').on('click', function() {
    var meal = $('#meal').text();
    $('#meal_holder').text(meal);
  });

});