#!/usr/bin/env node
'use strict'

const fs = require("fs");
const path = require("path");
const colors = require('colors');
const argv = require('yargs').option({
    search : {
        demand : true,
        alias:[ 's'],
        description: "Search Word",
        type: 'string'
    },
    rename : {
        demand : true,
        alias:[ 'r'],
        description: "Rename Word",
        type: 'string'
    }
}).help('help').alias('help','h').argv;

//lib

const replaceWord = require("./lib/replace");


var dir = process.cwd();

var searchWord = argv.s;
var renameWord = argv.r;

replaceWord(searchWord,renameWord);


