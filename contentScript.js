function changeStylesForAllElements() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        element.style.color = 'inherit';
        element.style.backgroundColor = 'unset';
    });
}

function changeThemeToDark() {
    changeStylesForAllElements();
    document.body.style.backgroundColor = '#0A192F';
    document.body.style.color = '#CAD3E2';

    const nextMainSection = document.querySelector("#__next > section > section > main");
    if (nextMainSection) {
        nextMainSection.style.marginTop = '10px';
    }

    const asideElement = document.querySelector("#content-container > section > aside");
    if (asideElement) {
        asideElement.style.top = '5px';
    }

    const headerElement = document.querySelector("#__next > section > section > header");
    if (headerElement) {
        headerElement.style.display = 'none';
    }

    const images = document.querySelectorAll("article img");
    images.forEach(img => {
        img.style.backgroundColor = 'white';
        img.style.padding = '10px';
    });
}

function updateTheme() {
    changeThemeToDark();
    setTimeout(() => { changeThemeToDark(); }, 500);
    setTimeout(() => { changeThemeToDark(); }, 1000);
}

(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, page } = obj;
        if (type === "NAVIGATION") {
            updateTheme();
        }
    });
    updateTheme();
})();
