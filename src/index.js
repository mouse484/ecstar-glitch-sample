const { Client } = require('ecstar');

const client = new Client({
  prefix: 'your prefix', //Required
  owner: 'your id',
  lang: new LangFile()
});

client.login('Your token here');
