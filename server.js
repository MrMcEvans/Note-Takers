const express = require("express");
const app = express();
const PORT = 3001;
const api = require("./Routes/notes")
const noteRouter = require('./Routes/notes')
const path = require('path');




app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/api", api)
app.use("/notes", noteRouter)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});


noteRouter.post("/notes", (req, res) => {
    let note = JSON.parse(fs.readFileSync(database))
    req.body.id = uuidv4;
    note.push()
})


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});


app.post('/api/notes', (req, res) => {
    let newNotes = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text,
    };
    fs.readFile('./db/db.json', 'utf8', function(err, data) {
        if(err) {console.log(err)};
        let notes = JSON.parse(data);
        console.log(notes);
        notes.push(newNotes)
        console.log(notes)
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if(err) {console.log(err)}
            console.log("Your notes have been saved")
        });
    });
});



// app.listen(PORT, () => {
//         console.log(
//             `application seccesfully listening to http://localhost:${PORT}`)
//     })


    