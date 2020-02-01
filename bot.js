
console.log('the bot is starting');

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'g42NrhuNFC9FTWhdoHq0sMoOf',
  consumer_secret:      'fEWY6AEK2sGajQYtpm4fjCj4BZMBPLd5O6YQMaXbhtQCfD2LsH',
  access_token:         '1193313220318171136-RMp2nHd0OkDMoO5Hb3aeribX7siqwp',
  access_token_secret:  'MBxJ62sGeuh5TCjhms0femcF9npjGlngFgIvnpU32eZM7',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
});


T.post('statuses/update', { status: 'there is a ' + Math.floor(Math.random() * 101) + '% chance that you will have a good day today.' }, function(err, data, response) {
  console.log(data); console.log("///////////////////////////////////////////////////"); console.log("tweet tweeted")
});

