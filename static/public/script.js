function HideButtons() {
    document.getElementById('button').style.display='none';
    document.getElementById('button2').style.display='none';
    document.getElementById('button3').style.display='none';
    document.getElementById('button4').style.display='none';
    document.getElementById('button5').style.display='none';
    document.getElementById('alarmClock').style.display='none';
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
        iframeUrl = 'https://astroid.mathonline.click';
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
function openNewWindow() {
    const selectedOption = document.getElementById("Periods").value;
    const scheduleData = JSON.parse(localStorage.getItem(selectedOption));

    // Assuming the link is in the first row of the schedule table
    if (scheduleData && scheduleData.length > 0) {
        const urlFromSchedule = scheduleData[0].link;
        if (urlFromSchedule.startsWith("https://")) {
            window.open(urlFromSchedule, '_blank');
        } else {
            window.open(`https://${urlFromSchedule}`, '_blank');
        }
    }
}
