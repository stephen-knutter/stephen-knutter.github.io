---
layout: post
title: "Access deeply nested array of subdocuments in mongodb"
date: Nov 23, 2018 16:20:00
tags: mongodb database
---

Example mongodb document
```
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

assuming our database is named `listings` and looking for item names that have the word `french`
{{ "{% highlight javascript " }}%}  
    db.listings.aggregate([
        // Make $match & $sort first in aggregation pipelines
        // to take advantage of indexes
        { $match: {"categories.items.name": {$regex: "french", $options: "i"}}},
        { $unwind: "$categories" },
        { $unwind: "$categories.items" },
        { $limit: 5 },
        { $project: {_id: 0, item: { name: "$categories.items.name"}}}
    ])
{{ "{% endhighlight " }}%}
[$unwind](https://docs.mongodb.com/manual/reference/operator/aggregation/unwind/) both arrays `categories` and `items` which essentialy creates new documents.

From there, [$project](https://docs.mongodb.com/manual/reference/operator/aggregation/project/) any property of the document.
```
{
    item: {
        name: "french toast"
    }
}
```