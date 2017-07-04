#!/usr/bin/env node
'use strict'

const fs = require("fs");
const path = require("path");

var dir = process.cwd();

var fileList = [];

main("test");

//--functions--//    

function main(oldWord) {
    var searchRegex = new RegExp(oldWord, "i");
    console.log("Searching For " + oldWord);

    readFileName().then(function(list){
        // console.log(list);

        list.forEach(function(item){
            if(item.search(searchRegex) > -1) {
                console.log("Matched File Name : " +item);
            }
        });

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

// function searchAndRename(oldWord,newWord,list) {
//     return new Promise(function(resolve,reject){
//         list.forEach(function(item){
//             if(item.toString().search(oldWord) > 0) {
//                 console.log(item);
//             }
//             resolve();
//         });
//     });
// }
