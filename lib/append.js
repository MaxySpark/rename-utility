'use strict'

const fs = require("fs");
const path = require("path");
const colors = require('colors');

const dir = process.cwd();

var fileList = [];
var oldNameList = [];
var newNameList = [];

function appendWord(appendWord,appendPosition) {
    if(appendPosition=="First") {
        console.log("Appened " + appendWord.blue.bold + " in " + appendPosition.red.bold + " of The File Name \n");

        readFileName().then(function(list){

            return appendFirst(appendWord,list);

        });
    } else if(appendPosition=="Last") {
        console.log("Appened " + appendWord.blue.bold + " in " + appendPosition.red.bold + " of The File Name \n");

        readFileName().then(function(list){

            return appendLast(appendWord,list);

        });
    }     
}

function appendBothWord(appendWordF,appendWordL) {

    console.log("Appened " + appendWordF.blue.bold + " in Front and " + appendWordL.blue.bold + " in Last of The File Name \n");

    readFileName().then(function(list){

        return appendBoth(appendWordF,appendWordL,list);

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

function appendBoth(appendWordF,appendWordL,list) {
    return new Promise(function(resolve,reject){

        list.forEach(function(item){
            var ext = path.extname(item);

            var newName = appendWordF + item.replace(new RegExp(ext+"$"),appendWordL) + ext ;

            fs.rename(path.join(dir,item),path.join(dir,newName),function() {
                console.log("Old File Name : " + item.red.bold + " --> New File Name " + newName.blue.bold);
            });
            
            resolve();
        });

    });
}



module.exports = {
    appendWord : appendWord,
    appendBothWord : appendBothWord
};