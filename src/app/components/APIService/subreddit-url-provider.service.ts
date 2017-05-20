import { Injectable } from '@angular/core';

// define some arrays of subreddit names. This can be stored in db later along with result of jsonRequestUrlProvider so we don't have to concat those every time.
let FutureSubreddits = [
    "futurology", "TheFutureIsNow", "Automate", "artificial", "MachineLearning"
]

let ActuallyFunnySubreddits = [
    "talesfromtechsupport", "programminghorror", "ProgrammerHumor", "tifu", "techsupportmacgyver"
]

//not sure if I'm going to keep this here or move it elsewhere. creates array of urls to $http.get for later
function jsonRequestUrlProvider(multireddit: Array<string>, subredditSort: string, submissionNum: number) {
    let jsonUrlArray : Array<string> = [];
    for (let subreddit of multireddit) {
        let jsonRequestUrl = 'https://www.reddit.com/r/' + subreddit + '/' + subredditSort + '.json?limit=' + submissionNum;
        jsonUrlArray.push(jsonRequestUrl);
    }
    return jsonUrlArray;
};

//tests for this...
//find multireddit.length, check against returned jsonUrlArray.length
//heuristic string validation