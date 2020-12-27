#!/usr/bin/env node
//Debounce function
const debounce = require('lodash.debounce');
//chokidar watches for new/changed files
const chokidar = require('chokidar');
//CLI Tool
const program = require('caporal');
const { parse } = require('caporal');

program.version('0.0.1').argument('[filename]', 'Name of a file to execute').action((args) => {
	console.log(args);
});

program.parse(process.argv);

const start = debounce(() => {
	console.log('Starting Users Program');
}, 100);

chokidar
	.watch('.')
	.on('add', start)
	.on('change', () => console.log('File changed'))
	.on('unlink', () => console.log('File unlinked'));
