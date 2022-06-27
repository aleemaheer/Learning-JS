let myImage = document.querySelector('img');

myImage.onclick = () =>  {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.jpeg') {
      myImage.setAttribute('src','images/firefox.jpeg');
    } else {
      myImage.setAttribute('src','images/firefox-icon.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// function to set greeting
function setUserName() {
    let myName = prompt("Enter your name: ");
    if (!myName) setUserName();
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () { setUserName() }