#!/usr/bin/env node
'use strict'

const fs = require("fs");
const path = require("path");
const colors = require('colors');
const argv = require('yargs').option({
    search : {
        // demand : true,
        alias:['s'],
        description: "Search Word",
        type: 'string'
    },
    replace : {
        // demand : true,
        alias:['rp'],
        description: "Replace Word",
        type: 'string'
    },
    append : {
        // demand : true,
        alias:['al'],
        description: "Append Word",
        type: 'string'
    }
}).help('help').alias('help','h').argv;

//lib

const replaceWord = require("./lib/replace");


var dir = process.cwd();

var searchWord = argv.s;
var renameWord = argv.rp;
var appendWord = argv.a;

if(searchWord && renameWord) {
    replaceWord(searchWord,renameWord);
} else if(appendWord) {

} else {
    console.log("No Argument Provided");
    console.log("For Argumnet List : remall -h");
}


