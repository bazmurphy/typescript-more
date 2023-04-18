install typescript locally
`npm init -y`
`npm install typescript -D`  
`npx tsc --init`  
`npx tsc --watch`  

`!` this value will never be null  

`as ~type~`  
`as HTMLInputElement`  

example:  
`const input1 = document.getElementById("num1")! as HTMLInputElement;`  


#### 02-12
The key difference is : JavaScript uses "dynamic types" (resolved at runtime), TypeScript uses "static types" (set during development).

#### 02-13
In TypeScript, you work with types like string or number all the time.
Important: It is string and number (etc.), NOT String, Number etc.
The core primitive types in TypeScript are all lowercase!
