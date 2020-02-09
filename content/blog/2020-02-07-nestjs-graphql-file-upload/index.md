---
title: NestJS GraphQL File Upload
date: "2020-02-07T22:12:03.284Z"
tags: "javascript typescript nodejs"
description: "File uploads with Nestjs and GraphQL. Nestjs provides a wrapper around Apollo 2 Server which comes included with the Upload scalar and the GraphQLUpload type"
---

Usage of `graphql-upload`

[GraphQL File Upload Spec](https://github.com/jaydenseric/graphql-multipart-request-spec)

Setup a NestJS app with the CLI:

[NestJS Scaffold](https://docs.nestjs.com/first-steps)

Configure GraphQL:

[NestJS GraphQL](https://docs.nestjs.com/graphql/quick-start)

In the root of the app, outside the `src` directory, create a directory named `uploads` to write the uploaded file

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

> `NestJS` has a wrapper around [Apollo 2](https://www.apollographql.com/docs/apollo-server/) server.
> `graphql-upload` along with the `Upload` scalar come with Apollo version 2

#### Test this in [Postman](https://www.postman.com/downloads/)

1. Select `POST` from the dropdown

2. Enter url to Graph server i.e. `http://localhost:5000/graphql`

3. Select `form-data` and the `Body` tab

4. Fill out the `Body` tab as follows

| Key           | Value         |
| ------------- |-------------|
| operations    | {"query":"mutation UploadFile($file:Upload!) {\n  uploadFile(file:$file)\n}", "variables": { "file": null }} |
| map           |  { "0": ["variables.file"] } |
| 0             |    [File &#9662;] (select your file to upload)   |

5. Once the body is filled out click `Send`

Successful response
```json
{
    "data": {
        "uploadFile": true
    }
}
```

File should now be in the `/uploads` folder in the app root