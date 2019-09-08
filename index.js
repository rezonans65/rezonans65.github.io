function checkCountryAndMobile(
  startOffset,
  endOffset,
  linkForMobile,
  linkForDescktop
) {
  var status = {};
  var browserTimeZone = getTimeZone();
  var tempTimezone = parseInt(browserTimeZone);
  var tempStartOffset = parseInt(startOffset);
  var tempEndOffset = parseInt(endOffset);
  var checkTouch = "ontouchstart" in document.documentElement;
  if (tempTimezone => tempStartOffset && tempTimezone <= tempEndOffset) {
    status.time = true;
  }
  if (checkTouch) {
    status.touch = true;
  }
  if (localStorage.mobile) {
    status.localStorage = true;
  }
  if (window.DeviceMotionEvent) {
    status.gyroskope = true;
  }
  alert(JSON.stringify(status));
  if (
    status.hasOwnProperty("time") &&
    status.hasOwnProperty("touch") &&
    status.hasOwnProperty("localStorage") &&
    status.hasOwnProperty("gyroskope")
  ) {
    rewindow.location.href = linkForMobile;
  } else {
    rewindow.location.href = linkForDescktop;
  }
}

function getTimeZone() {
  var offset = new Date().getTimezoneOffset(),
    o = Math.abs(offset);
  return (
    (offset < 0 ? "+" : "-") +
    ("00" + Math.floor(o / 60)).slice(-2) +
    ":" +
    ("00" + (o % 60)).slice(-2)
  );
}

checkCountryAndMobile("+03:00", "+04:00");
