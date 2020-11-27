function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.querySelector("#forecast").style["display"] = 'block';

    //Set default location if one isn't provided
    let location;
    let city;
    let cntry;
    location = document.querySelector("#location").value;
    if (location.length == 0){
        city = 'ann arbor';
        location = 'ann arbor'
    }
    else{
        city = location.split(',')[0];
        cntry = location.split(',')[1];
    }
    //do something about zip code, country code inputs

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    if (document.querySelector("#celcius").checked){
        format = 'metric';
    }
    else{
        format = 'imperial'
    }

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query;
    if(isNaN(city)){
        query = 'https://api.openweathermap.org/data/2.5/weather?q='+location+'&units='+format+'&appid=303aa92eb13b4435c439ca69778d664d';
    }
    else{
        query = 'https://api.openweathermap.org/data/2.5/weather?zip='+location+'&units='+format+'&appid=303aa92eb13b4435c439ca69778d664d';
    }
    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    let altImg;
    // Your code here.


    $.getJSON(query,function(json){
        console.log(JSON.stringify(json))
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        loc = json['name'];
        temp = json['main']['temp'];
        tempImg = json['weather'][0]['icon'];
        altImg = json['weather'][0]['description'];

        document.querySelector("#loc").innerHTML = loc;
        document.querySelector("#temp").innerHTML = temp+' with '+altImg;
        document.querySelector('#tempImg').src = 'https://openweathermap.org/img/wn/'+tempImg+'.png';
        document.querySelector('#tempImg').alt = altImg;
        document.querySelector('#tempImg').title = altImg;
    });
}
