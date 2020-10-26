// Hides all nav items with the text 'artifacts'
const hideArtifacts = () => {
    
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

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    hideArtifacts();
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
});

window.onload = hideArtifacts;