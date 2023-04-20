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

### 03-38 Understanding TypeScript Core Libs
When uncommented it defaults to a few options
We can specify what libs we want to use
`"lib": [],`
And if we give it these libs, it is similar to default (uncommented):
`"lib": ["ES2016", "DOM", "DOM.Iterable", "ScriptHost"],`

### 03-39 More Configuration & Compilation Options
`"allowJs":`
you can include JavaScript files in the Compilation, it will be compiled by TypeScript even if it doesn't end in .ts
`"checkJs":`
it will not compile it but it will still check the Syntax and report potential Errors
this could be nice if you don't want to use TypeScript but want to take advantage of some of it's features
(!) you need to be careful to not DOUBLE COMPILE (where you are compiling a .ts to a .js and then it tries to compile the .js again)

`"jsx":` is an option to help with React

`"declaration":`
`"declarationMap":`
.d.ts are an advanced concept that matter if you are shipping your project as a library to other people and you need a manifest file that describes all the types you have in your project

### 03-40 Working with Source Maps
Source map helps us with Debugging and Development
What if we want to Debug our TypeScript code and not our Compiled JavaScript code?
If we could see our TypeScript files in the browser (under Sources)
With the `"sourceMap": true,` we get `.js.map` files being generated.
They act as a bridge which is understood by Modern Browsers and Developer Tools there
To connect the .js files to the .ts files
And so it simplifies Debugging because you can directly see the .ts files in the browser
![](/images/03-40-example.png)

### 03-41 rootDir and outDir

Typically you will have a `/src` folder that holds all the source code `.ts` files
And a `/dist` folder that holds all the output the compiles `.js` files
`rootDir` is where your source code should be
`outDir` is where your compiled code should be

`"rootDir": "./src",`
`"outDir": "./dist",`
(!) Subfolders and structure are also copied between the two

`"removeComments": true,`
this removes any comments in the `.ts` files so they don't exist in the compiled `.js` files

`"noEmit": true,`
this stops TypeScript from generating `.js` files altogether
if you just want to check if your files are correct, but don't want to write all the output files
you can set it to true to just have the TypeScript compiler check your files for any errors without actually creating the output file

`"downlevelIteration": true,`
this is an advanced option, for niche cases, where older versions of JavaScript and loops which don't work there
it will output more verbose codeobs

### 03-42 Emitting Files on Compilation Errors
the default is false
`"noEmitOnError": true,`
this controls if you generate javascript files if you have an error
if you set it to true then problematic files will not be generated
if any file fails to compile no files will be "emitted"
so you have to make sure you fix the error before TypeScript will compile files

### 03-43 Strict Compilation
`"strict": true,`
enables ALL the strict options, setting it to true is the same as setting all the others to true
`"noImplicitAny": true,`
It ensures that we have to be clear about the types of values in our code
TypeScript cannnot infer types sometimes
`"strictNullChecks": false`
They tell TypeScript to be pretty strict regarding working with values that potentially may hold a "null" value (such as a querySelector on an element that might not exist in the HTML)
`"strictFunctionTypes": true,`
This will fix niche bugs that you might not have in many applications, its related to Function Types you are setting up (in relation to Classes and Inheritance)
`"strictBindCallApply": true,`
That can be helpful if you work with .bind() .call() or .apply() and makes sure you are using in a way that works with your code.
It checks on which function you are calling the above 3 methods on, and it checks if what you are setting up here makes sense.
`"alwaysStrict": true,`
makes sure the compiled JavaScript files are using "use strict"

### 03-44 Code Quality Options
`"noUnusedLocals": true,`                           
Enable error reporting when local variables aren't read.
`"noUnusedParameters": true,`
Raise an error when a function parameter isn't read.
`"exactOptionalPropertyTypes": true,`
Interpret optional property types as written, rather than adding 'undefined'.
`"noImplicitReturns": true,`
Enable error reporting for codepaths that do not explicitly return in a function.
`"noFallthroughCasesInSwitch": true,`
Enable error reporting for fallthrough cases in switch statements.