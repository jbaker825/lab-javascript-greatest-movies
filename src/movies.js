// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// const movies = require("./data");
const movies = require("./data");
function getAllDirectors(moviesArr) {   

let alldirectorsarr =  moviesArr.map((alldirectors) => {
   return alldirectors.director;
 })
 return alldirectorsarr; 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const filtered = array.filter(function(movie) { 

     if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
	      return true
     }
  })
    return filtered.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (array.length === 0){
    return 0
  } 

  let allScores = array.map(function(movie) {
    return movie.score
  })
  const totalScores = allScores.reduce((acc,curr) => {
    return  acc + (curr || 0)
  },0);

  let average = totalScores / array.length 

  return Number(average.toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
  function dramaMoviesScore(movies) { 

    let drama = movies.filter((item) => item.genre.includes('Drama')); 
  
    let calculateAll = drama.reduce((acc, curr) => {
      return acc + curr.score;
    },0)  
  
    let  total = (calculateAll/drama.length).toFixed(2); 
    return parseFloat(total);

  }
  
  dramaMoviesScore(movies);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  function orderByYear(movies) { 

    const year = [...movies];
    year.sort(function(a, b) {
     return (b.year - a.year); 
   });   
  
    return year.reverse(); 
  
  } 
  
  orderByYear(movies);


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) { 

  } 
  
  orderAlphabetically(movies); 


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {
  function sum(){
    let args = [...arguments]; 
    return args.reduce((acc , curr)=>{ 
      return acc + curr;
    })
  } 
  console.log(sum(1,2,3,4,5,6,7,8,9,10)); 
  
  
  
  for(var i = 0;  i < 4; i++){
    setTimeout(()=>{
      console.log(i);
    },3000);
  } 
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
