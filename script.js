// Immeditately invoked function expression to not pollute the global scope
(function () {
  var person = prompt("Please enter your last name to continue");

  if (person.toLowerCase() == "quirimit") {
    alert("Hit Spin To Win, only one chance, make it count");

    const wheel = document.querySelector(".wheel");
    const startButton = document.querySelector(".button");
    let deg = 0;
    let spinDeg = 5000;

    startButton.addEventListener("click", () => {
      // Disble button once clicked
      startButton.style.pointerEvents = "none";

      // Spin amount
      //deg = Math.floor(spinDeg + Math.random() * spinDeg);
      deg = Math.floor(spinDeg);

      // Slowing down and rotate amount
      wheel.style.transition = "all 20s ease-out";
      wheel.style.transform = `rotate(${deg}deg)`;
      wheel.classList.add("blur");
    });

    wheel.addEventListener("transitioned", () => {
      wheel.classList.remove("blur");

      // Prevent rotating backwards
      startButton.style.pointerEvents = "auto";
      wheel.style.transition = "none";
      const actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
    });
  } else {
    alert(
      "Unauthorized person, cannot access page. Please refresh page to try again"
    );
  }
})();
