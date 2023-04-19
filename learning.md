## TypeScript

### 01-04 Installing & Using TypeScript
initialise npm project  
`npm init -y`  
install typescript as dev dependency  
`npm install typescript -D`  
generate the tsconfig.json  
`npx tsc --init`  
run the compiler in watch mode  
`npx tsc --watch` 

---

`!` this value will never be null  

`as ~type~`  
`as HTMLInputElement`  

example:  
`const input1 = document.getElementById("num1")! as HTMLInputElement;`

---

### 01-09 Project Setup
.

### 02-11 Using Types
.

### 02-12 TypeScript Types vs JavaScript Types
The key difference is : JavaScript uses "dynamic types" (resolved at runtime), TypeScript uses "static types" (set during development).

### 02-13
In TypeScript, you work with types like string or number all the time.
Important: It is string and number (etc.), NOT String, Number etc.
The core primitive types in TypeScript are all lowercase!

### 02-14 Working with Numbers, Strings & Booleans
.

### 02-15 Type Assignment & Type Inference
TypeScript has a built in feature called Type Inference
It means that TypeScript does its best to understand which type of variable you have in a variable.

### 02-16 Object Types
.

### 02-17 Nested Objects & Types
Of course object types can also be created for nested objects.

Let's say you have this JavaScript object:
```
    const product = {
      id: 'abc1',
      price: 12.99,
      tags: ['great-offer', 'hot-and-new'],
      details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
      }
    }
```
This would be the type of such an object:
```
    {
      id: string;
      price: number;
      tags: string[];
      details: {
        title: string;
        description: string;
      }
    }
```
So you have an object type in an object type so to say.

### 02-18 Array Types
.

### 02-19 Working with Tuples
.

### 02-20 Working with Enums
.

### 02-21 The "any" Type
.

### 02-22 Union Types
.

### 02-23 Literal Types
.

### 02-24 Type Aliases
.

### 02-25 Type Alises & Object Types
.

### 02-26 Function Return Types & "void"
.

### 02-27 Functions as Types
.

### 02-28 Function Types & Callbacks
.

### 02-29 The "unknown" Type
.

### 02-30 The "never" Type
.

---
## The TypeScript Compiler (and its Configuration)

### 03-36 Including & Excluding Files
We can specifically tell TypeScript which files we want to EXCLUDE from the Compilation process:
In `tsconfig.json` at the bottom:
``` 
"exclude": [
  "otherfile1.ts", "otherfile2.ts",  // you can use wildcards
  "*.dev.ts", // any file with that pattern in any folder will be ignored
  "**/*.dev.ts", 
  "node_modules" // but the most common setting is excluding node_modules
]
```
but node_modules is excluded as a DEFAULT setting
but if you add an "exclude" option then you NEED TO ADD node_modules ALSO.


We can specifically tell TypeScript which files we want to INCLUDE in the Compilation process:
In `tsconfig.json` at the bottom:
```
"include": [
  // if we set the include key we have to INCLUDE EVERYTHING we want to COMPILE
  "app.ts"
]
```
(!) We MUST include EVERYTHING we want to Compile here

(!) If we add some subfolder to EXCLUDE, then that will be FILTERED even if it part of INCLUDE.

We COMPILE INCLUDE minus EXCLUDE

We can also use "files" where you only specify which files you want to compile, it does not deal with FOLDERS
This is an option for smaller projects
"files": [
  "app.ts"
]

### 03-37 Setting a Compilation Target
`"compilerOptions": {`
allows us to control HOW our Code is COMPILED

`"target":`
Which version of JavaScript you want to use to Compile the Code
current default:
`"target": "es2016",`
can choose for example:
`"target": "es2022",`