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
    appendlast : {
        // demand : true,
        alias:['al'],
        description: "Append Word in Last",
        type: 'string'
    },
     appendfirst : {
        // demand : true,
        alias:['af'],
        description: "Append Word in First",
        type: 'string'
    }
}).help('help').alias('help','h').argv;

//lib

const replaceWord = require("./lib/replace");
const Append = require("./lib/append.js");

var dir = process.cwd();

var searchWord = argv.s;
var renameWord = argv.rp;
var appendWordFirst = argv.af;
var appendWordLast = argv.al;

if(searchWord && renameWord) {
    replaceWord(searchWord,renameWord);
} else if(appendWordFirst && appendWordLast) {
    Append.appendBothWord(appendWordFirst,appendWordLast);
} else if(appendWordFirst) {
    Append.appendWord(appendWordFirst,"First");
} else if(appendWordLast) {
    Append.appendWord(appendWordLast,"Last");
} else {
    console.log("No Argument Provided");    
    console.log("For Argumnet List : remall -h");
}


