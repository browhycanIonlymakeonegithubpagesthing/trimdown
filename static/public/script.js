function HideButtons() {
    document.getElementById('button').style.display='none';
    document.getElementById('button2').style.display='none';
    document.getElementById('button3').style.display='none';
    document.getElementById('button4').style.display='none';
    document.getElementById('backButton').style.display = 'block';
}
function GetButtons() {
    document.getElementById('button').style.display='block';
    document.getElementById('button2').style.display='block';
    document.getElementById('button3').style.display='block';
    document.getElementById('button4').style.display='block';
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
    <iframe src="./games.html" width="100%" height="${iframe.clientHeight}"></iframe>
 `;
}
function hideIframeContent() {
    document.getElementById('contentFrame').style.display = 'none';
    GetButtons();
    let iframe = document.getElementById('contentFrame');
    iframe.srcdoc = '';
}