function HideButtons() {
    document.getElementById('button').style.display='none';
    document.getElementById('button2').style.display='none';
    document.getElementById('button3').style.display='none';
    document.getElementById('button4').style.display='none';
    document.getElementById('button5').style.display='none';
    document.getElementById('backButton').style.display = 'block';
}
function GetButtons() {
    document.getElementById('button').style.display='block';
    document.getElementById('button2').style.display='block';
    document.getElementById('button3').style.display='block';
    document.getElementById('button4').style.display='block';
    document.getElementById('button5').style.display='block';
    document.getElementById('backButton').style.display = 'none';
}
function loadIframeContent() {
    let contentFrame = document.getElementById('contentFrame');
    contentFrame.style.display = 'block';
    HideButtons();
    
    contentFrame.srcdoc = `
        <iframe src="./test.html" width=100% height=${contentFrame.clientHeight}>`;
}

function ProxyFullscreen() {
    document.getElementById('contentFrame').style.display='block';
    HideButtons();
    let iframe = document.getElementById('contentFrame');
    iframe.srcdoc = `
    <iframe src="./hurr.html" width=100% height=${contentFrame.clientHeight}>`;
}
function youtube(){
    document.getElementById('contentFrame').style.display='block';
    HideButtons();
    let iframe=document.getElementById('contentFrame');
    iframe.srcdoc= `
    <iframe src="https://ytbyp.mathonline.click" width=100% height=${contentFrame.clientHeight}>`;
}

function loadIframer() {
    let website = prompt("Enter the website URL:");
    if (!website.startsWith("https://")) {
        website = "https://" + website;
    }
    HideButtons(); 
    let iframe = document.getElementById('contentFrame');
    iframe.style.display = 'block';
    iframe.srcdoc = `<html><head></head><body><iframe src="${website}" width="100%" height="${iframe.clientHeight}"></iframe></body></html>`;
}

function GameLoader() {
    document.getElementById('contentFrame').style.display = 'block';
    HideButtons();
    let iframe = document.getElementById('contentFrame');
    iframe.srcdoc = `
    <style>
    .hidden { display: none; }
    body {
    font-family: Arial, sans-serif;
}

#searchBox {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    font-size: 16px;
}

button.loadIframe {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    background-color: #4CAF50;
    color: white;
    border: none;
    text-align: left;
    cursor: pointer;
}

button.loadIframe:hover {
    background-color: #45a049;
}

iframe {
    border: none;
}

</style>
</head>
<body>
<input type="text" id="searchBox" placeholder="Search for a site...">
<button class="loadIframe" data-url="./Games/rb">Retro Bowl</button>
<button class="loadIframe" data-url="./Games/pk">Progress Knight</button>
<button class="loadIframe" data-url="./Games/te">Tetris</button>
<button class="loadIframe" data-url="./Games/sb">SnowBattle</button>
<button class="loadIframe" data-url="./Games/ngn">Ngon New</button>
<button class="loadIframe" data-url="./Games/ngo">Ngon OG</button>
<button class="loadIframe" data-url="./Games/whg">World's Hardest Game (real)</button>
<button class="loadIframe" data-url="./Games/whg2">World's Hardest Game 2 (real)</button>
<button class="loadIframe" data-url="./Games/ib">Idle Breakout</button>
<button class="loadIframe" data-url="./Games/cc">Cookie Clicker (version 2.048)</button>
<button class="loadIframe" data-url="./Games/br">The Backrooms</button>
<button class="loadIframe" data-url="./Games/1v1">1v1.LOL</button>
<button class="loadIframe" data-url="./Games/ss">Subway Surfers</button>
<button class="loadIframe" data-url="./Games/ts">Tanuki Sunset</button>
<button class="loadIframe" data-url="./Games/fs">Funny Shooter</button>
<button class="loadIframe" data-url="https://turbowarp.org/292728003/embed">Two Player Battle</button>
<button class="loadIframe" data-url="https://turbowarp.org/389464290/embed">Getting Over It</button>
<button class="loadIframe" data-url="https://turbowarp.org/105500895/embed">Geometry Dash (levels 1-3)</button>
<button class="loadIframe" data-url="https://turbowarp.org/216343253/embed">Geometry Dash Subzero</button>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var buttons = document.querySelectorAll('.loadIframe');

        buttons.forEach(function(button) {
            button.addEventListener('click', function() {
                var url = this.getAttribute('data-url');
                document.body.innerHTML = '<iframe src="' + url + '" style="width:100%; height:100vh;"></iframe>';
            });
        });

        document.getElementById('searchBox').addEventListener('input', function(e) {
            var searchText = e.target.value.toLowerCase();
            buttons.forEach(function(button) {
                if (button.textContent.toLowerCase().includes(searchText)) {
                    button.style.display = 'block';
                } else {
                    button.style.display = 'none';
                }
            });
        });
    });
</script>
 `;
}
function hideIframeContent() {
    document.getElementById('contentFrame').style.display = 'none';
    GetButtons();
    let iframe = document.getElementById('contentFrame');
    iframe.srcdoc = '';
}