---
title: Geolocation with nextjs and zeit now serverless functions
date: "2020-02-17T22:12:03.284Z"
tags: "javascript typescript nodejs zeit now"
geo: "39.7067 -104.9694"
description: "Detect a user's geolocation on serverless functions with zeit now and next.js. By gaining the ip address from the node.js request object, this address can be used with the geoip-lite npm package to map an ip address to a specific set of coordinates"
---

[Next.js Docs](https://nextjs.org/docs/getting-started)

List of `next.js` starter projects:

[Next.js examples](https://github.com/zeit/next.js/tree/canary/examples)

Use the api-routes starter project:
```bash
npx create-next-app --example api-routes
```

Inside `Pages` directory, delete `person.js` file

Inside `Pages/api` directory, delete `people` folder

Install IP and GeoIp packages
```
yarn add request-ip geoip-lite
```

Inside `Pages/api` create a folder called `geo` and inside `geo` create a file called `index.js`

```javascript
// Pages/api/geo/index.js

const requestIp = require('request-ip');
const geoip = require('geoip-lite');

export default (req, res) => {

    const clientIp = requestIp.getClientIp(req)
        .replace('::1', '')
        .replace('127.0.0.1', '') || '72.1.69.153' // <-- default location `KY`
    const geo = geoip.lookup(clientIp)
    res.status(200).json({ geo })

}
```

Inside `Pages/index.js` display the geo information

Add one additional package
```
yarn add swr
```

Then add the following code

```javascript
// Pages/index.js

import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'

async function fetcher(path) {

  const res = await fetch(path)
  const json = await res.json()
  return json

}

const Index = () => {

  const { data, error } = useSWR('/api/geo', fetcher)

  if (error) return <div>Error! Failed to find geolocation</div>
  
  const { geo } = data

  return (
      <ul>
        {
            Object.keys(geo).map((key, i) => {

                return <li key={i}><strong>{key}: </strong>{geo[key]}</li>

            })
        }
      </ul>
  )

}

export default Index

```

Run
```
yarn dev
```

Example output from `localhost:3000` with the default Kentucky based ip -> `72.1.69.153`:

**range:** 12080427521208043007   
**country:** US    
**region:** KY  
**eu:** 0  
**timezone:** America/Kentucky/Louisville  
**city:** Louisville    
**ll:** 38.269-85.4934  
**metro:** 529  
**area:** 500  

To see this in action, deploy this to the [zeit now platform](https://zeit.co/solutions/nextjs)

Once signed up, deploy is as easy as running the following
```bash
npx now
```

This will run `yarn build` and deploy the output from the `.next` folder

Once the project is deployed a success message will appear in the terminal ✅

Go to the zeit dashboard and find the deployment url, it will be in the format of `https://<project-name>-<uid>.now.sh`

go to the deployment url to see actual geolocation

This is from a request made from my location in south Denver

**range:** 11347292161134730239  
**country:** US  
**region:** CO  
**eu:** 0  
**timezone:** America/Denver  
**city:** Denver  
**ll:** 39.7067-104.9694  
**metro:** 751  
**area:** 10  
