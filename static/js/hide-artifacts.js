// Hides all nav items with the text 'artifacts'
window.onload = () => {
    const aTags = document.getElementsByTagName("a");
    let found = [];

    for (let i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent == "artifacts") {
            found.push(aTags[i]);
        }
    }

    found.forEach(aTag => {
        if (aTag !== undefined) {
            const location = aTag.parentElement.children[1].
                getElementsByTagName("a")[0].href.split("artifacts")[0] + "artifacts/*";
            aTag.parentElement.remove();
            console.log("Removed Sidebar Element: " + location);
        }
    })
}