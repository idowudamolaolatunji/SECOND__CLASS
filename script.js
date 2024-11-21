

"API === APPLICATION PROGRAMMING INTERFACE"


// https://dog.ceo/api/breeds/image/random


"ASYNCRONOUS JAVASRIPT"


// SINGLE THREADED LANGUAGE
// one task at a time

// PHP, // 124

// "ASYNCRONOUS JAVASRIPT"

// BLOCKING I/O

// console.log(fetch("https://dog.ceo/api/breeds/image/random"))
// 

const btn = document.getElementById("btn");
const imageEl = document.querySelector("#img");


btn.addEventListener("click", async function() {
    btn.textContent = "Loading...";

    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    imageEl.src = data.message;
    console.log(data)

    setTimeout(function() {
        btn.textContent = "Fetch Another Dog!"
    }, 1000);
})

