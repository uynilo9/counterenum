# counterenum

![language][ts]
![ide][vscode]

[ts]: https://img.shields.io/badge/made%20with-typescript-2f72bc?logo=typescript&logoColor=2f72bc&labelColor=202020&color=2f72bc&style=for-the-badge
[vscode]: https://img.shields.io/badge/develop%20with-vscode-3991cb?logo=visualstudiocode&logoColor=3991cb&labelColor=202020&color=3991cb&style=for-the-badge


## 💡 Introduction

Map enum values to their keys in TypeScript.

## 📦 Installation

📥 Install ```counterenum```⚡ package:

```powershell
npm install counterenum  # Using npm
yarn add counterenum     # Using yarn
pnpm add counterenum     # Using pnpm
```

🗑️ Uninstall ```counterenum```⚡ package:

```powershell
npm uninstall counterenum  # Using npm
yarn remove counterenum    # Using yarn
pnpm remove counterenum    # Using pnpm
```

## 📜 Usage

🚀 An example of ```counterenum```⚡ package:

```ts
import counterenum from 'counterenum';

enum Fruit {
  Apple = 'apple',
  Banana = 'banana',
  Orange = 'orange'
};

console.log(counterenum(Fruit)['apple']);  // Output: "Apple"
console.log(counterenum(Fruit)['banana']); // Output: "Banana"
console.log(counterenum(Fruit)['orange']); // Output: "Orange"
```

## ⚖ License

<p>
MIT License

Copyright (c) 2023 uynilo9

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</p>
