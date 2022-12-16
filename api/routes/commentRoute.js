const express = require('express')
const router = express.Router()
const { getComment, updateComment, setComment, deleteComment } = require('../controllers/commentController')

router.get('/', getComment)
router.post('/', setComment)
router.put('/:id', updateComment)
router.delete('/:id', deleteComment)

module.exports = router