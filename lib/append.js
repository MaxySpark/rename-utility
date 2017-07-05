'use strict'

const fs = require("fs");
const path = require("path");
const colors = require('colors');

const dir = process.cwd();

var fileList = [];
var oldNameList = [];
var newNameList = [];

function appendWord(appendWord,appendPosition) {

    var searchRegex = new RegExp(oldWord, "i");
    
    console.log("Appened " + appendWord.blue.bold + " in " + appendPosition.red.bold + " \n");

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

function appendFirst(appendWord,list) {
    return new Promise(function(resolve,reject){

        list.forEach(function(item){
            
            var newName = appendWord + item;

            fs.rename(path.join(dir,item),path.join(dir,newName),function() {
                console.log("Old File Name : " + item.red.bold + " --> New File Name " + newName.blue.bold);
            });
            
            resolve();
        });

    });
}

function appendLast(appendWord,list) {
    return new Promise(function(resolve,reject){

        list.forEach(function(item){
            var ext = path.extname(item);

            var newName = item.replace(new RegExp(ext+"$"),appendWord) + ext ;

            fs.rename(path.join(dir,item),path.join(dir,newName),function() {
                console.log("Old File Name : " + item.red.bold + " --> New File Name " + newName.blue.bold);
            });
            
            resolve();
        });

    });
}

module.exports = {
    appendFirst : appendFirst,
    appendLast : appendLast
};