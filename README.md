# Day10-Homework

This is a simple HTML and JavaScript code that changes the background color of the webpage.

# HTML

The HTML code consists of a <div> element that contains a button.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Background Color</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div>
        <button>Change Background</button>
    </div>
    
    <script src="./script.js"></script>
    
</body>
</html>
```

# Javascript

The JavaScript code consists of a single function called changeBackgroundColor(). This function changes the background color. The button has an onclick event listener that calls the changeBackgroundColor() function when clicked.
```
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
```

# CSS
```
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
div{
    width: 100vw;
    height: 100vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: #2c3e50;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, transform 0.2s ease;
}
button:hover {
    background-color: white;
    transform: scale(1.1);
}
```
