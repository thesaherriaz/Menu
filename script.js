function menu() {
    var menu = document.getElementById("days").value;

    if (menu == "Monday") {
        document.getElementById("heading").innerHTML = "Items Available on Monday";
        document.getElementById("li1").innerHTML = "Watch";
        document.getElementById("li2").innerHTML = "Glasses";
        document.getElementById("li3").innerHTML = "Air Pods";
        document.getElementById("li4").innerHTML = "Headphones";
        document.getElementById("li5").innerHTML = "Apple Pencil";
    }
    else if (menu == "Tuesday") {
        document.getElementById("heading").innerHTML = "Items Available on Tuesday";
        document.getElementById("li1").innerHTML = "Handfree";
        document.getElementById("li2").innerHTML = "Macbook";
        document.getElementById("li3").innerHTML = "Air Pods";
        document.getElementById("li4").innerHTML = "Headphones";
        document.getElementById("li5").innerHTML = "Ipad";
    }
    else if (menu == "Wednesday") {
        document.getElementById("heading").innerHTML = "Items Available on Wednesday";
        document.getElementById("li1").innerHTML = "Mobiles";
        document.getElementById("li2").innerHTML = "Laptop";
        document.getElementById("li3").innerHTML = "Air Pods";
        document.getElementById("li4").innerHTML = "Headphones";
        document.getElementById("li5").innerHTML = "Apple Pencil";
    }
    else if (menu == "Thursday") {
        document.getElementById("heading").innerHTML = "Items Available on Thursday";
        document.getElementById("li1").innerHTML = "Watch";
        document.getElementById("li2").innerHTML = "Table";
        document.getElementById("li3").innerHTML = "Air Pods";
        document.getElementById("li4").innerHTML = "Chargers";
        document.getElementById("li5").innerHTML = "Apple Pencil";
    }
    else if (menu == "Friday") {
        document.getElementById("heading").innerHTML = "Items Available on Friday";
        document.getElementById("li1").innerHTML = "Watch";
        document.getElementById("li2").innerHTML = "Glasses";
        document.getElementById("li3").innerHTML = "Air Pods";
        document.getElementById("li4").innerHTML = "Headphones";
        document.getElementById("li5").innerHTML = "Apple Pencil";
    }
    else if (menu == "Saturday") {
        document.getElementById("heading").innerHTML = "Items Available on Saturday";
        document.getElementById("li1").innerHTML = "Geometry Box";
        document.getElementById("li2").innerHTML = "Glasses";
        document.getElementById("li3").innerHTML = "Air Pods"
        document.getElementById("li4").innerHTML = "Piano";
        document.getElementById("li5").innerHTML = "Guitar";
    }
    else if (menu == "Sunday") {
        document.getElementById("heading").innerHTML = "Items Available on Sunday";
        document.getElementById("li1").innerHTML = "Pencil";
        document.getElementById("li2").innerHTML = "Erasers";
        document.getElementById("li3").innerHTML = "air fry";
        document.getElementById("li4").innerHTML = "Cooler";
        document.getElementById("li5").innerHTML = "Apple Pencil";
    }
    else{
        document.getElementById("heading").innerHTML = "Please Choose a Day";
        document.getElementById("li1").innerHTML = "";
        document.getElementById("li2").innerHTML = "";
        document.getElementById("li3").innerHTML = "";
        document.getElementById("li4").innerHTML = "";
        document.getElementById("li5").innerHTML = "";
    }
}