"use strict";

let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine Tastings", "Other"];

let activities = [
    {
        category: "Adventures",
        id: "A101",
        name: "Valley Hot Air Balloons",
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
        location: "121 S. Main Street",
        price: 265.00
    },
    {
        category: "Adventures",
        id: "A102",
        name: "River Runners: Float Trip",
        description: "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
        location: "145 FM 103",
        price: 65.00
    },
    {
        category: "Adventures",
        id: "A103",
        name: "River Runners: Ride the Rapids",
        description: "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!",
        location: "145 FM 103",
        price: 145.00
    },
    {
        category: "Arts & Crafts",
        id: "AC101",
        name: "Painting with a Twist : Oils",
        description: "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Arts & Crafts",
        id: "AC102",
        name: "Painting with a Twist : Watercolor",
        description: "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Museums",
        id: "M101",
        name: "Bravings Airship Museum",
        description: "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
        location: "101 Airfield Drive",
        price: 10.00
    },
    {
        category: "Museums",
        id: "M102",
        name: "Forks and Spoons Museum",
        description: "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
        location: "1056 Lost Knives Court",
        price: 3.00
    },
    {
        category: "Museums",
        id: "M103",
        name: "Steenges Computing Museum",
        description: "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
        location: "103 Technology Way",
        price: 0.00
    },
    {
        category: "Wine Tastings",
        id: "WT-101",
        name: "Hastings Winery Tours and Tastings",
        description: "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
        location: "10987 FM 1187",
        price: 12.00
    },
    {
        category: "Wine Tastings",
        id: "WT-102",
        name: "Lone Oak Winery",
        description: "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
        location: "121 Burleson Court",
        price: 0.00
    },
    {
        category: "Other",
        id: "OTH101",
        name: "Fire Department: Ride Along",
        description: "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
        location: "10 Redline Drive",
        price: 25.00
    },
    {
        category: "Other",
        id: "OTH102",
        name: "Homes For Our Neighbors",
        description: "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!",
        location: "Call (555) 555-5555",
        price: 0.00
    }
];

window.onload = function () {

    initDropdownForCategories();
    initDropdownForActivities();



    let button = document.querySelector("#submitButton");
    button.addEventListener("click", displayActivities);

    let dropdownCategories = document.querySelector("#categoriesSelect");
    dropdownCategories.addEventListener("change", initDropdownForCategories);

    let activitiesDropdown = document.querySelector("#activitiesSelect");
    activitiesDropdown.addEventListener("change", displayActivities);
    
    let hideOrShowElement=document.querySelector("#activitiesSelect");
    hideOrShowElement.addEventListener("change",hideOrShowElement)


}



// the dropdown for the categories
function initDropdownForCategories() {


    let theDropdownforCategories = document.querySelector("#categoriesSelect");
    let activitiesDropdown = document.querySelector("#activitiesSelect");
    // sets the default
    let defaultOption = document.createElement("option");

    defaultOption.textContent = "Select a Categories";
    defaultOption.value = "";

    theDropdownforCategories.appendChild(defaultOption);
    let numberOfCategories = categories.length

    for (let i = 0; i < numberOfCategories; i++) {

        let newOptions = document.createElement("option");

        newOptions.textContent = categories[i];
        newOptions.value = categories[i];

        theDropdownforCategories.appendChild(newOptions);
    }

    //This function will hide or show an HTML element on the page
    //Just pass it the id of the element you want to show/hide
    function hideOrShowElement() {
        
        if (theDropdownforCategories.style.display !== "") {
            activitiesDropdown.style.display = "block";
        } else {
            activitiesDropdown.style.display = "none";
        }
    }
    theDropdownforCategories.addEventListener("change",hideOrShowElement);

}




function initDropdownForActivities() {

    let activitiesDropdown = document.querySelector("#activitiesSelect");


    // sets the default
    let defaultOption = document.createElement("option");

    defaultOption.textContent = "Select a Activity";
    defaultOption.value = "";
    let dropdownCategories = document.querySelector("#categoriesSelect");
    // attaches the default
    activitiesDropdown.appendChild(defaultOption);
    let numberOfActivities = activities.length

    // loop
    for (let i = 0; i < numberOfActivities; i++) {

        let newOptions = document.createElement("option");

        newOptions.textContent = activities[i].name;
        newOptions.value = activities[i].name;

        activitiesDropdown.appendChild(newOptions);
    }
}

//This function will return a a list of the matching activities for a given category
//Just pass it the array of activities and the category you are looking for
function displayActivities(event) {

    // prevents the form being submitted
    event.preventDefault();

    // gselects the dropdown element with the ID t and stores it in a variable
    let theDropdown = document.querySelector("#activitiesSelect");

    // gets the paragrah element where the results will be displayed
    let resultsParagraph = document.querySelector("#theresults");

    // get the index of the selected option in the dropdown
    let selectedIndex = theDropdown.selectedIndex - 1;

    if (theDropdown.value === "") {
        resultsParagraph.innerHTML = "";
    } else {
        let selectedActivity = activities[selectedIndex];

        // displaying the results
        resultsParagraph.innerHTML = `you selected the ${selectedActivity.category} 
        ID: ${selectedActivity.id} 
        name: ${selectedActivity.name}
        description: ${selectedActivity.description} 
        location: ${selectedActivity.location} 
        price:$ ${selectedActivity.price}`
    }
}

function getActivitiesInCategory(activities, category) {


    //start by creating an empty list to hold our matches
    let matching = [];
    //number of items on the menu
    let numItems = activities.length;


    //loop over the activities to find matches
    for (let i = 0; i < numItems; i++) {
        if (activities[i].category === category) {
            //add that activity to our matches array
            matching.push(activities[i]);
        }
    }

    //return all the matching menu items
    return matching;

}

let matches = getActivitiesInCategory(activities, "Adventures");

