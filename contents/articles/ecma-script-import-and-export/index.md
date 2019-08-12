---
title: ECMA Script import and export
published: true
thumbnail: ./thumbnail.jpg
description:
tags: es6,import,  export ,module
---

The export statement is used when creating JavaScript modules to export functions, objects, or primitive values from the module so they can be used by other programs with the import statement.

This feature is only implemented natively in Safari and Chrome at this time. It is implemented in many transpilers, such as the Traceur Compiler, Babel or Rollup.
There are 4 types of exports:

> 1 — Named exports (several per module) <br/>
> 2 — Default exports (one per module) <br/>
> 3 — Mixed named & default exports <br/>
> 4 — Cyclical Dependencies

### 1. Name exports

you can export variable, object or function.

Named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object.

Suppose I have a file named **lib.js** and there some js variable

```javascript
//------ lib.js ------
export var str1 = 'string 1'
export var str2 = 'string 2'
```

In my **main.js**

```javascript
//------ lib.js ------
import { str1, str2 } from './lib'
console.log(str2) // Output:  string 1
console.log(str2) // Output:  string 2
```

I can also export like this,

```javascript
var str1 = 'string 1'
var str2 = 'string 2'
var str2 = 'string 3'
export { str1, str2, str3 }
```

then import,

```javascript
import { str1, str2, str3 } from './lib'
console.log(str1) // Output:  string 1
console.log(str2) // Output:  string 1
console.log(str3) // Output:  string 1
```

With import object from another file(s) I could give an alias

```javascript
import { str1 as StringOne, str2, str3 } from './lib'
console.log(StringOne) // Output:  string 1
```

Not only variable, but you can also export any function, class or variable or anything

```javascript
//------ lib.js ------
function squire(n) {
    return n * n
}
var myInfo = {
    name: 'King Rayhan',
    age: 21,
}
export { squire, myInfo }
//------ main.js ------
import { squire, myInfo } from './lib'
console.log(squire(3)) // output: 9
console.log('Name: ' + myInfo.name) // output: Name : King Rayhan
console.log('Age: ' + myInfo.age) // output: Age: 21
```

### 2. Default exports

One module can have only one default export. As shown previous examples we can export one function or variable or object or anything, but only one.

```javascript
//------ myFunc.js ------
export default function () { //... };

//------ main1.js ------
import myFunc from 'myFunc';
myFunc();
```

Here are some example,

```javascript
export default var info = {
 name: 'Rayhan',
 age: 21
};
// --- or
var info = {
 name: 'Rayhan',
 age: 21
};
```

export default info;
Now, I can import that default export to your main file,

```javascript
import info from './lib'
console.log(info.name) // Rayhan
```

It is not mandatory to use the same name of the corresponding object, you can name it anything you want.

```javascript
//------------- lib.js
export default var info = {
    name: 'Rayhan',
    age: 21
};

// ------------- main.js
import MyInformation from './lib'
console.log(MyInformation.name); // Rayhan
console.log(MyInformation.age); // 21
```

### 3. Mixed named & default exports

we can export normal object and default object at a time

```javascript
// ---------- lib.js
var info = {
    name: 'Rayhan',
    age: 21,
}
var fullName = 'King Rayhan'
export default fullName
export { info }
// ----------- main.js
import name, { info } from './lib'
console.log(name) // King Rayhan
console.log(info.age) // 21
```

As mentioned before, we can call the default object by any name but the non-default object must be the exact name.

```javascript
Import Syntax
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
Export Syntax
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var, function
export let name1 = …, name2 = …, …, nameN; // also var, const

export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
```
