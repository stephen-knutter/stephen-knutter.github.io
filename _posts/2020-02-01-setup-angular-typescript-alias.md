---
layout: post
title: "How to Setup TypeScript Import Aliases in Angular"
date: Feb 01, 2020 16:20:00
tags: javascript typescript angular
---

[TypeScript Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
[Install Angular CLI](https://cli.angular.io/)

Generate a new Angular App with the CLI
```console
$ ng g new angular-app
$ cd angular-app
```

In the root will be a `tsconfig.json` file
Go into the source file
```console
$ cd src
```
Inside the source directory is a `tsconfig.app.json` file which extends `tsconfig.json`
This file is responsible for setting the `baseUrl` property inside `compilerOptions`

In order to setup import aliases add the `baseUrl` property inside the root `tsconfig.json` file
```console
$ cd ..
```

```json
/* tsconfig.json */
{
  "compileOnSave": false,
  "compilerOptions": {
    Omitted Props,

    "baseUrl": "./src",
    "paths": {
      "@app/*": ["app/*"],
      "@env/*": ["environments/*"],
    }
  }
}
```

And that's it now you can import via `@app/whatever/file/you/need`

NOTE: May need to close and re-open code editor, as well as start and re-start app
if already running