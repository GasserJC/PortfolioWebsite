var i = 0;
window.addEventListener('load', function () {
//Create Content class
var projects = new Array(
    `
    NameGuess Machine Learning API 
    <p  style = "font-size: 1.85vh;" id = "main">
      <span style = "display: block; background-color: #c8c8ff; width: 36vh; border-radius: 20px;">
        <img style ="width: 12vh" src = "cloud-logo.svg">
        <img style ="width: 12vh" src= "lockup.svg">
        <img style ="width: 2vh" src= "tux.png">
        <img style ="width: 7vh" src= "apache2.png">
      </span>
      Created an API that utilizes TensorFlow on Google Cloud Platform Compute Engine. This API receives a HTTP request that contains a Name parameter.
      My NameGuess.py Neural Network then is given the string, converts the data for most optimal accuracy. Firstly trimming to 9 characters long, 
      then zero-filling from the back. Next it converts the characters into their ascii values, after this for improved accuracy I convert 
      the name into a 2 Dimensional array of ones and zeros 
      (OneHotEncoding) then the Neural Network uses Convoluted Neural Layers to do its work and I return the NN Answer in a JSON Package. <br><br>
      Hosted on Google Cloud Compute Engine (Similar to Azure Compute).
      (Have not SSL Certified my API Server yet, therefore, you will need to load this page as http not https to use the search bar below.)
      <br>
      <br>
      Name:
      <input id="APIGrab">
      </input>
      <button onclick="CallAPI()" >Call API
      </button><p style="font-size: 1.5vh;"><em>To Note, slow traffic will cause the server to have to rebuild the python interpreter, so your first call may be the slowest.</em></p>
    </p>
    `,
    `
    Pantry Serverless Microservices Application (In Development)
    <p  style = "font-size: 1.85vh;">
        <span style = "display: block; background-color: #c8c8ff; width: 36vh; border-radius: 20px;">
            <img style ="width: 12vh" src = "docker.png">
            <img style ="width: 10vh" src= "nodejs.svg">
            <img style ="width: 12vh" src= "kub.png"> 
        </span>
        <strong>Core Functionality</strong><br>User’s will be able to search recipes, and place recipes to a ‘cooking queue’, place recipes into a favorites list, add recipes to their private recipe list, and mark recipes as completed. Users will be able to add any pantry item into their online pantry, via manual logging or via barcode scanning from a camera. Users can create different grocery lists, one generated list will be ingredients needed from x marked recipes, minus the ingredients we already have in the pantry. Users will always be able to remove or add anything to any grocery list.
        <br><br>
        <strong>Technical Details</strong><br>Uses a Microservices Serverless Architecture on GCP using NodeJs. API's run in Docker and Kubernetes, DB's are in firestore (NoSQL).
        </p>
    `,
    `
    Epic Systems Pi-Check-In Device
    <p  style = "font-size: 1.85vh;">
        <span style = "display: block; background-color: #c8c8ff; width: 17vh; border-radius: 20px;">
            <img style ="width: 6vh" src = "pi.png">
            <img style ="width: 4vh" src= "python.png">
            <img style ="width: 5vh" src= "tux.png">
        </span>
        At Epic the CaTS (IT) Department has to handle all of the Laptops, Desktops, and Mobile Devices for the 10,000+ employees. Each computer has Configuration Manager Accounts,
        assigned to it in a Database, and the computer may have a listing Whiteboard (a website the CaTS department uses for picking up equipment). Instead of
        CaTS Employees going into their outdated and slow winforms application on their laptop and manually deleting accounts they can simply scan the laptop's 
        Epic Label (a specialized barcode each computer has) with my Pi device. My Pi has a Wireless Scanner and uses multiple SOAP calls and verifications to get
        any computer's accounts deleted, assigned to storage, and remove any Whiteboard Entries. Additionally you must scan your RFID card and have proper clearance to use
        the device. The RFID scanning also goes into the Epic Databases and finds an individual's 'Tech ID' this allows for correct Audit trails of who deleted 
        accounts or checked the computer into storage. To increase the speed at which an individual can check computers in, I use multi-threading to make the Asynchronous
        SOAP Calls execute in their own thread, this decreases the maximum time between each scan to approximately .6 Seconds. Additionally I log every scanned computer locally on
        the Pi, as well as if the result was successful or not, as well as who made the attempt. Lastly I use Speakers to let the user know  when they are ready to scan
        again via a success chime, or if one computer failed to scan properly I output a failure chime. Tools include: Python, Linux, SQL Server, SOAP Calls, Asynchronous Calls, Multi-threading, and NTLM Authentication. I headed this
        project, and was the primary developer.
    </p>
    `,
    `
    Surtr Dehydrator
    <p  style = "font-size: 1.85vh;">
        <span style = "display: block; background-color: #c8c8ff; width: 15vh; border-radius: 20px;">
            <img style ="width: 7vh; padding-left: 5%; " src = "arduino.png">
            <img style ="width: 7vh; padding-left: 5%;  margin-left:auto; " src= "c-logo.png">
        </span>
        The motivation for this project came from saving myself money - although I am (almost) Vegetarian, the only source of meat I get is from my deer hunt
        each year on my Family's farm property. Taking meat into a butcher shop is expensive, so I used electrical engineering, an Arduino, raw materials, and C programming to make a 
        180 watt, 7 Cubic Foot dehydrator I named after the Norse Fire Giant Surtr. Below is a Electrical Diagram and apart of the Air Flow Design. The engineering
        specifications were to keep the amount of total Cubic Feet per Minute (CFM) down, as this means you have to heat up x many cubic feet per minute. Making
        the requisite power needed proportional to the CFM. I use 4 Food Grade Thermometers to measure the temperature, and use a resistive heater I made out of .1 Meters
        of nichrome wire. I use two low CFM Computer fans (rated for 90 Degree Celsius < 170 degrees F) to move the air from the heater through the chamber to the chimney.
    </p>
    `,
    `
    Portfolio Website
    <p  style = "font-size: 1.85vh;">
        <span style = "display: block; background-color: #c8c8ff; width: 23vh; border-radius: 20px;">
            <img style ="width: 7vh" src = "engine.png">
            <img style ="width: 15vh" src= "nodejs.svg">
        </span>
        Made with Node.Js, Express, App Engine, and BootStrap. In Web Development I focus on Back Ends and Cloud Development - but designing a website also is a Front End task. Instead of choosing 
        Vue, Angular, or React I thought it would make more sense to choose native Js, CSS, and HTML. Native Js, HTML, and CSS have fast development times as
        well as fast debugging turn over - which is why I think going without a Front End frame work was my best course of action for my website.
        <br>
        <br>
        <a href="/error"><button>Failure Page is an Easter Egg</button></a>
    </p>
   `
);

document.getElementById("nbtn").addEventListener("click", function(){
    document.getElementById("Cool").innerText = "";
    project = document.getElementById("addToMe");
    
    i++;
    if(i == projects.length){
        i = 0;
    }
    i = (i)%(projects.length);
    project.innerHTML = projects[i];
    document.getElementById("id").setAttribute("href", document.getElementById("from").value);
});

document.getElementById("pbtn").addEventListener("click", function(){
    document.getElementById("Cool").innerText = "";
    project = document.getElementById("addToMe");
    i--;
    if(i == -1){
        i = projects.length-1;
    }
    i = (i)%(projects.length);
    project.innerHTML = projects[i];
    document.getElementById("id").setAttribute("href", document.getElementById("from").value);
});
})
