async function getch(url){
    const response = await fetch(url);
    const json_promise = await response.json();
    return json_promise;
}

async function new_color(){
    //console.log("megnyomódtam");
    let data = await getch("https://x-colors.yurace.pro/api/random");
    console.log(data);

    hex.innerHTML = data['hex'];
    rgb.innerHTML = data['rgb'];
    hsl.innerHTML = data['hsl'];

    square.style.backgroundColor = data['hex'];
}

async function new_specific_color(color){
    //console.log("New Color: " + color);
    let data = await getch("https://x-colors.yurace.pro/api/random/" + color);
    //console.log("Got color: " + data);

    hex.innerHTML = data['hex'];
    rgb.innerHTML = data['rgb'];
    hsl.innerHTML = data['hsl'];

    square.style.backgroundColor = data['hex'];
}

const square = document.getElementById("square");

const gomb = document.getElementById("gomb");
const hex = document.getElementById("hex");
const rgb = document.getElementById("rgb");
const hsl = document.getElementById("hsl");
const kgomb = document.getElementById("kgomb");
const rgomb = document.getElementById("rgomb");
const ygomb = document.getElementById("ygomb");
const ggomb = document.getElementById("ggomb");
const pgomb = document.getElementById("pgomb");
const pigomb = document.getElementById("pigomb");


gomb.addEventListener("click", new_color);
kgomb.addEventListener("click", () => {
  new_specific_color("blue");
});
rgomb.addEventListener("click", () => {
  new_specific_color("red");
});
ygomb.addEventListener("click", () => {
  new_specific_color("yellow");
});
ggomb.addEventListener("click", () => {
  new_specific_color("green");
});
pgomb.addEventListener("click", () => {
  new_specific_color("purple");
});
pigomb.addEventListener("click", () => {
  new_specific_color("pink");
});
