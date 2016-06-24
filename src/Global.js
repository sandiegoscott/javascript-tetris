//
// usefule global functions
//
function get(id)        { return document.getElementById(id);  }
function hide(id)       { get(id).style.visibility = 'hidden'; }
function show(id)       { get(id).style.visibility = null;     }
function html(id, html) { get(id).innerHTML = html;            }
