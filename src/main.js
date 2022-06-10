/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu/bar icon */

function myFunction() {
    const x = document.querySelector("sr-only");
    if(x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
  };

  myFunction();

  console.log(x);