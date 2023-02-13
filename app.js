const express = require('express');
let auth = require('basic-auth');

const app = express();
const port = 8082;

//  20 Frank Sinatra songs
let sinatra_songs = [
    //  songs 1 - 5
    "Ac-cent-tchu-ate the Positive",
    "Accidents Will Happen",
    "Adeste Fideles",
    "Ad-Lib Blues",
    "An Affair to Remember (Our Love Affair)",
    //  songs 6-10
    "After You've Gone",
    "Ain't She Sweet",
    "Ain't Cha Ever Comin' Back?",
    "Air For English Horn",
    "Alice Blue Gown",
    //  songs 11 - 15
    "All Alone",
    "All By Myself",
    "All I Do Is Dream of You",
    "All I Need is the Girl",
    "All My Tomorrows",
    //  songs 16 - 20
    "All of Me",
    "All of You",
    "All or Nothing at All",
    "All the Things You Are",
    "All the Way",
];

//  landing page
//  request responds with a random Frank Sinatra song out of 20 possbile songs
app.get('/', (req, res) => {
    let random_num = Math.floor(Math.random() * sinatra_songs.length);
    res.send(`song number #${random_num} "${sinatra_songs[random_num]}"`);
})

//  birth date page
//  request responds with Frank Sinatra's birthday
app.get('/birth_date', (req, res) => {
    res.send(`December 12, 1915`);
})

//  birth city page
//  request responds with Frank Sinatra's birth city
app.get('/birth_city', (req, res) => {
    res.send(`Hoboken, New Jersey`);
})

//  wives page
//  request responds with Frank Sinatra's wives, in ascending order
app.get('/wives', (req, res) => {
    res.send(`Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx`);
})

//  picture page
//  request responds with a redirect to Frank Sinatra's picture
app.get('/picture', (req, res) => {
    let url = 'https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg';
    res.redirect(url);
})

//  public page
//  request responds with a public message
app.get('/public', (req, res) => {
    res.send("Everybody can see this page");
})

//  protected page
//  request responds with two different messages:
//  1)  authenticated or
//  2)  401 not authorized

//  This action will be protected by a HTTP Basic access authentication and 
//  print "Welcome, authenticated client" if you are authorized with the 
//  login admin and password admin otherwise it will provide a 401 Not authorized
app.get('/protected', (request, res) => {
    let credentials = auth(request);
    if (!credentials || (credentials.name !== 'admin' && credentials.pass != 'admin')) {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic realm="example"');
        res.end('Not authorized');
    }
    else {
        res.end("Welcome, authenticated client");
    }
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})