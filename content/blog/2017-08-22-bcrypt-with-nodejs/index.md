---
title: Salt and Hash Passwords with Bcrypt
date: "2017-08-22T22:12:03.284Z"
tags: "bcrypt nodejs security javascript"
description: "Using Bcrypt with nodejs to salt and hash passwords"
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
