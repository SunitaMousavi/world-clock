function updateCityTime() {
  // Europe/London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    londonDateElement.innerHTML = moment()
      .tz("Europe/London")
      .format("MMMM Do YYYY");
    londonTimeElement.innerHTML = moment()
      .tz("Europe/London")
      .format("HH:mm:ss");
  }

  // America/New_York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    newYorkDateElement.innerHTML = moment()
      .tz("America/New_York")
      .format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = moment()
      .tz("America/New_York")
      .format("HH:mm:ss");
  }

  // Asia/Shanghai
  let shanghaiElement = document.querySelector("#shanghai");
  if (shanghaiElement) {
    let shanghaiDateElement = shanghaiElement.querySelector(".date");
    let shanghaiTimeElement = shanghaiElement.querySelector(".time");
    shanghaiDateElement.innerHTML = moment()
      .tz("Asia/Shanghai")
      .format("MMMM Do YYYY");
    shanghaiTimeElement.innerHTML = moment()
      .tz("Asia/Shanghai")
      .format("HH:mm:ss");
  }
}

// Dropdown cities
function changeCity(event) {
  let cityTimeZones = event.target.value;
  let cityName = cityTimeZones.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZones);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" id="london">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("HH:mm:ss")}</div>
          </div>
  `;
}

updateCityTime();
setInterval(updateCityTime, 1000);

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", changeCity);
