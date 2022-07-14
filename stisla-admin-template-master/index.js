const express = require("express")

var mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
//const multer = require("multer");
// const multer = require("multer");


mongoose.connect('mongodb://localhost:27017/empdb',
    {
        useNewUrlParser: true,

        useUnifiedTopology: true

    }
    
);
var app = express()
const path = require('path');
// const Upload = require("./upload/upload");
// const empuploadmiddleware = require("./upload/empupload");

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

const Posts = require("./schema")
// var app = express()
// app.use(express.static('public'));

// // app.use(express.json());
// app.use(express.urlencoded({
//     extended: true,
// }));

// //Set Path
// app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/index-.html'))
});
app.get('/newfile',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/index-1.html'))
});
app.use(express.static(__dirname + "/public"));
// app.use(app.router);
// app.use(app.router);
app.post('/post', async (req, res) => {

    try {
        console.log({
            name:req.body.name,
            fathername:req.body.fathername,
            DoB: req.body.dob,
            gender:req.body.gender,
            phone1: req.body.phone1,
            phone2: req.body.phone2,
            localaddress: req.body.localaddress,
            parmanentaddress:req.body.paddress,
            nationality :req.body.nationality,
            reference1 :req.body.reference1,
            reference1phone:req.body.reference1phone,
            reference2:req.body.reference2,
            reference2phone:req.body.reference2phone,
            maritalstatus:req.body.mstatus,
            immg:req.body.file,
            accountholdername:req.body.accountholdername,
            accountnumber:req.body.accountnumber,
            bankname:req.body.bankname,
            branch:req.body.branch,
            // bankcode:req.body.bankcode,
            empid:req.body.empid,
            department:req.body.department,
            BasicSalary:req.body.basicsalary,
                }, "data")
        Posts.create({
            name: req.body.name,
            fathername: req.body.fathername,
            DoB: req.body.DoB,
            gender: req.body.gender,
            phone1:req.body.phone1 ,
            phone2: req.body.phone2,
            localaddress:req.body.localaddress,
            parmanentaddress:req.body.parmanentaddress,
            nationality :req.body.nationality,
            reference1 :req.body.reference1,
            reference1phone:req.body.reference1phone,
            reference2:req.reference2,
            reference2phone:req.body.reference2phone,
            maritalstatus:req.body.maritalstatus,
            accountholdername:req.body.accountholdername,
            accountnumber:req.body.accountnumber,
            bankname:req.body.bankname,
            branch:req.body.branch,
            bankcode:req.body.bankcode,
            empid:req.body.empid,
            department:req.body.department,
            BasicSalary:req.body.basicsalary,
        
        })
            .then(data => {
                console.log(data, "data1")
                res.status(200).json({ data })
            }).catch(err => {
                console.log(err, "err");
                res.status(422).json({ err })
            })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
app.post('/login', async (req, res) => {
    try {
        // console.log("name===========>>>>>>>>>>>>", req.body.name);
        // console.log("password===========>>>>>>>>>>>>", req.body.password);
        const payload = {
            name: req.body.name,
            password: req.body.password
        }
        const posts = await Postslog.findOne(payload)
        // alert("data matched===========>", posts);
        console.log("data=============>>>>>>>>>>", posts, "---------------------");
        if (posts) throw Error('No Items');
        // if (posts) {
        //     return res.send({ error: false, data: posts[0], message: posts[0].email, iddd: posts[0].id });
        // }
        // else {
        //     return res.send({ error: true, message: 'Not Get Data.', status: 201 });
        // }


        // res.status(200).json({ success: true, message: "login successfully", data: posts })
        // return res.json(posts);
    }
    catch (error) {

        res.status(400).json({ msg: error })
    }
});
app.get('/data', async (req, res) => {
    try {
        const posts = await Posts.find()
        if (!posts) throw Error('No Items');
        console.log(posts)
        res.render('manageemp', { posts });
        //res.status(200).json({ success: true, message: "data", data: posts })
    } catch (error) {

        res.status(400).json({ msg: error })
    }
});

app.get('/deptdata', async (req, res) => {
    try {
        const posts = await Posts.find()
        if (!posts) throw Error('No Items');
        console.log(posts)
        res.render('managedept', { posts });
        //res.status(200).json({ success: true, message: "data", data: posts })
    } catch (error) {

        res.status(400).json({ msg: error })
    }
});
app.get('/attendencereport', async (req, res) => {
    try {
        const posts = await Posts.find()
        if (!posts) throw Error('No Items');
        console.log(posts)
        res.render('attendencereport', { posts });
        //res.status(200).json({ success: true, message: "data", data: posts })
    } catch (error) {

        res.status(400).json({ msg: error })
    }
});

app.listen(8088,()=>{
    console.log('app is listening on port 8088')
})