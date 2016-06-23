//
// usefule global functions
//
function get(id)        { return document.getElementById(id);  }
function hide(id)       { get(id).style.visibility = 'hidden'; }
function show(id)       { get(id).style.visibility = null;     }
function html(id, html) { get(id).innerHTML = html;            }

function start() {
  var i;

  canvas = new Canvas('canvas', 20, 10);
  upcoming = new Canvas('upcoming', 6, 6);
  
  for (i = 0; i < 16; i += 1) {
    canvas.addBlock(i, Math.floor(i/2), 'aqua');
    canvas.addBlock(i, Math.floor(i/2)+1, 'yellow');
    canvas.addBlock(i, Math.floor(i/2)+2, 'springgreen');
  }
  for (j = 0; j < 6; j += 1) {
    upcoming.addBlock(j, Math.floor(j/2), 'aqua');
    upcoming.addBlock(j, Math.floor(j/2)+1, 'yellow');
    upcoming.addBlock(j, Math.floor(j/2)+2, 'springgreen');
  }

}

window.onload = function() {
  start();
}