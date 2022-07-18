const Leaves = require("../../models/leaveschema");


const leaveController = {

    // function for employee leaves
    
    async manageleave(req, res,next){
       
            try {

                const total = await Leaves.find();

                if (!total) {
                    return ;
                }
                console.log(total)
                return res.json({totalLeave : total})
                
            } catch (error) {
                res.status(400).json({ msg: error.message })
            }
        }
        
    }



module.exports = leaveController;