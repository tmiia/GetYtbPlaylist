$(function() {
  $.ajax({
    url : 'https://www.googleapis.com/youtube/v3/playlistItems',
    type: 'GET',
    data : {
       part : 'snippet',
       playlistId : 'PLnz0FP8AJF5W3MSNvGRAjLN95mOf7mH_Y',
       maxResults : 10,
       key: 'AIzaSyAzc_YPg_mz54k-3_wjO8MF5C7cH1dv1rs'
    }
  }).done(function(response) {

   // Récupérer videoId

  //  console.log(response);
   let list = response.items;

   let iframePlayer = $('#mainPlayer');

   for (let i = 0; i < list.length; i++) {

    // console.log(list[i].snippet.resourceId.videoId)

    let clone = iframePlayer.clone();
     clone.removeClass('hide');
     clone.attr("src", 'https://www.youtube.com/embed/' + list[i].snippet.resourceId.videoId);
     clone.appendTo('#videos');
   }

  }).fail(function(){

   console.log('Error !');

  })
});
