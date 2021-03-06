---
title: Access Deeply Nested Array of Subdocuments in Mongodb
date: "2018-11-23T22:12:03.284Z"
tags: "mongodb database"
description: "Access a deeply nested array of subdocuments in mongodb utilizing the aggregation pipeline"
---

Example mongodb document
```javascript
    {
        _id: ObjectID("4b1bb6ff3abc8266a21890co")
        listing: {
            name: "foo"
            address: "ham street"
        },
        categories: [
            {
                title: "bar"
                items: [
                    {
                        name: "eggs"
                    }
                ]
            },
            {
                title: "baz"
                items: [
                    {
                        name: "french toast"
                    }
                ]
            }
        ]
    }
```

Use mongodb [aggregation](https://docs.mongodb.com/manual/core/aggregation-pipeline/index.html) to access categories -> items -> name and return the embedded document

assuming our database has a collection named `listings` and looking for item names that have the word `french`
```javascript
db.listings.aggregate([
    
    /* Make $match & $sort first in aggregation pipelines to take advantage of indexes */
    { $match: {"categories.items.name": {$regex: "french", $options: "i"}}},
    { $unwind: "$categories" },
    { $unwind: "$categories.items" },
    { $limit: 5 },
    { $project: {_id: 0, item: { name: "$categories.items.name"}}}

])
```
[$unwind](https://docs.mongodb.com/manual/reference/operator/aggregation/unwind/) both arrays `categories` and `items` which essentialy creates new documents.

From there, [$project](https://docs.mongodb.com/manual/reference/operator/aggregation/project/) any property of the document.
```javascript
{
    item: {
        name: "french toast"
    }
}
```