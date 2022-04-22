module.exports = (app) => {
    const posts = require('../controllers/postController')
    const router = require('express').Router()

    router.get('/', posts.findAll)
    router.get('/:id', posts.findOne)
    router.put('/:id', posts.update)
    router.post('/', posts.create)
    router.delete('/:id', posts.delete)

    app.use('/api/posts', router)
}