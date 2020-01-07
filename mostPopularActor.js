// Find the most popular actor from an array
// Input: an array of object, where each element contains the property "popularityScore"
// Output: A string that represents the name of the most popular actor

function mostPopularActor(actors) {
    let highestRating = 0;
    let actorName;
      for(let i=0; i < americanActors.length; i++){
        if(americanActors[i].popularityScore > highestRating){
          highestRating = americanActors[i].popularityScore;
          actorName = americanActors[i].name
        }
      }
      console.log("The most popular actor is actor is: " + actorName)
    }
    
    var americanActors = [
      { name: "Tom Hanks", popularityScore: 87 },
      { name: "Natalie Portman", popularityScore: 90 },
      { name: "Jack Nicholson", popularityScore: 98 },
      { name: "Julia Roberts", popularityScore: 88 },
    ];
    // console.log(mostPopularActor(americanActors)); // => "Jack Nicholson"
    
    mostPopularActor(americanActors);