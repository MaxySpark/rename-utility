#!/usr/bin/env node
'use strict'

const fs = require("fs");
const path = require("path");
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
var dir = process.cwd();

var fileList = [];
var oldNameList = [];
var newNameList = [];

var searchWord = argv.s;
var renameWord = argv.r;

main(searchWord,renameWord);


//--functions--//    

function main(oldWord,newWord) {

    var searchRegex = new RegExp(oldWord, "i");
    
    console.log("Searching For " + oldWord + " And Rename to " + newWord +"\n");

    readFileName().then(function(list){

        return searchAndRename(searchRegex,newWord,list);

    });
    
}

function readFileName() {
    return new Promise(function(resolve,reject) {

        fs.readdir(dir,(err,files)=>{
            files.forEach((file)=>{
                fileList.push(file);
            });
            //finished pushing names
            resolve(fileList); 
        });

    });
}

function searchAndRename(searchRegex,newWord,list) {
    return new Promise(function(resolve,reject){

        list.forEach(function(item){
             if(item.search(searchRegex) > -1) {
                var newName = item.replace(searchRegex,newWord);

                fs.rename(path.join(dir,item),path.join(dir,newName),function() {
                    console.log("Matched File Name : " + item + " --> Renamed to " + newName);
                });
            }
            resolve();
        });

    });
}
