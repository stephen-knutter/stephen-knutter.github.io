---
layout: post
title: "Install Mongodb on a Mac"
date: Jan 26, 2019 16:20:00
tags: mongodb database
---

[Find and Download Mongodb](https://www.google.com/search?source=hp&ei=l6RMXMrSKsnOjwT7xZ2IDw&q=download+mongodb&btnK=Google+Search&oq=download&gs_l=psy-ab.3.0.0i131i67j0i67j0i131i67j0i67l2j0i131i67j0i67l2j0i20i263j0i131.2030.4557..5384...2.0..0.198.1117.6j4....2..0....1..gws-wiz.....6..35i39j0i131i10j0i10.j-l6x6AtKDY)

extract the tar file from the download
```console
tar xvf mongodb-osx-x86_64-3.0.0.tgz
```

enter bin
```console
cd mongodb-osx-x86_64-3.0.0
cd bin
```

enter bash with privileges
```console
sudo bash
```

create mongodb data store and set permissions
```console
mkdir -p /data/db
chmod 777 /data
chmod 777 /data/db
```
confirm directories set with correct permissions
```console
ls -ld /data/db
```

set PATH
```console
cp * /usr/local/bin
exit
```

Verify mongo is in PATH
```console
which mongod
which mongo
```

Start mongodb
```console
mongod
```

Start mongodb shell
```console
mongo
```

