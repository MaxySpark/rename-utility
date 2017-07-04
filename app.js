#!/usr/bin/env node
'use strict'

const fs = require("fs");
const path = require("path");

var dir = process.cwd();

var fileList = [];

fs.readdir(dir,(err,files)=>{
    files.forEach((file)=>{
        fileList.push(file);
    });
    console.log(fileList);
});
