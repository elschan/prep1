$(document).ready(function(){

$('#hidepics').on('click',function() {
    $("#oreo").hide();
    $("#picone").hide();
    $("#imgaa").css('visibility','hidden');
   $("#imgbb").css('visibility','hidden');
   $("#imgcc").css('visibility','hidden');
   $("#imgdd").css('visibility','hidden');
});


$("#imga").hover(
function () {
    $("#imgbb").hide();
    $("#imgcc").hide();
    $("#imgdd").hide();
},
function () {
    $("#imgbb").show();
    $("#imgcc").show();
    $("#imgdd").show();
}
); 

$('#imga').on('click',function() {
    $('#imga').css('text-decoration', 'line-through');


});

$("#imgb").hover(
function () {
    $("#imgaa").hide();
    $("#imgcc").hide();
    $("#imgdd").hide();
},
function () {
    $("#imgaa").show();
    $("#imgcc").show();
    $("#imgdd").show();
}
);
  
$('#imgb').on('click',function() {
    $('#imgb').css('text-decoration', 'line-through');

});


$("#imgc").hover(
function () {
    $("#imgbb").hide();
    $("#imgaa").hide();
    $("#imgdd").hide();
},
function () {
    $("#imgbb").show();
    $("#imgaa").show();
    $("#imgdd").show();
}
);

$('#imgc').on('click',function() {
    $('#imgc').css('text-decoration', 'line-through');

});

$("#imgd").hover(
function () {
    $("#imgbb").hide();
    $("#imgcc").hide();
    $("#imgaa").hide();
},
function () {
    $("#imgbb").show();
    $("#imgcc").show();
    $("#imgaa").show();
}
);

$('#imgd').on('click',function() {
    $('#imgd').css('text-decoration', 'line-through');

});



$('#done1').on('click',function() {
    $('#step1').css('text-decoration', 'line-through');


});


$('#done2').on('click',function() {
    $('#step2').css('text-decoration', 'line-through');


});


$('#done3').on('click',function() {
    $('#step3').css('text-decoration', 'line-through');


});


$('#done4').on('click',function() {
    $('#step4').css('text-decoration', 'line-through');


});

})










