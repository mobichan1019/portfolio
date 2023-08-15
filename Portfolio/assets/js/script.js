$(function(){

  //open and close

  function openNav() {
    $("#myNav").css("width", "40%");
  }

  $('#open').click(function(){
    openNav();
  })
  
  function closeNav() {
    $("#myNav").css("width", "0");
  }

  $('#close').click(function(){
    closeNav();
  })


  //slider

  function auto_slider(){
    interval = setInterval(function(){
       fade_slide();
    },3000);
         
    
}

auto_slider();


function fade_slide(){
  //first run
  var currentImage = $('.slider img.active');
  var nextImage = currentImage.next();

  //if reach last element
  if (nextImage.length === 0) {
    console.log(nextImage.length);
    nextImage = $('.slider img:first');
  }
  // //first run
  currentImage.removeClass('active');
  // //second run
  nextImage.addClass('active');
}

//slider2

var sliderCount=$('#slider-wrapper ul li').length;
console.log(sliderCount)
var sliderWidth=$('#slider-wrapper ul li').width();
console.log(sliderWidth)
var sliderHeight=$('#slider-wrapper ul li').height();
console.log(sliderHeight)

var slideUIWidth= sliderCount*sliderWidth;
console.log(slideUIWidth)

$('#slider-wrapper').css({
    width:'100%',height:sliderHeight
});

$('#slider-wrapper ul').css({
    width:slideUIWidth,marginLeft: -sliderWidth
});

$('#slider-wrapper ul li').last().prependTo('#slider-wrapper ul');

//-------

function moveRight(){
    $('#slider-wrapper ul').animate({
        left:sliderWidth
    },'slow',function(){
        $('#slider-wrapper ul li').last().prependTo('#slider-wrapper ul');
        $('#slider-wrapper ul').css('left','0');

    });
}

$('.control_prev').click(function(){
    moveRight();
});

function moveLeft(){
    $('#slider-wrapper ul').animate({
        left:-sliderWidth
    },'slow',function(){
        $('#slider-wrapper ul li').first().appendTo('#slider-wrapper ul');
        $('#slider-wrapper ul').css('left','0');

    });
}

$('.control_next').click(function(){
    moveLeft();
});


// var sliderCount = $('#content4-wrapper ul li').length;
// console.log(sliderCount)
// var sliderWidth = $('#content4-wrapper ul li').width();
// console.log(sliderWidth)
// var sliderHeight = $('#content4-wrapper ul li').height();
// var slideUIWidth = sliderCount * sliderWidth;

// $('#content4-wrapper').css({ 
//   width: '100%', height: sliderHeight 
// });

// $('#content4-wrapper ul').css({ 
//   width: slideUIWidth, marginLeft:-slide
// });

// $('#content4-wrapper ul li').last().prependTo('#content4-wrapper ul');

// function moveRight() {
//   $('#content4-wrapper ul').animate({ left: sliderWidth }, 'slow', function() {
//     $('#content4-wrapper ul li').last().prependTo('#content4-wrapper ul');
//     $('#content4-wrapper ul').css('left', '0');
//   });
// }

// $('.control_prev').click(function() {
//   // alert("testing button")
//   moveRight();
// });

// function moveLeft() {
//   $('#content4-wrapper ul').animate({ left: -sliderWidth }, 'slow', function() {
//     $('#content4-wrapper ul li').first().appendTo('#content4-wrapper ul');
//     $('#content4-wrapper ul').css('left', '0');
//   });
// }

// $('.control_next').click(function() {
//   // alert("test")
//   moveLeft();
// });



});// end of ready function 



// Javascript ver 
// function openNav() {
//     $("#myNav").css("width", "40%");
//   }
  
//   function closeNav() {
//     $("#myNav").css("width", "0");
//   }


