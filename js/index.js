function passwd() {
    var password = prompt('Ask password to perrone.elia@outlook.com and after enter the password to download the file:');
    if (password == "DWcvEP2019") {
        window.open("./doc/CV_nuovo.pdf")
    } else {
        alert("incorrect password, please try again");
    }
}