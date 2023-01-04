const mydb = require('./database')
const Notes = require('./models/note');

const Projection = require('./aggregations/projection');//soon we'll use the index.js file
const Sort = require('./aggregations/sort');

//Create Test Data
const testNotes = async function(){
    const note2 = await Notes.create({title: "rememebers", note: "remember to sleep", label: "reminder"});
    console.log(note2)
}

//Test projections
const testProjections = async function(){
    const notes =  new Projection(Notes);
    const node = await notes.project('title', 'label')
    console.log(node)
}

//Test Sort
const testSort = async function(){
    const notes =  new Sort(Notes);
    const node = await notes.sort('title', 1)
    console.log(node)
}

// testNotes()
// testProjections()
// testSort();