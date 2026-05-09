function show(id) {
  let pages = document.getElementsByClassName("page");
  for (let p of pages) p.style.display = "none";
  document.getElementById(id).style.display = "block";
}
function add(name, price) {
  let li = document.createElement("li");
  li.innerText = name + " - Rs." + price;
  document.getElementById("cartList").appendChild(li);
}
show("register");
