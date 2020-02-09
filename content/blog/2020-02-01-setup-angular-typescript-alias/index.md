---
title: TypeScript Import Aliases in Angular
date: "2020-02-01T22:12:03.284Z"
tags: "javascript typescript angular"
description: "How to setup import aliases in Angular utilizing TypeScript configuration options"
---

[TypeScript Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)

[Install Angular CLI](https://cli.angular.io/)

Generate a new Angular App with the CLI
```console
$ ng new angular-app
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
// angular-app/tsconfig.json
{
  "compileOnSave": false,
  "compilerOptions": {
    "...Omitted Properties...": "...",

    "baseUrl": "./src",
    "paths": {
      "@app/*": ["app/*"],
      "@env/*": ["environments/*"]
    }
  }
}
```

And that's it, now you can import via:

`import { Whatever } from '@app/whatever/file'`

> NOTE: May need to close and re-open code editor, as well as start and re-start app
> if already running