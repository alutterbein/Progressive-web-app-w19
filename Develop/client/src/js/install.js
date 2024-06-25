const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
//  event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.add('visible');
});

// click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = await window.deferredPrompt;
    if (!promptEvent) {return;
}
// reveal the prompt
promptEvent.prompt();
//empty deferredPrompt object, so that it can be used again
window.deferredPrompt = null;
// replaces the hidden class on the button
butInstall.classList.remove('visible');
}
);

// handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
