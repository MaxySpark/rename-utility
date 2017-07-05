'use strict'

const fs = require("fs");
const path = require("path");
const colors = require('colors');

const dir = process.cwd();

var fileList = [];
var oldNameList = [];
var newNameList = [];

function replaceWord(oldWord,newWord) {

    var searchRegex = new RegExp(oldWord, "i");
    
    console.log("Searching For " + oldWord.red.bold + " And Rename to " + newWord.blue.bold +"\n");

    readFileName().then(function(list){

        return searchAndReplace(searchRegex,newWord,list);

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

function searchAndReplace(searchRegex,newWord,list) {
    return new Promise(function(resolve,reject){

        list.forEach(function(item){
             if(item.search(searchRegex) > -1) {
                var newName = item.replace(searchRegex,newWord);

                fs.rename(path.join(dir,item),path.join(dir,newName),function() {
                    console.log("Matched File Name : " + item.red.bold + " --> Renamed to " + newName.blue.bold);
                });
            }
            resolve();
        });

    });
}

module.exports = replaceWord;