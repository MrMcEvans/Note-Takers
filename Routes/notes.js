const router = require('express').Router();
const fs = require('fs')
// const util = require('util');
const {v4: uuidv4} = require('uuid')
const path = require('path');
const databasePath = path.join (__dirname, "../db/db.json")

router.get('/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync(databasePath))
    res.json(notes);
});


router.post('/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync(databasePath))
    req.body.id = uuidv4();
    notes.push(req.body);
    fs.writeFileSync(databasePath, JSON.stringify(notes))
    res.status(200)
    reload();
});

router.delete('/notes/:id', (req, res) => {
    let idToDelete = req.params.id;
    fs.readFile(databasePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
            return;
        }
        else{
        let parsedNotes = JSON.parse(data);
        let updatedNotes = parsedNotes.filter(note => note.id !== idToDelete);

        fs.writeFile(databasePath, JSON.stringify(updatedNotes), (err) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal server error');
                return;
            }

            res.status(200).send('Note deleted successfully');
        });
    }
    });
});


module.exports = router


