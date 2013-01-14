function generateFriendlierURL() {
  var headingText = jQuery('h1').text();
  // adapted from https://github.com/riverside/friendurl/blob/master/jquery.friendurl.js
  headingText = headingText.toLowerCase() // change everything to lowercase
    .replace(/^\s+|\s+$/g, "") // trim leading and trailing spaces21	
    .replace(/[_|\s]+/g, "-") // change all spaces and underscores to a hyphen
    .replace(/[^a-z\u0400-\u04FF0-9-]+/g, "") // remove all non-cyrillic, non-numeric characters except the hyphen
    .replace(/[-]+/g, "-") // replace multiple instances of the hyphen with a single instance
    .replace(/^-+|-+$/g, "") // trim leading and trailing hyphens
    .replace(/[-]+/g, '-');	
  // console.log(headingText); 
  window.location.hash = headingText;
}
generateFriendlierURL();