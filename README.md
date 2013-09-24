least-squares
=============

JavaScript component for linear least squares regression analysis.



Install
-------

### Node.js/Browserify

    npm install --save least-squares


### Component

    component install jprichardson/least-squares

### Script

```html
<script src="/path/to/least-squares.js"></script>
```



Method
-------

### lsq(X, Y, [computeError], [returnObject])

- returns a function that computes y = mx + b

inputs:
- `X`: array of x values
- `Y`: array of y values
- `computeError`: compute standard error (optional)
- `returnObject`: object with fields `b`, `m`, and `bErr`, `mErr` if `computeError` is true (optional)



Example
------

```js
var lsq = require('least-squares')

//(1, 6), (2,5), (3,7), (4,10)
var X = [1,2,3,4]
var Y = [6,5,7,10]

var ret = {}
var f = lsq(X, Y, ret)
console.dir(ret) //{ m: 1.4, b: 3.5 }
console.log(f(3.6)) //8.54

var f = lsq(X, Y, true, ret)
console.dir(ret) //{ m: 1.4, b: 3.5, bErr: 1.7748239349298847, mErr: 0.648074069840786 }

```


License
-------

(MIT License)

Copyright 2013, JP Richardson  <jprichardson@gmail.com>


