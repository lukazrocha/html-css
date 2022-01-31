let action = "https://www.google.com/search?q=";
const btn = document.querySelector("#send");

btn.addEventListener("click", function(){
    const search = document.querySelector("#search");

    const line = search.value;

    const searchValue = line.split(" ").join("+");
    console.log(searchValue);

    action += searchValue;

    window.open(action, "_blank");
});