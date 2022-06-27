let myImage = document.querySelector('img');

myImage.onclick = () =>  {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.jpeg') {
      myImage.setAttribute('src','images/firefox.jpeg');
    } else {
      myImage.setAttribute('src','images/firefox-icon.jpeg');
    }
}
