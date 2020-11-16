// alert("I'm in JS file.")

console.log("I'm in console.");

document.write("I'm document.");

var variableName = "variablas";
console.log(variableName);

var masyvas = ["name", 23, true, null];
masyvas.unshift(true);

// console.log(masyvas.length);
console.log(masyvas);

var profile = {
    firstName: "Candy",
    lastName: "Smith",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    changeName: function (newFirstName) {
        this.firstName = newFirstName;
    }
}

profile.changeName("Kelly");
console.log(profile.fullName());

var para = document.createElement("p");
para.innerText = "This is prepend paragraph created with JS."

document.body.prepend(para);



var para = document.createElement("p");
para.innerText = "This is append paragraph created with JS."

document.body.append(para);

var outro = document.querySelector("div.outro p");
console.log(outro);

var button1 = document.querySelector("#change-p-color");
button1.addEventListener("click", function () {
    var outro = document.querySelector("div.outro p");

    if (outro.style.color == "red") {
        outro.style.color = "pink";
    }
    else {
        outro.style.color = "red";
    }
});

var button2 = document.querySelector("#change-p-color2");
button2.addEventListener("click", function () {
    var outro = document.querySelector("div.outro p");
    outro.style.color = "blue";

});

// gaunami arrow mygtuku kodai
document.addEventListener("keyup", function (event) {
    console.log(event.keyCode);
});

var button3 = document.querySelector("#change-img")

button3.addEventListener("click", function () {
    var image = document.querySelector("div.gallery img");
    /*different random pavaiksleliai gaunami, tokio pat dydzio*/
    image.setAttribute("src", "https://picsum.photos/seed/" + Math.random() + "/300");

});

var images = document.querySelectorAll("div.gallery img");

for (var j = 0; j < images.length; j++) {
    images[j].addEventListener("click", function (event) {
        // console.log(event);
        event.target.setAttribute("src", "https://picsum.photos/seed/" + Math.random() + "/300");
    });

}
