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

  // Update dynamically added cities
  document.querySelectorAll(".city[data-timezone]").forEach((cityElement) => {
    let cityTimeZone = cityElement.dataset.timezone;
    let cityTime = moment().tz(cityTimeZone);

    cityElement.querySelector(".date").innerHTML =
      cityTime.format("MMMM Do YYYY");
    cityElement.querySelector(".time").innerHTML = cityTime.format("HH:mm:ss");
  });
}

// Dropdown cities
function changeCity(event) {
  let cityTimeZones = event.target.value;

  if (!cityTimeZones) return; // Prevent empty selection

  if (cityTimeZones === "current-location") {
    cityTimeZones = moment.tz.guess();
  }

  let cityName = cityTimeZones.split("/").pop().replace("_", " ");
  let cityId = cityName.toLowerCase().replace(" ", "-"); // Unique ID based on city name
  let citiesElement = document.querySelector("#cities");
  let existingCity = document.querySelector(`#${cityId}`);

  let cityTime = moment().tz(cityTimeZones);

  if (existingCity) {
    // Update existing city's time instead of adding a duplicate
    existingCity.querySelector(".date").innerHTML =
      cityTime.format("MMMM Do YYYY");
    existingCity.querySelector(".time").innerHTML = cityTime.format("HH:mm:ss");
  } else {
    // Add new city if it doesn't already exist
    citiesElement.insertAdjacentHTML(
      "beforeend",
      `
      <div class="city" id="${cityId}" data-timezone="${cityTimeZones}">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("HH:mm:ss")}</div>
      </div>
      `
    );
  }
}

updateCityTime();
setInterval(updateCityTime, 1000);

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", changeCity);
