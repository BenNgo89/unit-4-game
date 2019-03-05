$(document).ready(function (){
    //creates random number between 19-120
    var ranNum = Math.floor(Math.random() *(120-19+1)) +19;
    $('ranNumBox').html(ranNum );
});