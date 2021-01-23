
     

//https://github.com/rashedulalam362/assainment-problem-solve

function megaFriend(array) {
    var friends = "";
  
    array.forEach(function(word) {
      if(word.length > friends.length) {
        friends = word;
      }
    });
  
    return friends;
  }
  
  var word = megaFriend(["rashed","minto", "rashedulaalam","jahed"]);
  console.log(word); 