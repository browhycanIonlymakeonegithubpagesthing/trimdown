function HideButtons() {
    document.getElementById('button').style.display='none';
    document.getElementById('button2').style.display='none';
    document.getElementById('button3').style.display='none';
    document.getElementById('button4').style.display='none';
    document.getElementById('button5').style.display='none';
    document.getElementById('alarmClock').style.display='none';
    const panic = localStorage.getItem('panic');
    if (panic === 'on') {
    document.getElementById('panicButton').style.display='block';
    }
    document.getElementById('backButton').style.display = 'block';
}
function GetButtons() {
    document.getElementById('button').style.display='block';
    document.getElementById('button2').style.display='block';
    document.getElementById('button3').style.display='block';
    document.getElementById('button4').style.display='block';
    document.getElementById('button5').style.display='block';
    document.getElementById('alarmClock').style.display='block';
    document.getElementById('backButton').style.display = 'none'; 
}
function ProxyFullscreen() {
    let contentFrame = document.getElementById('contentFrame');
    contentFrame.style.display = 'block';
    HideButtons();

    let proxyItem = localStorage.getItem('proxy');
    let iframeUrl;

    if (proxyItem === 'astroid') {
        iframeUrl = 'https://astroid.mathonline.click/worksheets';
    } else if (proxyItem === 'interstellar') {
        iframeUrl = 'https://igobylotsofnames.mathonline.click'
}else {
        iframeUrl = './hurr.html';
    }
    
    contentFrame.srcdoc = `
        <iframe src="${iframeUrl}" width=100% height=${contentFrame.clientHeight}></iframe>`;
}


function loadIframeContent() {
    let contentFrame = document.getElementById('contentFrame');
    contentFrame.style.display = 'block';
    HideButtons();
    
    contentFrame.srcdoc = `
        <iframe src="./test.html" width=100% height=${contentFrame.clientHeight}>`;
}
function Settings() {
    document.getElementById('contentFrame').style.display='block';
    HideButtons();
    let iframe = document.getElementById('contentFrame');
    iframe.srcdoc = `
    <iframe src="./settings.html" width=100% height=${contentFrame.clientHeight}>`;
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
    iframe.srcdoc = `"
 <iframe src="./games.html" width="100%" height="${iframe.clientHeight}"></iframe>
 `;
}
function hideIframeContent() {
    document.getElementById('contentFrame').style.display = 'none';
    GetButtons();
    let iframe = document.getElementById('contentFrame');
    iframe.srcdoc = '';
}

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
  
    const time = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.getElementById('clockTime').textContent = time;
    document.getElementById('clockAmPm').textContent = amPm;
  }
  setInterval(updateClock, 1000);