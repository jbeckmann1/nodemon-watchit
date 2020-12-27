#!/usr/bin/env node
//chokidar watches for new/changed files
const chokidar = require('chokidar');
//CLI Tool
const caporal = require('caporal');
chokidar
	.watch('.')
	.on('add', () => console.log('File added'))
	.on('change', () => console.log('File changed'))
	.on('unlink', () => console.log('File unlinked'));
console.log('hi');
