console.log('hello');

$(document).ready(function(){
  $('body').click(function(){
  $(this).css('color','white');
});


var myKey = JSON.parse(apiKey);
console.log(myKey[0]);
myKey = myKey[0].key;
console.log(myKey);

  // $.ajax({
  //   url : `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${myKey}`,
  //   type :'GET',
  //   data :'json',
  //   success:function(data){
  //     console.log(data);
  //     var i;
  //     for (i = 0; i < data.photos.length; i++) {
  //
  //
  //     }
  //   },
  //   error:function(){
  //   console.log('error');
  //   }
  //
  // });//ajax
});
