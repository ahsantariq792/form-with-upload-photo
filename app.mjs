// const express = require('express')
// const app = express()
// const fs = require('fs');
// const path = require('path')
// var cors = require('cors')
// const multer = require('multer')



import express from "express";
import multer from "multer";
import { readFile } from "fs/promises";
import cors from 'cors';
import mongoose from "mongoose";
// import  fstorage  from "./firebase.mjs";



const PORT = process.env.PORT || 5000
const app = express()

import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
    getStorage
} from "firebase/storage";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const fstorage = getStorage(firebaseapp)


app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    // credentials: true
}))


const storageMulter = multer.diskStorage({
    destination: "./uploads/images",
    filename: (req, file, cb) => {
        cb(null, `${new Date().getTime()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storageMulter })


app.use('/profile', express.static('upload/images'))



const House = mongoose.model('House', {
    title: {
        type: String,
        required: true
    },
    floors: {
        type: String,
        required: true
    },
    bedroom: {
        type: String,
        required: true
    },
    bathroom: {
        type: String,
        required: true
    },
    furniture: {
        type: String,
        required: true
    },
    drawingroom: {
        type: String,
        required: true
    },
    lounge: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        reuired: true
    },
    images: {
        type: [String],

    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})











app.post('/api/post_ad_house', upload.any(), async (req, res) => {
    // const { title,floors,bedroom,bathroom,drawingroom,lounge,area,furniture,city,state, description, price, name,phone,address } = req.body
    // if (!title || !floors || !bedroom || !bathroom || !furniture || !drawingroom || !lounge || !area || !description || !price  || !name || !phone || !city || !state|| !address || !file) {
    //     return (res.status(500).send("plz fill all fields")
    //     ) 
    // } else {
    // const table = new House({title,floors,bedroom,bathroom,drawingroom,lounge,area,furniture,city,state, description, price, name,phone,address  })
    // table.save().then(() => {
    //     console.log("Ad uploaded successfully"); res.status(200).send('Ad uploaded successfully')
    // }).catch((error) => { console.log(error) })



    console.log("reqbody", req.body)
    console.log(req.files)
    //Reference of file upload (path in firebasebucket)
    const file = await readFile(req.files[0].path);
    const storageRef = ref(fstorage, `images/images/${req.files[0].filename}`);
    const uploadTask = uploadBytesResumable(storageRef, file);



    uploadTask.on('state_changed',
        (snapshot) => {
            // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // Handle unsuccessful uploads
            console.log("error in uploading image", error)
        },
        () => {
            //Get link of file uploaded on firebase
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                console.log('File available at', downloadURL);

                try {
                    let newHouse = await new House({
                        name: req.body.name,
                        phone: req.body.phone,
                        description: req.body.description,
                        title: req.body.title,
                        furniture: req.body.furniture,
                        floors: req.body.floors,
                        bedroom: req.body.bedroom,
                        bathroom: req.body.bathroom,
                        drawingroom: req.body.drawingroom,
                        lounge: req.body.lounge,
                        area: req.body.area,
                        price: req.body.price,
                        state: req.body.state,
                        city: req.body.city,
                        address: req.body.address,
                        file: downloadURL,

                    })
                    await newHouse.save(() => {
                        console.log("data saved")
                        res.send('signup success')
                    })

                } catch (error) {
                    console.log(error);
                    res.status(500).send("Error in storage");
                }

            });

        }
    );











    // }


})


// app.get("/api/v1/get_ad_house", (req, res) => {

//     House.find()
//         .sort({ created: "desc" })
//         .then(admdata => res.json(admdata))
//         .catch(err => res.status(400).json('Error: ' + err));
// });






















app.post("/post", upload.any(), async (req, res, next) => {
    console.log(req.files)
    console.log(req.body)


    //Reference of file upload (path in firebasebucket)
    const file = await readFile(req.files[0].path);
    const storageRef = ref(fstorage, `images/images/${req.files[0].filename}`);
    const uploadTask = uploadBytesResumable(storageRef, file);



    uploadTask.on('state_changed',
        (snapshot) => {
            // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // Handle unsuccessful uploads
            console.log("error in uploading image", error)
        },
        () => {
            //Get link of file uploaded on firebase
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
            });
        }
    );

})





app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

