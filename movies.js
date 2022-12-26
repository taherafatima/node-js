var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/moviesdb";

MongoClient.connect(url, function(error, db) {
  if (error) 
    throw err;
  var moviedbobj = db.db("moviesdb");
//   moviedbobj.createCollection("movies", function(err, res) {
//     if (err) 
//         throw err;
//     console.log("Collection created!");
    // var movieobj = {
    //     title: "You Can Count on Me",
    //     us_gross: 9180275,
    //     worldwide_gross: 11005992,
    //     us_dvd_sales: null,
    //     production_budget: 1200000,
    //     release_date: "Nov 10 2000",
    //     mpaa_rating: "R",
    //     running_time_min: null,
    //     distributor: "Paramount Vantage",
    //     source: "Original Screenplay",
    //     major_genre: "Drama",
    //     creative_type: "Contemporary Fiction",
    //     director: null,
    //     rotten_tomatoes_rating: 95,
    //     imdb_Rating: 7.7,
    //     imdb_Votes: 14261
    // };

    // var movieobjs = 
        // {
        //     title: "Avatar",
        //     us_gross: 21802798,
        //     worldwide_gross: 94100599,
        //     us_dvd_sales: null,
        //     production_budget: 3200000,
        //     release_date: "Nov 10 2013",
        //     mpaa_rating: "R",
        //     running_time_min: null,
        //     distributor: "Paramount Vantage",
        //     source: "Original Screenplay",
        //     major_genre: "Adventure",
        //     creative_type: "Fiction",
        //     director: null,
        //     rotten_tomatoes_rating: 59,
        //     imdb_rating: 8.7,
        //     imdb_votes: 24261
        // },
    //     {
    //         title: "Avengers",
    //         us_gross: 7181275,
    //         worldwide_gross: 61005992,
    //         us_dvd_sales: null,
    //         production_budget: 3220000,
    //         release_date: "Nov 10 2001",
    //         mpaa_rating: "R",
    //         running_time_min: null,
    //         distributor: "Paramount Vantage",
    //         source: "Original Screenplay",
    //         major_genre: "Action",
    //         creative_type: "Contemporary Fiction",
    //         director: null,
    //         rotten_tomatoes_rating: 80,
    //         imdb_rating: 7.9,
    //         imdb_votes: 15261
    //     }
    
    
    // moviedbobj.collection("movies").insertOne(movieobjs, function(err, res) {
    //     if(error)
    //         throw error;
    //     console.log("Inserted!!");

    // var find_query = {title: "Avengers"};
    
    // moviedbobj.collection("movies").find(find_query).toArray(function(error, result) {
    //     if(error)
    //         throw error;
    //     console.log(result);

    // var update_query = {title: "Avatar"};
    // var new_values = { $set: {title:"Avengers2"}};
    // var count;
    
    // moviedbobj.collection("movies").countDocuments(update_query, function(error, result) {
    //     if(error)
    //         throw error;
    //      count = result;
    //      console.log(count);
        
    //     if (count == 1) {
    //         moviedbobj.collection("movies").updateOne(update_query, new_values, function(error, result) {
    //             if(error)
    //                 throw error;
    //             console.log("Updated!");
    //             db.close()
    //         });
    //     }
    //     else {
    //         console.log("There is no unique title");
    //         db.close()
    //     }
        

    // var find_query = {title: "Avengers2"};
    
    // moviedbobj.collection("movies").find(find_query).toArray(function(error, result) {
    //     if(error)
    //         throw error;
    //     console.log(result);

    // var delete_query = {title: 'Avengers2'};
    // moviedbobj.collection("movies").deleteOne(delete_query, function(error, result) {
    //     if(error)
    //         throw error;
    //     console.log("Deleted!");
    // });

    // var genre_query = {major_genre: "Action"};
    
    // moviedbobj.collection("movies").countDocuments(genre_query, function(error, result) {
    //     if(error)
    //         throw error;
    //     console.log(result);

    //var year_query = {release_date: /$2000/};
    
        // moviedbobj.collection("movies").countDocuments({release_date : {$regex: "2016" }}, function(error, result) {
        //     if(error)
        //         throw error;
        //     console.log(result);


    
        db.close()
});
});
