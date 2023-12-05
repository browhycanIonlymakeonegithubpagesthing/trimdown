function HideButtons() {
    document.getElementById('button').style.display='none';
    document.getElementById('button2').style.display='none';
    document.getElementById('backButton').style.display = 'block';
}
function GetButtons() {
    document.getElementById('button').style.display='block';
    document.getElementById('button2').style.display='block';
    document.getElementById('backButton').style.display = 'none';
}
function loadIframeContent() {
    document.getElementById('contentFrame').style.display = 'block';
    HideButtons();
    let iframe = document.getElementById('contentFrame');
    iframe.srcdoc = `
    <iframe src="./hurr.html" width=100% height=1000"> `;
}
function loadGames() {
    document.getElementById('contentFrame').style.display = 'block';
    HideButtons();
    let iframe = document.getElementById('contentFrame');
    iframe.srcdoc = `
    <iframe src="./games.html" width=100% height=1000"> `;
}
function hideIframeContent() {
    document.getElementById('contentFrame').style.display = 'none';
    GetButtons();
    let iframe = document.getElementById('contentFrame');
    iframe.srcdoc = '';
}
