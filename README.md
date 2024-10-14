# Laundry in London

This project is for Sharma.

### ✨ How to deploy this project on cPanel efficiently?
```
https://wedolaundry.uk/_next/image?url=%2Ffavicon.ico&w=384&q=75
```

### ✨ Server.js
```
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 80

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      if (pathname === '/a') {
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
```
Change package.json
```
{
   "scripts": {
      "start": "NODE_ENV=production node server.js"
   }
}
```

### 🙌 Adding the follow code for customizing scrollbar (src/styles/index.css)
```
<style>
  ::-webkit-scrollbar {
    height: 12px;
    width: 3px;
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: rgba(128,128,128,0.7);
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 2px transparent;
}

::-webkit-scrollbar-corner {
    background: rgba(128,128,128,0.5);
}
</style>
```
### 🙌 Production Environment
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyC-NyZbxHv2o8wQMF5lzNqH7pevCakZbuo
NEXT_PUBLIC_BACKEND_AUTH_API=https://api.welovelaundry.uk/api/auth/
NEXT_PUBLIC_BACKEND_TEST_API=https://api.welovelaundry.uk/api/test/
NEXT_PUBLIC_BACKEND_ORDER_API=https://api.welovelaundry.uk/api/order/
```

### [🔥 Get Startup Pro](https://nextjstemplates.com/templates/saas-starter-startup)

[![Startup Pro](https://raw.githubusercontent.com/NextJSTemplates/startup-nextjs/main/startup-pro.webp)](https://nextjstemplates.com/templates/saas-starter-startup)

Startup Pro - Expertly crafted for fully-functional, high-performing SaaS startup websites. Comes with with Authentication, Database, Blog, and all the essential integrations necessary for SaaS business sites.


### [🚀 View Free Demo](https://startup.nextjstemplates.com/)

### [🚀 View Pro Demo](https://startup-pro.nextjstemplates.com/)

### [📦 Download](https://nextjstemplates.com/templates/startup)

### [🔥 Get Pro](https://nextjstemplates.com/templates/saas-starter-startup)

### [🔌 Documentation](https://nextjstemplates.com/docs)


### 📄 License


### 💜 Support


### ✨ Explore and Download - Free [Next.js Templates](https://nextjstemplates.com)
