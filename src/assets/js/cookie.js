/* eslint-disable */
export default {
  addCookie: function (name, value, keepTimes) {
    document.cookie = '';
    var expires = "";
    if (keepTimes) {
      var date = new Date();
      date.setTime(date.getTime() + (keepTimes * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  },
  readCookie: function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return decodeURI(c.substring(nameEQ.length, c.length));
    }
    return null;
  }
}
