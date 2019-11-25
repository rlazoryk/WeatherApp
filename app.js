function MakeRequest(){                   
    var city = document.getElementById('inputBlockInput').value;                
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city  + "&appid=017f85cbc4dda5a17ed09430b5ee378f";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            WriteToDiv(myObj);                    
        }                    
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function WriteToDiv(jsonObj){                
    var temperature = jsonObj.main.temp-273;
    document.getElementById("temperature").innerHTML = temperature.toPrecision(2) + "&#8451"; 
    
    document.getElementById("cityName").innerHTML = jsonObj.name + " " +jsonObj.sys.country;                   
    
    document.getElementById("p1").innerHTML = "Today is " + jsonObj.weather[0].description;

    document.getElementById("p2").innerHTML = "Pressure: " + jsonObj.main.pressure + " mm Hg";

    document.getElementById("p3").innerHTML = "Humidity: " + jsonObj.main.humidity + "%";

    document.getElementById("p4").innerHTML = "Clouds: " + jsonObj.clouds.all + "%";                
    
    document.getElementById("img").src = "http://openweathermap.org/img/wn/"+(jsonObj.weather[0].icon)+"@2x.png";

    document.getElementById("inputBlock").style.display = "none";
    document.getElementById("responseBlock").style.display = "block";
    document.getElementById("clearBtn").style.display = "block";
}     

function Clear(){
    document.getElementById("inputBlock").style.display = "block";
    document.getElementById("responseBlock").style.display = "none";
    document.getElementById("clearBtn").style.display = "none";
}