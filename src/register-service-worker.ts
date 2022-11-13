export function registerServiceWorker() {

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/curse/service-worker.js')
        .then(() => {})
        .catch(() => {});
    }
}
class PromptService {
    private prompt;

    constructor() {
        window.addEventListener('beforeinstallprompt', e => {
            e.preventDefault();
            this.prompt = e;
        })
    }

    doPrompt() {
        if (this.prompt) {
            this.prompt.prompt();
            this.prompt.userChoice.then(() => this.prompt = null);
        }
    }
}

export const promptService = new PromptService();
