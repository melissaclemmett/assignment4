$(document).ready(function(){
  // alert("TEST");
  $(".hide").hide();
  $(".sectionLink").click(function(event){
    event.preventDefault();
    alert("Sorry, we're not taking any new submissions right now!");
  });
  $(".headerLink").click(function(event){
    event.preventDefault();
    alert("Sorry, we're not taking any new submissions right now.");
  });
  $(".readMore").click(expandBlogPost1);
  $(".readLess").click(collapseBlogPost1);
  $(".learnMore").click(expandAboutRelaxr);
  $(".categories").click(function(event){
    event.stopPropagation();
  })
});

function expandBlogPost1() {
  event.preventDefault();
  $("#showThisOnClick" + ".readLess").removeClass("hide");
  $("#showThisOnClick").slideDown();
  $(".readLess").show();
  $(".readMore").hide();
}

function collapseBlogPost1() {
  event.preventDefault();
  $("#showThisOnClick" + ".readLess").addClass("hide");
  $("#showThisOnClick").slideUp();
  $(".readLess").hide();
  $(".readMore").show();
}

function expandAboutRelaxr() {
  event.preventDefault();
  $("#learnMoreText").slideDown();
  $(".learnMore").hide();
}
