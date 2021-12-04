
// Accordion section
$(function(){
    $("#accordion").accordion({header: "h3" , clearStyle: true , autoHeight: false ,  heightStyle: "panel", collapsible: true});
    //this will open 1st accordian.
    $('#openfirst').click(function(){
        $(".accordion").accordion({active:0 , clearStyle: true , autoHeight: false ,  heightStyle: "panel", collapsible: true});
    });
    //this will open 2nd accordian.
    $('#opensecond').click(function(){
        $(".accordion").accordion({active:1 , clearStyle: true , autoHeight: false ,  heightStyle: "panel", collapsible: true});
    });
   //this will open 3rd accordian.
    $('#openthird').click(function(){
        $(".accordion").accordion({active:2, clearStyle: true , autoHeight: false ,  heightStyle: "panel", collapsible: true});
    });
    //this will open 4th accordian.
    $('#openfourth').click(function(){
        $(".accordion").accordion({active:3 , clearStyle: true , autoHeight: false ,  heightStyle: "panel", collapsible: true});
    });    
    //this will open 5th accordian.
    $('#openfifth').click(function(){
        $(".accordion").accordion({active:4 , clearStyle: true , autoHeight: false ,  heightStyle: "panel", collapsible: true});
    });
});

// Navigation grow section
    $(function() {
        $("#button1").mouseenter(function() {$("#effect1").stop().animate({width: 330}, 700);}) ,
        $("#button1").mouseleave(function() {$("#effect1").animate({width: 225}, 500)})
    });
    $(function() {
        $("#button2").mouseenter(function() {$("#effect2").animate({width: 330}, 700);}) ,
        $("#button2").mouseleave(function() {$("#effect2").animate({width: 225}, 500);})
    });
    $(function() {
        $("#button3").mouseenter(function() {$("#effect3").animate({width: 330}, 700);}) ,
        $("#button3").mouseleave(function() {$("#effect3").animate({width: 225}, 500);})
    });
    $(function() {
        $("#button4").mouseenter(function() {$("#effect4").animate({width: 330}, 700);}) ,
        $("#button4").mouseleave(function() {$("#effect4").animate({width: 225}, 500);})
    });
    $(function() {
        $("#button5").mouseenter(function() {$("#effect5").animate({width: 330}, 700);}) ,
        $("#button5").mouseleave(function() {$("#effect5").animate({width: 225}, 500);})
    });
    



// moving buttons Navigation
     // $(function() {
     //   $('#navigation > li').hover(
     //    function () {
    //     $('a',$(this)).stop().animate({'marginLeft':'85px'},700);
     //    },
     //    function () {
     //     $('a',$(this)).stop().animate({'marginLeft':'0px'},700);
     //    }
    //    );
     //  });