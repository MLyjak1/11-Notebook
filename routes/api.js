// 
const router = require('express').Router();
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const { v4:uuidv4 } = require('uuid');
const { runInNewContext } = require('vm');

function getNotes() {
    return readFile('db/db.json', "UTF-8").then(rawNotes => {
        const notesArray = JSON.parse(rawNotes);
        return notesArray;
    });
};


router.get('/notes', async function (req, res) {
    // Get all Notes
    try {
     const notesArray = await getNotes();
     res.json(notesArray);  
    } catch (error) {
        res.json(error);
    }
});

router.post('/notes', async function (req, res) {
    //Save Note to DB
    const notesArray = await getNotes();
    const newNote = {title: req.body.title, text: req.body.text, id: uuidv4()}
    const newArray = [...notesArray, newNote];
    console.log(newArray);
    try {
        res.json({msg:"OK"});
    } catch (error) {
        res.json(error);
    }
});

router.delete('/notes/:id', function (req, res) {
   //Delete specific note by ID
   try {
        
} catch (error) {
    res.json(error);
}
});

module.exports = router;