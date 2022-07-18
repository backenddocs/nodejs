const Joi = require("joi");
const jwt = require("jsonwebtoken");
const Admin = require("../models/adminSchema");
const customErrorHandler = require("../services/customErrorHandler");

const loginController = {

    // admin login
    async login(req, res, next){
        
        console.log(req.body);

        // admin login validation

        const adminValidation = Joi.object({
            email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','in'] } }).required(),
            password : Joi.string().min(3).max(15).required()
        })

        const {error} = adminValidation.validate(req.body);
        if(error){
            return next(error);
        }

        const {email, password} = req.body;

                try {

                    const findAdmin = await Admin.findOne({email : email});

                    if(!findAdmin){
                        return next(customErrorHandler.nodata('User does not exists'));
                    }

                    // const matchPassword = await bcrypt.compare(req.body.password, findAdmin.password);

                    // if(!matchPassword){
                    //     return res.json({message : "Please enter valid email or password"})
                    // }

                    const passwordMatch =await Admin.findOne({password : password});
                    if(!passwordMatch){
                        return res.json({message : "Password does not match"})
                    }

                    var token = jwt.sign({ id: findAdmin._id }, 'itisplaciddigitalemployeedashboard');
                    
                    return res.json({token})
                }
                catch (error) {
            
                    return next(error)
                }
            }
    }



module.exports = loginController;