const PUBLIC_VAPID_KEY='BD8LABMXDJOjLE-q8AIayvHZy8ZnDOwx3cwXQTBPW06nH6WeXZf9Sf4tjiet0snV5Xg8gSYgkQTTQlyyfXcMus0'

function urlBase64ToUnit8Array(base64String){
    const padding = '='.repeat((4 - base64String.length % 4) % 4)
    const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/-/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; i++) {
        outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
}

const subscription = async () => {

    // Service worker
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    })
    console.log('New service worker')

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUnit8Array(PUBLIC_VAPID_KEY)
    })

    await fetch('/subscription', { // Tambien podría usar Axios u otra biblioteca
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log('Subscribed!')
}

const form = document.querySelector('#myform',);
const message = document.querySelector('#message');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch('/new-message', {
        method: 'POST',
        body: JSON.stringify({
            message: message.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    form.reset();
})

subscription();