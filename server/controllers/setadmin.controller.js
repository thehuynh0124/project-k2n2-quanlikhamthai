const User = require('../models/User')
const verifyToken = require('../middleware/auth')



const setadmin = async (req, res) =>{
    const role = 'Admin'
    try {
        let setAmin = {
            role
        }
        const setadminCondition = { _id: req.params.id}
        setAmin = await User.findOneAndUpdate(
			setadminCondition,
			setAmin,
			{ new: true }
		)
        if (!setAmin)
			return res.status(401).json({
				success: false,
				message: 'User not found'
			})

		res.json({
			success: true,
			message: 'set admin successfully',
			User: setAmin
		})


    } catch (error) {
        console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
    }
}

module.exports = setadmin