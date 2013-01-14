function generateFriendlierURL() {
  
  var headingText = document.title;
  headingText = headingText.replace(/\|.*$/, ''); // removes anything after a pipe, eg '| drupal.org'
  
  // adapted from https://github.com/riverside/friendurl/blob/master/jquery.friendurl.js
  headingText = headingText.toLowerCase() // change everything to lowercase
    .replace(/^\s+|\s+$/g, "") // trim leading and trailing spaces21	
    .replace(/[_|\s]+/g, "-") // change all spaces and underscores to a hyphen
    .replace(/[^a-z0-9_.-]+/g, "") // remove all non-cyrillic, non-numeric characters except: hyphen, underscore, period
    .replace(/[-]+/g, "-") // replace multiple instances of the hyphen with a single instance
    .replace(/^-+|-+$/g, "") // trim leading and trailing hyphens
    .replace(/[-]+/g, '-');	
  // console.log(headingText); 
  window.location.hash = headingText;
}
generateFriendlierURL();
