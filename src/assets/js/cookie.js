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
  }
}
