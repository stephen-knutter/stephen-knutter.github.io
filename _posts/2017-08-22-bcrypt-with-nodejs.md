---
layout: post
title: "Using bcrypt with node.js to salt and hash passwords"
date: 22 Aug, 2017 16:20:00
tags: bcrypt nodejs security
---

install bcrypt
```console
$ npm i -S bcrypt
```
generate salt and hash
```javascript
  const bcrypt = require('bcrypt');

  let _hash;
  
  /*  10 is for rounds */
  bcrypt.genSalt(10, (err, salt) => {

    console.log('salt: ', salt);

   /* Using salt and password 'foobar' to generate hash */
    bcrypt.hash('foobar', salt, (err, hash) => {

      console.log('hash: ', hash);  
      _hash = hash;

    });
  });

  /* This is used to compare a given password to the stored hash */
  bcrypt.compare('foobar', _hash, (err, isMatch) => {

    console.log('is a match: ', isMatch);

  });
```
