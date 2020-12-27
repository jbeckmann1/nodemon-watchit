#!/usr/bin/env node
//Debounce function
const debounce = require('lodash.debounce');
//chokidar watches for new/changed files
const chokidar = require('chokidar');
//CLI Tool
const caporal = require('caporal');

const start = debounce(() => {
	console.log('Starting Users Program');
}, 100);

chokidar
	.watch('.')
	.on('add', start)
	.on('change', () => console.log('File changed'))
	.on('unlink', () => console.log('File unlinked'));
console.log('hi');
