/* jshint esversion: 6 */

console.log('formative3.1 news api');

$(document).ready(function(){
  $('body').click(function(){
  $(this).css('color','white');
});


var myKey = JSON.parse(apiKey);
// console.log(myKey[0]);
myKey = myKey[0].key;
console.log(myKey);

  $.ajax({
    url : `http://newsapi.org/v2/everything?q=bitcoin&apiKey=${myKey}`,
    type :'GET',
    data :'json',
    success:function(data){
      console.log(data);
      var i;
      for (i = 0; i < data.articles.length; i++) {
        document.getElementById('result').innerHTML +=
        '<div class="card-columns">' +
          '<div class="card">' +
            '<img src="' + data.articles[i].urlToImage + '" class="card-img-top" alt="..">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + data.articles[i].title + '</h5>' +
            '<p class="card-text">' + data.articles[i].description + '</p>' +
          '</div>' +
        '</div>';
      }
    },
    error:function(){
    console.log('error');
    }

  });//ajax
});
