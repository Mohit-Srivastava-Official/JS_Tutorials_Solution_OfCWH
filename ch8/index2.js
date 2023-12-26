function magic() {
    const element = document.getElementsByTagName("h2")[0];
    element.outerHTML = "<h3>You change me and my content!!Yay,,i like changes!!!";
    let a="Done";
    document.getElementById("me").innerHTML=a;
    document.getElementById("mes").innerHTML=a;
}

document.getElementById("me").innerHTML=text;