
$(document).ready(manageJQuery);

var root = window.location.protocol + "//" + window.location.host + "/" ;

/* JQuery */

function manageJQuery() {

  // Import header
  $('header#main_header').load(root + 'load/header.html', function() {
    // Highlight current page menu item.
    switch (window.location.pathname) {
      case '/': $('a#a_index').addClass('on'); break;
      case '/projects': $('a#a_projects').addClass('on'); break;
      case '/about.html': $('a#a_about').addClass('on'); break;
      default: $('a#a_projects').addClass('on'); break;
    }
    // Hover over menu item animation.
    $('header#main_header a:not(.on)').hover(function() {
      $(this).animate({
        color: '#77ff77',
        fontSize: 17
      }, 200)
    }, function() {
      $(this).animate({
        color: '#ffffff',
        fontSize: 16
      }, 200)
    });
  });

  // Import sidebar
  $('aside#project_sidebar').load(root + 'load/sidebar.html', function() {
    // ListItem highlight of current page selection
    switch (window.location.pathname) {
      case '/projects/queens.html': $('#li_queens').addClass('on'); break;
      case '/projects/2048.html': $('#li_2048').addClass('on'); break;
      case '/projects/battleships.html': $('#li_battle').addClass('on'); break;
      case '/projects/dungeon.html': $('#li_dungeon').addClass('on'); break;
      case '/projects/snake.html': $('#li_snake').addClass('on'); break;
      case '/projects/tree.html': $('#li_tree').addClass('on'); break;
      case '/projects/logic.html': $('#li_logic').addClass('on'); break;
    }
    // Sidebar hiding animation
    $('aside#project_sidebar').hover(function() {
      $(this).animate({
        opacity: '0.97',
        left:'0px'
      })
    }, function() {
      $(this).animate({
        opacity: '0.2',
        left:'-100px'
      })
    })
    // ListItem hover over animation
    $('aside#project_sidebar li:not(.on)').hover(function() {
      $(this).animate({
        backgroundColor: '#243139'
      }, 200)
    }, function() {
      $(this).animate({
        backgroundColor: '#35424a'
      }, 200)
    })
  });

  // Banner text fade in
  $('#banner h1, #banner p').ready(function() {
    $('#banner h1, #banner p').animate({
      opacity: '1'
    }, 2000)
  });

  // Project boxes hover animation
  $('.box2').hover(function() {
    $(this).animate({
      backgroundColor: '#eef1ee',
      opacity: '1',
    }, 300)
  }, function() {
    $(this).animate({
      backgroundColor: '#f4f4f4',
      opacity: '0.7'
    }, 300)
  });

  // Grayscale Image Animation
  $('.grayAnim').hover(function() {
    $(this).find('img').css('filter','grayscale(0)');
  }, function() {
    $(this).find('img').css('filter','grayscale(100%)');
  });



  // Load External content
  let list = $('*[data-src]');
  for (i=0; i<list.length; i++)
    $(list[i]).load($(list[i]).attr('data-src'));


  // Highlight code syntax
  $(document).ajaxComplete(function() {
    Prism.highlightAll();
  });

}

/* Javascript */

function loaded() {
  $('.loaded').css('display','block');
  $('#loading_anim').css('display','none');
}
