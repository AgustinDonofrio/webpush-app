console.log('ABCDEFG')

self.addEventListener('push', e => {
    const data = e.data.json()
    console.log(data)
    self.registration.showNotification(data.title, {
        body: data.message,
        icon:'https://images.emojiterra.com/google/android-11/512px/1f916.png'
    })
})