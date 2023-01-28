// @des     Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = ( req, res, next ) => {
    res.status(200).json({ success: true, msg: 'Show all Bootcamps' })
}

// @des     Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = ( req, res, next ) => {
    res.status(200).json({ success: true, msg: `get Bootcamp ${req.params.id}`})
}

// @des     Create new bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  Private
exports.createBootcamp = ( req, res, next ) => {
    res.status(200).json({ success: true, msg: 'Create new Bootcamp'})
}

// @des     Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = ( req, res, next ) => {
    res.status(200).json({ success: true, msg: `Update Bootcamp ${req.params.id}`})
}

// @des     Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = ( req, res, next ) => {
    res.status(200).json({ success: true, msg: `Delete ${req.params.id}`})
}
