# twitch-irc-db
[![Npm Version](http://img.shields.io/npm/v/twitch-irc-db.svg?style=flat)](https://www.npmjs.org/package/twitch-irc-db) [![Issues](http://img.shields.io/github/issues/twitch-irc/twitch-irc-db.svg?style=flat)](https://github.com/twitch-irc/twitch-irc-db/issues)

## Installation

```bash
$ npm install --save twitch-irc-db
```

## Configuration

You can either pass the client instance as a parameter or an object, as long as it contains the ``database`` object, which is the path to your local database. Not using any parameter will results as the default path, which is ``./database``.

```javascript
var irc = require('twitch-irc');

var clientOptions = {
    options: {
        exitOnError: false,
        database: './data',
    },
    channels: ['schmoopiie']
};

var client = new irc.client(clientOptions);
var db     = require('twitch-irc-db')(client);
//var db   = require('twitch-irc-db')(clientOptions);        <- Also works!
//var db   = require('twitch-irc-db')({database: './data'}); <- Also works!

db.insert('monsters', [
    {name: "sphinx", mythology: "greek", eyes: 2, sex: "f", hobbies: ["riddles","sitting","being a wonder"]},
    {name: "hydra", mythology: "greek", eyes: 18, sex: "m", hobbies: ["coiling","terrorizing","growing"]},
    {name: "huldra", mythology: "norse", eyes: 2, sex: "f", hobbies: ["luring","terrorizing"]},
    {name: "cyclops", mythology: "greek", eyes: 1, sex: "m", hobbies: ["staring","terrorizing"]},
    {name: "fenrir", mythology: "norse", eyes: 2, sex: "m", hobbies: ["growing","god-killing"]},
    {name: "medusa",  mythology: "greek", eyes: 2, sex: "f", hobbies: ["coiling","staring"]}
]).then(function () {
    console.log('Inserted data.');
});
```

## Contributing Guidelines

Please review the [guidelines for contributing](https://github.com/twitch-irc/twitch-irc-db/blob/master/CONTRIBUTING.md) to this repository.

## Support

Feel free to [create an issue](https://github.com/twitch-irc/twitch-irc-db/issues/new). We are active on the development of twitch-irc and it's modules and we respond to each and every issues. When submitting an issue, please include your Node/NPM versions, your operating system and the log file or the error message. Please, do your best to explain how to reproduce the issue.

## License

The MIT License (MIT)

Copyright (c) 2015 Schmoopiie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
