async function getch(url){
    const response = await fetch(url);
    const json_promise = await response.json();
    return json_promise;
}

async function new_joke(){
    console.log("megnyomódtam");
    let data = await getch("https://groandeck.com/api/v1/random");
    console.log(data);

    joke.innerHTML = data["setup"];
    punchline.innerHTML = data["punchline"];
}

const b = document.getElementById("b");
const joke = document.getElementById("joke");
const punchline = document.getElementById("punchline");

b.addEventListener("click", new_joke);
