---
layout: post
title: "Using bcrypt with node.js to salt and hash passwords"
date: 2017-08-22
---
`brew install node`
`mkdir bcrypt_intro && cd bcrypt_intro`
`touch app.js package.json`
`npm install bcrypt`

{% highlight js %}
  const bcrypt = require('bcrypt');
  
  /*  10 is for rounds */
  bcrypt.genSalt(10, (err, salt) => {

    console.log('salt: ', salt);

   /* Using salt and password 'foobar' to generate hash */
    bcrypt.hash('foobar', salt, (err, hash) => {
      console.log('hash: ', hash);  
    });
  });

  /* This is used to compare a given password('foobar') to the stored hash */
  bcrypt.compare('foobar', '$2a$10$XRDCUm0LmHmlo8Iv3jxWHeG1Hg1Tv5/B6NUK8zIRLOXZHJcLLtazm', (err, isMatch) => {
    console.log('is a match: ', isMatch);
  });
{% endhighlight %}
