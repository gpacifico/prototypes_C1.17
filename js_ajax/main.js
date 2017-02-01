//Create GLOBAL variable below here on line 2
var global_result;

$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);
                global_result = result;
                var first_movie_info = global_result.feed.entry[0]['im:image'][2];
                console.log('First Movie Info:', first_movie_info);
                var third_image_from_each_movie = [];
                //var image = [];
                var title_and_director = [];
                var image_title_and_director = [];
                for (var g = 0; g < global_result.feed.entry.length; g++) {
                    third_image_from_each_movie.push(global_result.feed.entry[g]['im:image'][2].label);
                    //image.push($('<img>').attr('src', third_image_from_each_movie[g]));
                    title_and_director.push(global_result.feed.entry[g]['title'].label);
                    image_title_and_director.push($('<img>').attr('src', third_image_from_each_movie[g]));
                    image_title_and_director.push($('<h1>').text(global_result.feed.entry[g]['title'].label));
                }
                console.log('Third Image From Each Movie:', third_image_from_each_movie);
                console.log('Image, Title, and Director:', image_title_and_director);
                $('#main').append(image_title_and_director);
            }
        });
        console.log('End of click function');
    });
});