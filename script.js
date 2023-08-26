var Color = [
    "red",
    "black",
    "cyan",
    "voilet",
    "blue",
    "yellow",
    "purple",
    "orange",
    "lemon",
    "green"
  ];
  var index = 0 ;
  var div = document.querySelector("div");
  const button = document.querySelector("button");
  button.addEventListener("click", function() {
      if (index === Color.length) {
          index = 0;
    }
          div.style.backgroundColor = Color[index];
          index++;
  });