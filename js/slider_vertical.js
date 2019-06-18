/*$(function() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 1.2,
      max: 8.0,
	  animate:true,
	  step: 0.1,
      value: 4.0,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value);
      }
    });
    $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
  });*/
  
/*$(function() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 1.2,
      max: 8.0,
	  animate:true,
	  step: 0.1,
      value: 4.0,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value);
      }
    });
	$( "input" ).on("keyup",function(e){
     $( "#slider-vertical" ).slider( "value" ,this.value);*/
	 	 /*$("#amount").change(function () {
    $("#slider-vertical").slider("value",this.value);*/
/*});
  });*/
  
  $(function() {
    $( "#slider-vertical1" ).slider({
      orientation: "vertical",
      range: "min",
      min: 1.2,
      max: 8.0,
	  animate:true,
	  step: 0.1,
      value: 8.0,
      slide: function( event, ui ) {
        $( "#amount1" ).val( ui.value);
      }
    });
	$( "#amount1" ).on("keyup",function(e){
     $( "#slider-vertical1" ).slider( "value" ,this.value);
});
  });
  
  $(function() {
    $( "#slider-vertical2" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0.5,
      max: 512.0,
	  animate:true,
	  step: 0.1,
      value: 512.0,
      slide: function( event, ui ) {
        $( "#amount2" ).val( ui.value);
      }
    });
	$( "#amount2" ).on("keyup",function(e){
     $( "#slider-vertical2" ).slider( "value" ,this.value);
});
  });
  
  $(function() {
    $( "#slider-vertical3" ).slider({
      orientation: "vertical",
      range: "min",
      min: 32,
      max: 4096,
	  animate:true,
	  step: 1,
      value: 4096,
      slide: function( event, ui ) {
        $( "#amount3" ).val( ui.value);
      }
    });
	$( "#amount3" ).on("keyup",function(e){
     $( "#slider-vertical3" ).slider( "value" ,this.value);
});
  });
  
  $(function() {
    $( "#slider-vertical4" ).slider({
      orientation: "vertical",
      range: "min",
	  min: 32,
      max: 30000,
	  animate:true,
	  step: 1,
      value: 30000,
      slide: function( event, ui ) {
        $( "#amount4" ).val( ui.value);
      }
    });
	$( "#amount4" ).on("keyup",function(e){
     $( "#slider-vertical4" ).slider( "value" ,this.value);
});
  });
  
  $(function() {
    $( "#slider-vertical5" ).slider({
      orientation: "vertical",
      range: "min",
      min: 1,
      max: 5,
	  animate:true,
	  step: 1,
      value: 5,
      slide: function( event, ui ) {
        $( "#amount5" ).val( ui.value);
      }
    });
	$( "#amount5" ).on("keyup",function(e){
     $( "#slider-vertical5" ).slider( "value" ,this.value);
});
  });
  
  $(function() {
    $( "#slider-vertical6" ).slider({
      orientation: "vertical",
      range: "min",
      min: 4,
      max: 80,
	  animate:true,
	  step: 1,
      value: 80,
      slide: function( event, ui ) {
        $( "#amount6" ).val( ui.value);
      }
    });
	$( "#amount6" ).on("keyup",function(e){
     $( "#slider-vertical6" ).slider( "value" ,this.value);
});
  });
  
  $(function() {
    $( "#slider-vertical7" ).slider({
      orientation: "vertical",
      range: "min",
      min: 1,
      max: 10,
	  animate:true,
	  step: 1,
      value: 10,
      slide: function( event, ui ) {
        $( "#amount7" ).val( ui.value);
      }
    });
	$( "#amount7" ).on("keyup",function(e){
     $( "#slider-vertical7" ).slider( "value" ,this.value);
});
  });