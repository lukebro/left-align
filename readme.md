# left-align [![Build Status](https://api.travis-ci.org/lukebro/left-align.svg)](https://travis-ci.org/lukebro/left-align)

> Left align text to a column

## Install
```console
$ npm install --save left-align
```

## Usage
```javascript
const leftAlign = require('left-align');

let leftAligned = leftAlign([
	['One', 'Two', 'Three', 'Four'],
	['Two', 'Three', 'Four', 'Five'],
	['Three', 'Four', 'Five', 'Six']
]);

//=> One      Two      Three    Four
//	 Two      Three    Four     Five
//	 Three    Four     Five    	Six
```
## API

### leftAlign(lines)

Returns a `string` of the table.

#### lines
Type: `Array(Array(String))`

This needs to be a valid 2D array.  Every index in the `Array` should be an `Array`, and that `Array` should contain `string`s respectively.

## Inspiration

I made this because I needed a simple left aligned columned table without a 20 configuration lines, and I couldn't find it. 😕

## License

MIT © [Lukasz Brodowski](http://lukebro.com)
