/* jshint esversion: 6 */

console.log('formative3.1 news api');

$(document).ready(function(){
//   $('body').click(function(){
//   $(this).css('color','white');
// });


var myKey = JSON.parse(apiKey);
// console.log(myKey[0]);
myKey = myKey[0].key;
console.log(myKey);

var languages = [
{
  code: 0,
  name: 'All'
},{
  code: 'ar',
  name: 'Arabic'
},{
  code: 'de',
  name: 'German'
},{
  code: 'en',
  name: 'English'
},{
  code: 'es',
  name: 'Spanish'
},{
  code: 'fr',
  name: 'French'
},{
  code: 'he',
  name: 'Hewbrew'
},{
  code: 'it',
  name: 'Italian'
},{
  code: 'nl',
  name: 'Dutch'
},{
  code: 'no',
  name: 'Norwegian'
},{
  code: 'pt',
  name: 'Portuguese'
},{
  code: 'ru',
  name: 'Russian'
},{
  code: 'se',
  name: 'Northern Sami'
},{
  code: 'zh',
  name: 'Chinese'
}];
var countrys = [{
  code: 0,
  name: 'All'
},{
  code: 'ar',
  name: 'Argentina',
},{
  code: 'au',
  name: 'Australia',
},{
  code: 'at',
  name: 'Austria',
},{
  code: 'be',
  name: 'Belgium',
},{
  code: 'br',
  name: 'Brazil',
},{
  code: 'bg',
  name: 'Bulgaria',
},{
  code: 'ca',
  name: 'Canada',
},{
  code: 'cn',
  name: 'China',
},{
  code: 'co',
  name: 'Colombia',
},{
  code: 'cu',
  name: 'Cuba',
},{
  code: 'cz',
  name: 'Czechia',
},{
  code: 'eg',
  name: 'Egypt',
},{
  code: 'fr',
  name: 'France',
},{
  code: 'de',
  name: 'Germany',
},{
  code: 'gr',
  name: 'Greece',
},{
  code: 'hk',
  name: 'Hong Kong',
},{
  code: 'hu',
  name: 'Hungary',
},{
  code: 'in',
  name: 'India',
},{
  code: 'id',
  name: 'Indonesia',
},{
  code: 'ie',
  name: 'Ireland',
},{
  code: 'il',
  name: 'Israel',
},{
  code: 'it',
  name: 'Italy',
},{
  code: 'jp',
  name: 'Japan',
},{
  code: 'kr',
  name: 'Korea',
},{
  code: 'lv',
  name: 'Latvia',
},{
  code: 'lt',
  name: 'Lithuania',
},{
  code: 'my',
  name: 'Malaysia',
},{
  code: 'mx',
  name: 'Mexico',
},{
  code: 'ma',
  name: 'Morocco',
},{
  code: 'nl',
  name: 'Netherlands',
},{
  code: 'nz',
  name: 'New Zealand',
},{
  code: 'ng',
  name: 'Nigeria',
},{
  code: 'no',
  name: 'Norway',
},{
  code: 'ph',
  name: 'Philippines',
},{
  code: 'pl',
  name: 'Poland',
},{
  code: 'pt',
  name: 'Portugal',
},{
  code: 'ro',
  name: 'Romania',
},{
  code: 'ru',
  name: 'Russian Federation',
},{
  code: 'sa',
  name: 'Saudi Arabia',
},{
  code: 'rs',
  name: 'Serbia',
},{
  code: 'sg',
  name: 'Singapore',
},{
  code: 'sk',
  name: 'Slovakia',
},{
  code: 'si',
  name: 'Slovenia',
},{
  code: 'za',
  name: 'South Africa',
},{
  code: 'se',
  name: 'Sweden',
},{
  code: 'ch',
  name: 'Switzerland',
},{
  code: 'tw',
  name: 'Taiwan',
},{
  code: 'th',
  name: 'Thailand',
},{
  code: 'tr',
  name: 'Turkey',
},{
  code: 'ua',
  name: 'Ukraine',
},{
  code: 'ae',
  name: 'United Arab Emirates',
},{
  code: 'gb',
  name: 'United Kingdom',
},{
  code: 'us',
  name: 'United States',
},{
  code: 've',
  name: 'Venezuela',
}];
var categorys = [{
  code: 'business',
  name: 'Business'
},{
  code: 'entertainment',
  name: 'Entertainment'
},{
  code: 'general',
  name: 'General'
},{
  code: 'health',
  name: 'Health'
},{
  code: 'science',
  name: 'Science'
},{
  code: 'sports',
  name: 'Sports'
},{
  code: 'technology',
  name: 'Technology'
}];


buildUrl();

document.getElementById('searchBtn').addEventListener('click', function(){
  var searchValue = document.getElementById('searchValue').value;
  console.log(searchValue);
  buildUrl();

})
function buildUrl(){
  var baseUrl = 'http://newsapi.org/v2/top-headlines?';
  console.log(baseUrl);
  // if (category != 0 && category != undefined)baseUrl += 'category=' + category + '&';
  // if (country != 0 && country != undefined)baseUrl += 'country=' + country + '&';
  if (searchValue != "[object HTMLInputElement]")baseUrl += 'q=' + searchValue + '&';
  console.log(baseUrl);
  if (baseUrl === 'http://newsapi.org/v2/top-headlines?')baseUrl += 'country=nz&';
  console.log(baseUrl);
  baseUrl += 'apiKey=' + myKey;

  console.log(baseUrl);
  printUrl(baseUrl)
}

function printUrl(url){
  $.ajax({
    url : url,
    type :'GET',
    data :'json',
    success:function(data){
      console.log(data);
      var i;
      for (i = 0; i < data.articles.length; i++) {
        document.getElementById('result').innerHTML +=
          '<div class="card border-0 shadow-sm p-3 mb-5 bg-white rounded">' +
            '<img src="' + data.articles[i].urlToImage + '" class="card-img-top" alt="..">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + data.articles[i].title + '</h5>' +
            '<p class="card-text">' + data.articles[i].description + '</p>' +
          '</div>';
      }
    },
    error:function(){
    console.log('error');
    }

  });//ajax
}



// document.getElementById('searchBtn').addEventListener('click', function(){
//   var searchValue = document.getElementById('searchValue').value;
//
//   $.ajax({
//     url : `http://newsapi.org/v2/everything?q=${searchValue}&apiKey=${myKey}`,
//     type :'GET',
//     data :'json',
//     success:function(data){
//       console.log(data);
//       var i;
//       for (i = 0; i < data.articles.length; i++) {
//         document.getElementById('result').innerHTML =
//           '<div class="card border-0 shadow-sm p-3 mb-5 bg-white rounded">' +
//             '<img src="' + data.articles[i].urlToImage + '" class="card-img-top" alt="..">' +
//             '<div class="card-body">' +
//             '<h5 class="card-title">' + data.articles[i].title + '</h5>' +
//             '<p class="card-text">' + data.articles[i].description + '</p>' +
//           '</div>';
//       }
//     },
//     error:function(){
//     console.log('error');
//     }
//
//   });//ajax

// });



});
