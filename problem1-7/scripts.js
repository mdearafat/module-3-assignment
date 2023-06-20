//1. Date object
function dayOfTheWeek(date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date(date).getDay();
  return days[d];
}
const day = dayOfTheWeek("2000-08-23");
console.log(`The day of the week is: ${day}`);

//2. Math Object

function sqrtArray(numbers) {
  let total = 0;
  numbers.forEach((number) => {
    total += Math.pow(number, 2);
  });
  return Math.sqrt(total);
}

const numbers = [2, 3, 4, 5];
const result = sqrtArray(numbers);
console.log(`Result: ${result}`);

//3. Prime Number

function checkPrime(number) {
  if (number < 2) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
}
let numberSet = [14, 5, 23, 29, 35];
for (let i = 0; i < numberSet.length; i++) {
  let result = checkPrime(numberSet[i]);
  if (result) {
    console.log(`The number ${numberSet[i]} is a prime number`);
  } else {
    console.log(`The number ${numberSet[i]} is not a prime number`);
  }
}

// 4. Window object
function openWindow(url, width, height) {
  const windowBtn = document.getElementById("window-btn");
  windowBtn.addEventListener("click", function () {
    window.open(url, "", `width=${width},height=${height}`);
  });
}
openWindow("https://www.ostad.app", "800px", "600px");

// 5. Navigator object
function browserInfo() {
  const info = document.getElementById("browser-info");
  info.textContent += `Browser Info: Name-${navigator.appCodeName}, Version-${navigator.appVersion}`;
}
browserInfo();

// 6. GeoLocation api

function getUserLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude);
  console.log("Longitude: " + position.coords.longitude);
}
getUserLocation(); //not working on chrome using live server

//7. js Common events

document.addEventListener("click", function (event) {
  alert("Coordinates: (" + event.clientX + ", " + event.clientY + ")");
});

document.addEventListener("keydown", function (event) {
  alert("Key code: " + event.keyCode);
});

document.getElementById("myImage").addEventListener("mouseover", function () {
  this.src = "../images/image-2.jpg";
});
