let wrapper = document.getElementById("result"),
inputField = document.getElementById("searchin"),
search_btn = document.getElementById("searchBtn"),
locationBtn = document.getElementById("locationBtn"),

middle = document.getElementById("middle");

let api;

locationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    alert("your device do not support the geolocation api");
  }
});

function onError(error) {
//   infoTxt.innerHTML = error.message;
//   infoTxt.classList.add("error");
console.log(error);
}

// document.addEventListener("click", ()=>{
//     document.querySelector('button').style.visibility='visible';
// });

function onSuccess(position) {
  const { latitude, longitude } = position.coords;
  api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apikey}`;
  fetchData();
}

// wrapper.querySelector(".weather").innerText = "helloworld";

search_btn.addEventListener("click", (e) => {
  console.log("search clicked");
  console.log(document.getElementById("searchin").value);
  if (inputField.value != "") {
    requestApi(inputField.value);
  }
});

let apikey = "b7984b5c1336a9683edc580e60487be0";
function requestApi(city) {
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
  fetchData();
}

function fetchData() {
  fetch(api)
    .then((response) => response.json())
    .then((result) => weatherDetails(result));
}

function weatherDetails(info) {
  console.log(info);
  document.getElementById("show-result").style.visibility = "visible";
  const city = info.name;
  const country = info.sys.country;
  const { description, id } = info.weather[0];
  const { feels_like, humidity, temp } = info.main;
  
  let bg = document.getElementById("show-result");
  if (id == 800) {
   
    document.getElementById("wrapper").style.backgroundImage = "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')";
  } else if ((id >= 300 && id <= 321) || (id <= 500 && id >= 531)) {
   
    document.getElementById("wrapper").style.backgroundImage = "url('https://images.unsplash.com/photo-1572455857811-045fb4255b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')";
  } else if (id >= 200 && id <= 232) {

    document.getElementById("wrapper").style.backgroundImage = "url('https://images.unsplash.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3Rvcm0lMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')";
  } else if (id >= 701 && id <= 781) {
   
    document.getElementById("wrapper").style.backgroundImage = "url('https://images.unsplash.com/photo-1594492215832-a299f28a00c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhemUlMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')";
  } else if (id >= 600 && id <= 622) {
   
    document.getElementById("wrapper").style.backgroundImage = "url('https://images.unsplash.com/photo-1582033507397-e0fc36d7c499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80')";
  } else if (id >= 801 && id <= 804) {
   

    document.getElementById("wrapper").style.backgroundImage = "url('https://images.unsplash.com/photo-1609881142760-298c2e76725b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
  }
  console.log(id);
  middle.style.left = "10rem";
  wrapper.querySelector(".weather").innerText = description;
  wrapper.querySelector(".temp .numb").innerText = Math.ceil(temp);
  wrapper.querySelector(".location span").innerText = `${city}, ${country}`;
  wrapper.querySelector(".temp-below .numb-2").innerText = Math.ceil(feels_like);

  wrapper.querySelector(".humidity .numb-humid").innerText = `${Math.ceil(humidity)}%`;
}
