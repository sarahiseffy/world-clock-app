function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = document.querySelector(".date1");
  let losAngelesTimeElement = document.querySelector(".time1");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = document.querySelector(".date2");
  let sydneyTimeElement = document.querySelector(".time2");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = document.querySelector(".date3");
  let londonTimeElement = document.querySelector(".time3");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
function updateCity(event) {
  let cityTimeZone = event.target.value; // Double check by console.log(cityTimeZone) if selected city is logged
  let cityTime = moment().tz(cityTimeZone); // Double check by console.log(cityTime.format("MMMM Do, YYYY")) if selected city is logged
  let citiesElement = document.querySelector("#cities");//this will replace the default displayed cities by the selected city.
  citiesElement.innerHTML = cityTimeZone;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
