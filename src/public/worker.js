console.log('ABCDEFG')

self.addEventListener('push', e => {
    const data = e.data.json()
    console.log(data)
    self.registration.showNotification(data.title, {
        body: data.message,
        icon:'https://logos-world.net/wp-content/uploads/2020/06/Assassins-Creed-Logo.png'
    })
})