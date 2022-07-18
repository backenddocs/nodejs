
const Joi = require('joi');
const Employee = require('../../models/schema');
const customErrorHandler = require('../../services/customErrorHandler');

const registerController = {

    // Employee registration
    async register(req, res, next) {

        console.log(req.body)

        const registerSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            fathername: Joi.string().min(3).max(30).required(),
            dob: Joi.string().required(),
            // dob: Joi.date().format('YYYY-MM-DD').options({ convert: false }).required(),
            gender: Joi.string().length(1).required(),
            phone1: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
            phone2: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
            permanentaddress: Joi.string().required(),
            nationality: Joi.string().required(),
            reference1: Joi.string().min(3).max(30).required(),
            reference1Phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
            reference2: Joi.string().min(3).max(30).required(),
            reference2Phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
            maritalstatus: Joi.string().required(),
            empid: Joi.string().required(),
            joining : Joi.string().required(),
            leaving : Joi.string().required(),
            salary : Joi.number().required(),
            accountholdername: Joi.string().required(),
            accountnumber: Joi.string().required(),
            bankname: Joi.string().required(),
            branch : Joi.string().required(),
            bankcode: Joi.string().required(),
            department: Joi.string().required(),
            designation : Joi.string().required()

        })

        const { error } = registerSchema.validate(req.body);

        console.log("before validation")
        if (error) {
            return next(error);
        }
        console.log("after validation")

        const { name,email, fathername, dob, gender, phone1, phone2, localaddress, parmanentaddress, nationality, reference1, reference1Phone, reference2, reference2Phone, maritalstatus, accountholdername, accountnumber, bankname, branch, bankcode, empid, department, salary } = req.body;

        try {

            const employee = await Employee.exists({email : req.body.email});

            if(employee){
                return next(customErrorHandler.alreadyExist('User already exists'))
            }


            Employee.create({
                name,email, fathername, dob, gender, phone1, phone2, localaddress, parmanentaddress, nationality, reference1, reference1Phone, reference2, reference2Phone, maritalstatus, accountholdername, accountnumber, bankname, branch, bankcode, empid, department, salary
            })
                .then(data => {
                    console.log(data, "data1")
                    res.status(200).json(data)
                }).catch(err => {
                    console.log(err);
                    return next(err)
                })
        }
        catch (error) {
            return next(error)
        }
    },

    async showData(req, res, next) {

        try {
            const employees = await Employee.find();

            if (!employees) {
                return next(customErrorHandler.nodata('No data availabe'))
            }
            
            return res.json(employees);

        } catch (error) {

            return next(error)
        }
    }

}





module.exports = registerController;