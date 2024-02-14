$.noConflict();
jQuery(document).ready(function($){
    $("section").children().fadeTo("", 0);
    
// let header = $(".contacts li");
// let target_1 = header.offset().top;

// let contacts_2 = $(".contacts .btn");
// let target_2 = contacts_2.offset().top;

// let experience = $(".my_experience h3");
// let target_3 = experience.offset().top;

// $(window).scroll(function(){
//     if($(window).scrollTop() > target_1){
//     $('section:first').children().fadeTo("1000", 1);
//     }
//     });


//     $(window).scroll(function(){
//         if($(window).scrollTop() > target_2){
//         $('.my_experience').children().fadeTo(1000, 1);
//         // $(".section:last").children().fadeTo(2000, 1);
//         }
//         });

//         $(window).scroll(function(){
//             if($("window").scrollTop() > target_3) {
//                 $('section .my__skills').children().fadeTo(1000, 1);
//             };
//         });

let header = $("header h1");
let taeget_1 = header.offset().top;

let header_2 = $("header .btn");
let taeget_2 = header_2.offset().top;

let content = $(".my_experience"); 
let taeget_3 = content.offset().top;

$(window).scroll(function(){
    if($(window).scrollTop() > taeget_1){
        $(".my__education").children().fadeTo(1000, 1);
    }
});

$(window).scroll(function(){
    if($(window).scrollTop() > taeget_2){
        $(".my_experience").children().fadeTo(1000, 1);
    }
});

$(window).scroll(function(){
    if($(window).scrollTop() > taeget_3) {
        $(".my__skills").children().fadeTo(1000, 1);
    }
});


});