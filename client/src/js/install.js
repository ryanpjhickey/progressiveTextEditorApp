const butInstall = document.getElementById('buttonInstall');
const dPrompt = window.deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault;
    dPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    if (!dPrompt) {
        return;
    }
    dPrompt.prompt();
    dPrompt = null;
    butInstall.classList.toggle('hidden', true);
});



window.addEventListener('appinstalled', (event) => {
    dPrompt = null;
});
