export function toggleCart(id, action) {
  if (action === "close") {
    document.getElementById(id).style.display = "none";
  } else {
    document.getElementById(id).style.display = "block";
  }
}
