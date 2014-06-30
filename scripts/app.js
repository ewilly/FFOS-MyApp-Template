'use strict';

/* var _ = window.navigator.mozL10n.get;
 * var _ = document.webL10n.get;
 * var lang_current = document.webL10n.getLanguage();
 * var lang = "en";
 * document.webL10n.setLanguage(lang);
 */
  
function initApp() {
    if (lang_current != lang) {
      document.webL10n.setLanguage(lang);
      //alert( 'New language applied : ' + document.webL10n.getLanguage());
    }
}

function printDate() {
  var d = new Date();
  var f = new document.webL10n.DateTimeFormat();
  var format = _('dateTimeFormat_%c');
  var formatted = f.localeFormat(d, format);
  document.getElementById("date").textContent = formatted;
  //alert( formatted );
  date_printed = true;
}

function tickTimer() {
  var now = new Date();
  var elapsed = Math.round((now.getTime() - startTime.getTime())/1000);
  var text = _('seconds_elapsed');
  var newTxt = document.createTextNode(elapsed + ' ' + text);
  var oldTxt = timer.childNodes.item(0);
  timer.replaceChild(newTxt, oldTxt);
}

//initApp();

var startTime = new Date();
var timer = document.getElementById('timer');
setInterval(tickTimer, 1000);

var date_printed = false;

var btnQuit = document.querySelector("#quit-btn");
btnQuit.addEventListener ('click', function () {
  window.close()
});

document.getElementById('quit').addEventListener('click', function () {
  window.close()
});

document.getElementById('switch_lang').addEventListener('click', function () {
  var lang_current = document.webL10n.getLanguage();
  var lang1 = "fr";
  var lang2 = "en";
  if (lang_current == lang1) {
      document.webL10n.setLanguage(lang2);
  } else {
      document.webL10n.setLanguage(lang1);
  };
  if (date_printed == true) {
    printDate();
  };
});