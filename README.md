# Randomize JSON Arrays
Created as a tool for randomizing an array of tweets for a [Twitter Bot](https://github.com/PoorBillyPilgrim/gtlibrary-retrotech-twitterbot) I created for the Georgia Tech Library's retroTECH collection.

The tweets' contents were saved in the JSON file as an array of objects:
```js
{
    "tweets":[
        { "tweet": 1 },
        { "tweet": 2 },
        { "tweet": 3 }
    ]
}
```
The script will spit out a new array with the tweets now randomly organized
```js
{
    "tweets":[
        { "tweet": 3 },
        { "tweet": 1 },
        { "tweet": 2 }
    ]
}
```
This script was designed for a JSON file containing a single array of data but can easily be modified for multiple arrays.

## Usage
1. Create an empty folder: `mkdir randomize-json`
2. Clone project: `git clone git@github.com:PoorBillyPilgrim/randomize-json.git`
3. save JSON file you would like randomized within folder as `data.json`
4. run `node index`
5. randomized JSON array will be saved over `data.json`