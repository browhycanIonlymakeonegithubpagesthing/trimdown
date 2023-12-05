function toggleSettings() {
    $('#settingsWindow').toggle();
}

function removeIframe(button) {
    $(button).closest('.draggable').remove();
}

function enableDarkMode() {
    // Implement dark mode styles
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
    // Add more styles as needed
}

function enableLightMode() {
    // Implement light mode styles
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#333';
    // Add more styles as needed
}

function changeBackground() {
    // Implement changing background
    var backgroundUrl = prompt("Choose Background (enter URL or 'default' for default background):");
    if (backgroundUrl.toLowerCase() === 'default') {
        document.body.style.backgroundImage = 'url(default-background.jpg)';
    } else {
        document.body.style.backgroundImage = 'url(' + backgroundUrl + ')';
    }
    // Add more background-related code as needed
}
function downloadLauncherFunction() {
var htmlContent = `
<head>
<title>404 not found</title>
<style>
    body {
        background: linear-gradient(45deg, #FF5733 25%, transparent 25%), linear-gradient(-45deg, #FF5733 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #FF5733 75%), linear-gradient(-45deg, transparent 75%, #FF5733 75%);
        background-size: 20px 20px;
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        padding: 0;
    }

    .container {
        text-align: center;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        padding: 30px;
        max-width: 400px;
    }

    h1 {
        color: #FF5733;
        font-size: 2em;
    }

    p {
        color: #555;
    }

    a {
        text-decoration: none;
        background-color: #FF5733;
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: bold;
        transition: background-color 0.3s;
    }

    a:hover {
        background-color: #FF3717;
    }

    .math-content {
        margin-top: 20px;
    }

    #searchInput {
        width: 100%;
        text-align: left;
        border: none;
        background-color: transparent;
        color: #555;
        text-decoration: none;
    }
</style>
</head>
<body>
<div class="container">
    <h1>404 - Page Not Found</h1>
    <p class="math-content" id="quote">Loading a random math quote...</p>
    <button onclick="Launched()">Launch</button>
    <script>
        var mathQuotes = [
            "In mathematics, you don't understand things. You just get used to them. - John von Neumann",
            "Mathematics is the music of reason. - James Joseph Sylvester",
            "Mathematics is the art of giving the same name to different things. - Henri Poincaré",
            "Happy Halloween! - Mathonline.click",
        ];

        var randomIndex = Math.floor(Math.random() * mathQuotes.length);
        document.getElementById("quote").textContent = mathQuotes[randomIndex];

        function Launched() {
            var self = window;
            var x = window.open("https://www.beaverton.k12.or.us/departments/teaching-learning/future-ready/canvas");
            x.document.write("<iframe src='https://home.mathonline.click/test2.html' style='position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;'></iframe>");
            self.close();
        }
    </script>
</div>
</body>
</html>`;
alert('it most likely wont work right now because the link is down');
var blob = new Blob([htmlContent], { type: 'text/html' });
var link = document.createElement('a');
link.href = window.URL.createObjectURL(blob);
link.download = '404-not-found.html'; 
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}
