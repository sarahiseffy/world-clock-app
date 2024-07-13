function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = document.querySelector(".date1");
  let losAngelesTimeElement = document.querySelector(".time1");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = moment().format("MMMM do, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = document.querySelector(".date2");
  let sydneyTimeElement = document.querySelector(".time2");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = moment().format("MMMM do, YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);