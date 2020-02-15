---
title: A list of helpful docker commands
date: "2018-09-12T22:12:03.284Z"
tags: "docker devops"
description: "A quick reference of docker commands for running containers and creating images"
---

[Play With Docker](https://play-with-docker.com)

[Install and Run Docker](https://docs.docker.com/docker-for-mac/install/)

> If error from docker daemon (Server) while starting then run 
> `usermod -aG docker <user>` - On Linux adds to local docker Unix group.
> Once added will need to sign out of shell then back in

Test docker is running
```console
$ docker version
```
> Should see a response from both `Client:` and `Server:`

View docker images
```console
$ docker image ls
```

Run a filter i.e. show only images tagged as latest  
```console
$ docker image ls --filter=reference="*:latest"
```

Search for images on Docker Hub
```console
$ docker search alpine
```

Filter for official images
```console
$ docker search alpine --filter "is-official=true"
```

Inspect a docker image
```console
$ docker image inspect ubuntu:latest
```

Remove a docker image
```console
$ docker image rm alpine:latest
```

Delete all docker images
```console
$ docker image rm $(docker image ls -q) -f
```

Pull a docker image
```console
$ docker image pull ubuntu:latest
```

Pull unofficial images
```console
$ docker image pull <username>/<image>:<tag>
```

Pull from a registery other than Docker Hub
> i.e. Google Container Registry (GCR - gcr.io)
```console
$ docker image pull gcr.io/USERNAME/image:latest
```

Spin up a quick container
```console
$ docker container run -it ubuntu:latest /bin/bash
``` 
```console
$ docker container run --name ctrl -it alpine:latest sh
```
> The `-it` flag attaches current shell to terminal of the container.
> To exit this container without terminating it - press `Ctrl-PQ`

View docker containers
```console
$ docker container ls
```

Connect to a docker container
```console
$ docker container exec -it CONTAINER <name>|<id> bash
```

Stop a docker container
```console
$ docker container stop CONTAINER <name>|<id>
```

Remove a docker container
```console
$ docker container rm CONTAINER <name>|<id>
```

Remove all docker containers
```console
$ docker container rm $(docker container ls -aq) -f
```

Docker container restart policies
  * always
  * unless-stopped
  * on-failed

```console
$ docker container run --name <name> -it --restart always
```
> Note:
> --restart always vs. --restart unless-stopped.
> unless-stopped will not restart when the daemon restarts if they
> were initially stopped. --restart always will.

Run docker container as a background process
```console
$ docker container run -d --name <name> -p 80:8080\ <repo-name>|<image>
```
> -d stands for daemon mode and 
> -p sets ports as host:container. localhost:80 is mapped to 8080 inside the container

Simple Dockerfile for basic Node.js app
```console
FROM alpine
RUN apk add --update nodejs nodejs-npm
COPY . /src
WORKDIR /src
RUN npm install
EXPOSE 8080
ENTRYPOINT ["node", "./app.js"]
```

Build a docker image from a Dockerfile
```console
$ docker image build -t test:latest
```

Run a docker container from a docker image
```console
$ docker container run -d --name web1 --publish 8080:8080 test:latest
```

No Space left on device
```console
$ rm -rf  ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/Docker.qcow2
```