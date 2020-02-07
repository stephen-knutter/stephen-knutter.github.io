---
layout: post
title: "NestJS GraphQL File Upload"
date: 07 Feb, 2020 16:20:00
tags: javascript typescript nodejs
---

Usage of `graphql-upload`

[GraphQL File Upload Spec](https://github.com/jaydenseric/graphql-multipart-request-spec)

Setup a NestJS app with the CLI:

[NestJS Scaffold](https://docs.nestjs.com/first-steps)

Configure GraphQL:

[NestJS GraphQL](https://docs.nestjs.com/graphql/quick-start)

Create a Resolver for the upload
```typescript
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';

@Resolver()
export class FileResolver {

    constructor() {}

    @Mutation(() => Boolean)
    async uploadFile(@Args({name: 'file', type: () => GraphQLUpload})
    {
        createReadStream,
        filename
    }: FileUpload): Promise<boolean> {
        return new Promise(async (resolve, reject) => 
            createReadStream()
                .pipe(createWriteStream(`./uploads/${filename}`))
                .on('finish', () => resolve(true))
                .on('error', () => reject(false))
        );
    }

}
```

`NestJS` has a wrapper around [Apollo 2](https://www.apollographql.com/docs/apollo-server/) server

`graphql-upload` along with the `Upload` scalar come with Apollo 2

Test this in [Postman](https://www.postman.com/downloads/)

Select `Post`

Enter the url to your Graph server i.e. `http://localhost:5000/graphql`

Select `form-data` and the `Body` tab

Fill out the `Body` tab as follows

| Key           | Value         |
| ------------- |:-------------:|
| operations    | {"query":"mutation UploadPic($file:Upload!) {\n  uploadFile(file:$file)\n}", "variables": { "file": null }} |
| map           |  { "0": ["variables.pic"] } |
| 0             |    Choose File   |

Click `Send`

Successful response
```json
{
    "data": {
        "uploadFile": true
    }
}
```