var i = 0;
window.addEventListener('load', function () {
//Create Content class
var projects = new Array(
    `
    Pantry Serverless Microservices Application
    <p  style = "font-size: 1.85vh;">
        <span style = "display: block; background-color: #c8c8ff; width: 36vh; border-radius: 20px;">
            <img style ="width: 12vh" src = "docker.png">
            <img style ="width: 10vh" src= "nodejs.svg">
            <img style ="width: 12vh" src= "kub.png"> 
        </span>
        <strong>Core Functionality</strong><br>User’s will be able to search recipes, and place recipes to a ‘cooking queue’, place recipes into a favorites list, add recipes to their private recipe list, and mark recipes as completed. Users will be able to add any pantry item into their online pantry, via manual logging or via barcode scanning from a camera. Users can create different grocery lists, one generated list will be ingredients needed from x marked recipes, minus the ingredients we already have in the pantry. Users will always be able to remove or add anything to any grocery list.
        <br><br>
        <strong>Technical Details</strong><br>Uses a Microservices Serverless Architecture on GCP using NodeJs. API's run in Docker and Kubernetes, with Persistent Databases.
        </p>
    `,
    `
    Epic Systems: CCD2 Inventory Cataloging Design and Implementation 
    <p  style = "font-size: 1.85vh;">
        <span style = "display: block; background-color: #c8c8ff; width: 21vh; border-radius: 20px;">
            <img style ="width: 8vh" src = "netcore.png">
            <img style ="width: 5vh" src= "blazor.png">
            <img style ="width: 6vh" src= "pi.png"> 
        </span>
        <strong>Core Functionality</strong><br>IT Assets will be monitored via two systems, tablets mounted on asset tubs, as well as scales monitored by the GPIO of a raspberry Pi. This allows for
        user, and non-user monitoring of stock. This means that IT persons can go to the new CCD2 website and see if there is stock instead of going to the storage
         room and looking for them self. As well as including non-user monitoring assuming each IT person will not update each time they take/put back an asset.
        <br><br>
        <strong>Technical Details</strong><br> Uses .Net Core Blazor application interacting with API requests via the CCD2 website. The Pi's will need circuit design for the scales 
        as well as embedded python files, these python files will interact with CCD2 API requests to update inventory counts as a function of tub weight.
        </p>
    `,
    `
    UWW Research: Multimodal Landslide Detection 
    <p  style = "font-size: 1.85vh;">
        <span style = "display: block; background-color: #c8c8ff; width: 11vh; border-radius: 20px;">
            <img style ="width: 6vh" src= "pi.png">
            <img style ="width: 4vh" src = "python.png">  
        </span>
        Using multiple sensors such as Humidity and Load Cells, retrieve the information from sensors locally, and sent them to a database. After the data is sent 
        to a database. Draw conclusions about the probabilities of land slides.
        </p>
    `,
    `
    UWW Software Engineering Course: iButtonLink Corrosion Sensor Application and Data Upload 
    <p  style = "font-size: 1.85vh;">
        <span style = "display: block; background-color: #c8c8ff; width: 11vh; border-radius: 20px;">
            <img style ="width: 6vh" src= "pi.png">
            <img style ="width: 4vh" src = "python.png">  
        </span>
        Using an iButtonLink sensor and perl script, create a GUI to interact with sensor data. Data must be uploaded to AWS Storage as well as ported from the
         actively running Perl Script.
        </p>
    `,
    `
    UWW Research: Lidar and Image Recognition in Autonomous Driving (Coming Spring 2021)
    <p  style = "font-size: 1.85vh;">
        Use lidar and image recognition within a built lab on campus to create a self driving vehicle. Multimodal sensor data must be retrieved, feature optimized, then
         input into an Autonomous driving Neural Network to allow the car to drive.
        </p>
    `
);

document.getElementById("nbtn").addEventListener("click", function(){

    project = document.getElementById("addToMe");
    
    i++;
    if(i == projects.length){
        i = 0;
    }
    i = (i)%(projects.length);
    project.innerHTML = projects[i];
});

document.getElementById("pbtn").addEventListener("click", function(){
    project = document.getElementById("addToMe");
    i--;
    if(i == -1){
        i = projects.length-1;
    }
    i = (i)%(projects.length);
    project.innerHTML = projects[i];
});
})
