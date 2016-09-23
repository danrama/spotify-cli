## Synopsis

Silly command-line tool to fetch the top song for a set of artists from Spotify.

## Usage

Provide a list of artist names separated by commas to the tool and get back the top song for each:
```
$ spotify "Churches, Guns and Roses, Aha"

Searching Spotify for top tracks for artists: Churches, Guns and Roses, Aha                                                                    

CHVRCHES - The Mother We Share                                                                                                                 
Guns N' Roses - Sweet Child O' Mine                                                                                                            
a-ha - Take On Me 
```

## Installation

```
# will install the "spotify" CLI globally
npm install -g spotify-cli
```

## Tests

```
npm test
```

## Motivation

What better way to learn modern JavaScript asynchronous programming techniques and libraries then through a real-world example?
I wanted to go through a simple example of making several requests against a well documented public API and experiment a 
combination of callbacks, Promises, and Generator functions.

The [Spotify API](https://developer.spotify.com/web-api/) has a rich and well documented set of endpoints that allow you
to perform a variety of inquiries about artists and songs.  There are many open endpoints that don't require registration
or login.

I have found some really nice JavaScript learning resources, including:

* http://superherojs.com/
* https://www.promisejs.org/
* https://developer.atlassian.com/blog/2015/11/scripting-with-node/
* https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738#.bs0jhx60b

## Contributors

All are welcome!  In lieu of a formal style guide, take care to maintain the existing coding style. 
Add unit tests for any new or changed functionality.  Lint and test your code.

## License

Yeah, I know; silly project, why bother with license?  It's all about building good habits.  So here it goes.
I almost went with the [WTFPL](http://www.wtfpl.net/about/) but that felt... unprofessional.
By the way here are some nice resources around choosing software licensing:

* https://help.github.com/articles/open-source-licensing/
* http://choosealicense.com

Without further ado:
```
MIT License

Copyright (c) 2016 Daniel Bloomfield Ramagem

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```