function readMore() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("readMoreButton");
    // let moreText = Array.from(document.getElementsByClassName("moreText"));


    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more...";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "...Read less";
        moreText.style.display = "inline";
    }
}

document.querySelector('#readMoreButton').addEventListener('click', event => readMore());