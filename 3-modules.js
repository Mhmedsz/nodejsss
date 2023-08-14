//commonJS, every file is module(by default)
//Modules - Encapsulated code (only share minimum)

const names = require('./4-names')
console.log(names);
const func = require('./5-utils')
const data = require('./6-alternative-flavor')
console.log(data);

require('./7-mind-grenade')

func('susan');
func(names.john);
func(names.peter);