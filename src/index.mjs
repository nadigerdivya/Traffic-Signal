import "./styles.css";

let current = "green";
document.querySelector(".green-light").classList.add("active");

function setCurrentLight() {
  setTimeout(() => {
    document.querySelector(`.${current}-light`).classList.remove("active");

    if (current === "green") {
      current = "yellow";
    } else if (current === "yellow") {
      current = "red";
    } else if (current === "red") {
      current = "green";
    }

    document.querySelector(`.${current}-light`).classList.add("active");

    setCurrentLight(); // Recursively call function
  }, 2000);
}

setCurrentLight();
