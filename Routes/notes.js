const router = require('express').Router();
const fs = require('fs')
// const util = require('util');
const {v4: uuidv4} = require('uuid')
const databasePath = path.join (__dirname, "../db/db.json")
const path = require('path');

router.get('/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync(databasePath))
    res.json(notes);
})

router.post('/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync(databasePath))
    req.body.id = uuidv4;
    notes.push(req.body);
    fs.writeFileSync(databasePath, JSON.stringify(notes))
    res.status(200)
    location.reload()
});

// router.delete('/notes/:id', (req, res) => {
//     let getId = req.params.id;
//     fs.readFileSync(databasePath, 'utf8', (err, data) => {
//         if(err){
//             console.log(err)
//         }else{
//             const parsedNotes = JSON.parse(data);
//             for(let i = 0; parsedNotes.length; i++) {
//                 const 
//             }
//         }
//     })
// })


