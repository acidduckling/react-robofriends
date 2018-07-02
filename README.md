# Simple React App

## Converting to TypeScript
In order to convert an existing React App to TypeScript (one thats been created with create-react-app), follow these steps:

1. Remove react-scripts package:
```bash
yarn remove react-scripts
```
2. Add react-scripts-ts package:
```bash
yarn add react-scripts-ts
```
3. Add the following @types and dev package dependencies:
```bash
yarn add -D typescript @types/jest @types/react @types/react-dom @types/react-redux
```
4. Update the package.json scripts to use **react-scripts-ts** instead of **react-scripts**
```json
"scripts": {
    "start": "react-scripts-ts start",
    "build": "react-scripts-ts build",
    "test": "react-scripts-ts test --env=jsdom",
    "eject": "react-scripts-ts eject",
  }
```
5. Initialise TypeScript for the project
```bash
tsc --init
```
6. Add the following config options to the newly created tsconfig.json file (note most of this can come from the existing jsconfig.json file:
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "allowSyntheticDefaultImports": true,
    "baseUrl": "./src/",
    "allowJs": true,
    "sourceMap": true,
    "strictNullChecks": true,
    "paths": {
      "*": ["*"]
    },
    "jsx": "react"
  },
  "include": [
    "./src/"
  ]
}
```
7. Create a new tslint.json file (ensure you have tslint installed globally first)
```bash
yarn global add tslint
tslint --init
```
8. To begin with, comment out the **extends** node of the tslint.json file - this is so we can just get things working first
9. Rename the **index.js** entry file to **index.tsx**
10. In the newly renamed index.tsx file, change the react imports. This needs to be done on each file gradually as they are converted to tsx files:
```javascript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
```

Now just proceed to convert the files step by step to .tsx files, creating interfaces and using TypeScript syntax.