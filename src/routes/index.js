const { Router } = require('express')
const router = Router()

const webpush = require('../webpush')
let pushSubscription

// Subscriptions
router.post('/subscription', async (req, res) => {
    pushSubscription = req.body
    res.status(200).json()

    const payload = JSON.stringify({
        title: 'My custom notification',
        message: 'Hello croto'
    })

    try {
        await webpush.sendNotification(pushSubscription, payload)
    } catch (error) {
        console.log(error)
    }
})

// Send notifications


module.exports = router