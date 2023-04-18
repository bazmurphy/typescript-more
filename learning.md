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