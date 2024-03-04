//let url = 'https://poetrydb.org/random,linecount/1;10/title,author,lines.json'
//let url = 'https://poetrydb.org/author,title/Shakespeare;Sonnet'
//let url = 'https://poetrydb.org/author/Amy Levy'

// REMOVED
let poetUrl = 'https://poetrydb.org/authors'

const button = document.getElementById('button');
const poemZone = document.getElementById('poem');
let poemHolder = [];

async function requestPoem(url) {

    //REQUEST POEMS FROM API
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);


    //ADDED 
    document.getElementById('poem-picker').style.display = "inherit";
    poemHolder = data;
    poemLister(data);
}

async function requestAuthors(url) {

    //REQUEST AUTHORS FROM API
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    poetLister(data.authors);

}

//MOVED requestPoem
requestAuthors(poetUrl)



function selectPoem(data, index) {

    const poem = data[index]["lines"].join(' <br> ');
    poemZone.innerHTML = poem;
    console.log(index);
}

// ADDED
function selectPoet(data, index) {
    let url = `https://poetrydb.org/author/${data}`
    requestPoem(url);
    document.getElementById('poet-name').innerText = data;
    // add something to change the picture
}


//LIST ALL THE POEMS
function poemLister(data) {

    // ADDED RESET LINE
    document.getElementById('poem-picker').innerHTML = `<option selected>Pick a poem</option>`;
    document.getElementById('poem').innerText = '';
    const listOfTitles = data.map((poem, index) => {
        // console.log(poem.title);
        const node = document.createElement("option");
        node.innerHTML = `${poem.title}`;
        node.value = index;
        // node.innerText = poem.title;
        //node.setAttribute("onclick", "")
        document.getElementById('poem-picker').appendChild(node);

    })
    //console.log(listOfTitles);
    document.getElementById('poem-count').innerText = `${listOfTitles.length} poems available`
}
//LIST ALL THE POETS
function poetLister(data) {
    const listOfPoets = data.map((poet, index) => {
        // console.log(poem.title);
        const node = document.createElement("option");
        node.innerHTML = `${poet}`;
        node.value = `${poet}`;
        // node.innerText = poem.title;
        //node.setAttribute("onclick", "")
        document.getElementById('poet-picker').appendChild(node);

    })
    console.log(listOfPoets.length);
    // document.getElementById('poem-count').innerText = `${listOfPoets.length} poems available`
}


