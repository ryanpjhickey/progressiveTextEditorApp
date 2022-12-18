const butInstall = document.getElementById('buttonInstall');
const dPrompt = window.deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault;
    dPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (!dPrompt) {
        return;
    }
    dPrompt.prompt();
    dPrompt = null;
    butInstall.classList.toggle('hidden', true);
});



// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    dPrompt = null;
});
