// @desc        Get all bootcamps
// @route       GET api/v1/getbootcamps
// @access      Public    
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'show all bootcamps'})
}

// @desc        Get single bootcamps
// @route       GET api/v1/getbootcamp
// @access      Public    
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `get bootcamps ${req.params.id}`})
}

// @desc        Update a bootcamps
// @route       PUT api/v1/getbootcamp/:id
// @access      Private    
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `show bootcamps ${req.params.id}`})
}

// @desc        Create a bootcamps
// @route       POST api/v1/getbootcamp
// @access      Private    
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'create new bootcamps'})
}

// @desc        Delete a bootcamps
// @route       DELET api/v1/getbootcamp
// @access      Private    
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `delete bootcamps ${req.params.id}`})
}
