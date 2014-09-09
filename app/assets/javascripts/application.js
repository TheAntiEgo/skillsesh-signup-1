// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require bootstrap-tagsinput
//= require_tree .
//= require bootstrap-modal
//= require bootstrap-modalmanager
//= require twitter/typeahead


$(document).ready(function() {
  $('.has-tooltip').tooltip();
  $('input[title]').tooltip({placement:'top'});
  $('.has-popover').popover({
    trigger: 'hover'
  });
});



// Word Count
$('#field').keyup(function () {
  var max = 500;
  var len = $(this).val().length;
  if (len >= max) {
    $('#charNum').text(' you have reached the limit');
  } else {
    var char = max - len;
    $('#charNum').text(char + ' characters left');
  }
});






