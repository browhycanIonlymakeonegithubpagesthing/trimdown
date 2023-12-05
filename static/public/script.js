function HideButtons() {
    document.getElementById('button').style.display='none';
    document.getElementById('button2').style.display='none';
    document.getElementById('button3').style.display='none';
    document.getElementById('backButton').style.display = 'block';
}
function GetButtons() {
    document.getElementById('button').style.display='block';
    document.getElementById('button2').style.display='block';
    document.getElementById('button3').style.display='block';
    document.getElementById('backButton').style.display = 'none';
}
function loadIframeContent() {
    document.getElementById('contentFrame').style.display = 'block';
    HideButtons();
    let iframe = document.getElementById('contentFrame');
    iframe.srcdoc = `
    <iframe src="./hurr.html" width=100% height=1000"> `;
}
function loadIframer() {
    let website = prompt("Enter the website URL:");
    if (!website.startsWith("https://")) {
        website = "https://" + website;
    }
    HideButtons();
    let iframe = document.getElementById('contentFrame');
    iframe.style.display = 'block';
    iframe.src = website;
}
function GameLoader() {
    document.getElementById('contentFrame').style.display = 'block';
    HideButtons();
    let iframe = document.getElementById('contentFrame');
    iframe.srcdoc = `
    <style>
        .hidden { display: none; }
    </style>
</head>
<body>
    <input type="text" id="searchBox" placeholder="Search for a site...">
    <button class="loadIframe" data-url="./Games/rb">Retrol Bowl</button>
    <button class="loadIframe" data-url="./Games/pk">Progress Knight</button>
    <button class="loadIframe" data-url="./Games/te">Tetris</button>
    <button class="loadIframe" data-url="./Games/sb">SnowBattle</button>
    <button class="loadIframe" data-url="./Games/ngn">Ngon New</button>
    <button class="loadIframe" data-url="./Games/ngo">Ngon OG</button>
    <button class="loadIframe" data-url="./Games/whg">World's Hardest Game (real)</button>
    <button class="loadIframe" data-url="./Games/whg2">World's Hardest Game 2 (real)</button>
    <button class="loadIframe" data-url="./Games/ib">Idle Breakout</button>
    <button class="loadIframe" data-url="./Games/cc">Cookie Clicker (version 2.048)</button>
    <script>
        var buttons = document.querySelectorAll('.loadIframe');

        buttons.forEach(function(button) {
            button.addEventListener('click', function() {
                var url = this.getAttribute('data-url');
                alert("you will need to reload the gamesite to choose a new game.");
                document.body.innerHTML = '<iframe src="' + url + '" style="width:100%; height:100vh;"></iframe>';
            });
        });

        document.getElementById('searchBox').addEventListener('input', function(e) {
            var searchText = e.target.value.toLowerCase();
            buttons.forEach(function(button) {
                if (button.textContent.toLowerCase().includes(searchText)) {
                    button.classList.remove('hidden');
                } else {
                    button.classList.add('hidden');
                }
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
