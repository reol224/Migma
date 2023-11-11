const asyncHandler = require('express-async-handler')
const comment = require('../models/comment')

// @desc    Get comment
// @route   GET /api/comment/:productId
// @access  private 
const getComment = asyncHandler(async (req, resp) => {
    const productId = req.body.productId
    const commentItems = await comment.find({product: productId})

    resp.status(200).json(commentItems) //{message: 'Get comment Item'}
} )

// @desc    Set comment
// @route   POST /api/comment
// @access  private
const setComment = asyncHandler(async (req, resp) => {
    if(!req.body.text){
        resp.status(400)
        throw new Error('Please write something as comment!')
    }

    const commentItem = await comment.create({
        product: req.body.product,
        user: req.body.user,
        rating: req.body.rating,
        image: req.body.image,
        text: req.body.text
    })

    resp.status(200).json(commentItem)
} )

// @desc    Update comment
// @route   PUT /api/comment/:id
// @access  private
const updateComment = asyncHandler(async (req, resp) => {
    const comment = await comment.findById(req.params.id)
    if(!comment){
        resp.status(400)
        throw new Error('Comment not found!')
    }

    const updatedComment = await comment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    resp.status(200).json(updatedComment)
} )

// @desc    Delete comment
// @route   DELETE /api/comment/:id
// @access  private
const deleteComment = asyncHandler(async (req, resp) => {
    const comment = await comment.findById(req.params.id)
    if(!comment){
        resp.status(400)
        throw new Error('Comment not found!')
    }

    await comment.remove()

    resp.status(200).json({message: `Delete comment Item from ${req.params.id}`})
} )

module.exports = {
    getComment,
    setComment,
    updateComment,
    deleteComment,
}