const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf: require('./next.config.js') })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    let Discord = require('discord.js');
    try{
    var client = new Discord.Client();
    }catch(err){


    };
  let s = createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
res.discord = client;
req.server = s;
      handle(req, res, parsedUrl)
  }).listen(3000, err => {
    if (err) throw err
    try{
    client.login(process.env.DISCORD).catch(err => {      console.log('> Ready on http://localhost:3000'); client.emit('ready')});
    }catch(err){
      console.log('> Ready on http://localhost:3000');
      return;

    }
    client.once('ready',() => {
        console.log('> Ready on http://localhost:3000')

    });
  })
})