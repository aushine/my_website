$(function () {
  var $menu = $( "#menu" );
  var $line = $( "#line" );
  var $pack_up = $( "#pack_up_btn" );
  var $music_player = $( "#music_player" );
  var width = 0;
  $pack_up.click(function () {
      if($music_player.css("left") === 0+"px"){
        $music_player.animate({"left": "-260px"});
      }else{
        $music_player.animate({"left": "0px"});
      }
      $pack_up.toggleClass("trans")
  });
  $line.click(function () {
    width = $menu.css("width");
    console.log(width);
    if(width === 34+"px"){
      show_menu();
    }else{
      hide_menu();
    }
  });
  function show_menu() {
    $menu.animate({"width":400, "height": 600});
  }
  function hide_menu(){
    $menu.animate({"width":34, "height": 34});
  }
});
