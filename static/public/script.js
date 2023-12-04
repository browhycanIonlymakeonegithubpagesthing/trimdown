function loadIframeContent() {
    // Display the iframe and back button
    document.getElementById('contentFrame').style.display = 'block';
    document.getElementById('backButton').style.display = 'block';

    // Load new content into the iframe
    let iframe = document.getElementById('contentFrame');
    iframe.srcdoc = `
    ./hurr.html `;
}

function hideIframeContent() {
    // Hide the iframe and back button
    document.getElementById('contentFrame').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';

    // Clear the iframe content if needed
    let iframe = document.getElementById('contentFrame');
    iframe.srcdoc = '';
}
