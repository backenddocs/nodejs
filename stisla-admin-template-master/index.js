const express = require("express")
const app = express()
// const path = require('path');

const main = require('./conn/index');

const errorHandler = require('./middlewares/errorHandler')

main().then(()=>console.log('connection successful..')).catch((err)=>{console.log('connection failed', err)});

app.use(express.json());


app.set('view engine', 'ejs');


// const lposts=require("./models/leaveschema");


app.use(require('./routes/router'));

app.use(express.static('public'));




// app.get('/deptdata', async (req, res) => {
//     try {
//         const posts = await Posts.find()
//         if (!posts) throw Error('No Items');
//         console.log(posts);
//         res.render('managedept', { posts });
//         //res.status(200).json({ success: true, message: "data", data: posts })
//     } catch (error) {

//         res.status(400).json({ msg: error })
//     }
// });
// app.get('/attendencereport', async (req, res) => {
//     try {
//         const posts = await Posts.find()
//         if (!posts) throw Error('No Items');
//         console.log(posts)
//         res.render('', { posts });
//         //res.status(200).json({ success: true, message: "data", data: posts })
//     } catch (error) {

//         res.status(400).json({ msg: error })
//     }
// });


app.use(errorHandler);

app.listen(5000,()=>{
    console.log('app is listening on port 5000')
})