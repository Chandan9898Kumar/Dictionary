//STORAGE OF BROWSER
const CACHE_NAME = "version-1";
const urlsToCache = ["/assets/pages/offline-page.html", "/assets/styles/offline-page.css", "/assets/script/offline-page.js"];
const self = this;

//installation
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log(`Service Worker: Caching Files: ${cache}`);
      cache
        .addAll(urlsToCache)
        // When everything is set
        .then(() => self.skipWaiting());

      // console.log("Opened cache");
      // return cache.addAll(urlsToCache);
    })
  );
});

// activate the service worker
self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated");
  // Clean up old caches by looping through all of the
  // caches and deleting any old caches or caches that
  // are not defined in the list
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// listen for request
self.addEventListener("fetch", (e) => {
  console.log("Service Worker: Fetching");
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // The response is a stream and in order the browser
        // to consume the response and in the same time the
        // cache consuming the response it needs to be
        // cloned in order to have two streams.
        const resClone = res.clone();
        // Open cache
        caches.open(CACHE_NAME).then((cache) => {
          // Add response to cache
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});

/**
                   What is Service Worker:
1. A service worker is a script that runs independently in the browser background. On the user side, it can intercept its network requests and decide what to load (fetch).

2. Service workers mainly serve features like background sync, push notifications and they are commonly used for’offline first’
applications, giving the developers the opportunity to take complete control over the user experience.

3. Before it’s time there has been API called AppCache, which has been trying to serve the offline experience feature.
However, there have been numerous problems in the interface of the AppCache API and Service Workers are here, going over them.


                The service worker life cycle:
1. The service worker lifecycle is completely separate from the web page. It’s a programmable network proxy, which is terminated when it’s not used
and restarted when it’s next needed. Service Workers heavily rely on the use of Javascript Promises , so it’s good to go over them if they are new to you.

2. During installation, the service worker can cache some static assets like web pages. If the browser cache the files successfully, the service worker gets installed.

3. Afterward, the worker needs to be activated. During activation the service worker can manage and decide what to happen to the old caches, 
typically they are being deleted and replaced with the new versions.

4. Lastly, after activation, the service worker takes control over all pages in his scope, without the page which initially registered the service worker, 
which needs to be refreshed. The service worker is smart in terms of memory usage and will be terminated if there is nothing to fetch and there are no message events occurring.



Prerequisites :

1. HTTPS unless on localhost
> Service workers require the use of HTTPS connection. Before deployment, the workers does work under the localhost server but if you want to upload it to the internet.
you need to have the HTTPS setup on your server. One good place to host free demos are the GitHub Pages, which are server over HTTPS.

2. Browser support
Service Workers are highly supported over the internet by Chrome, Firefox, Opera, Safari and Edge, which makes them worthy for deployment.
 */

/**
 * Service worker is a piece of javascript code that runs on browser on the separate thread than the main thread. It does not block the main thread and acts as a proxy server. It only works on HTTPS (and not on HTTP). It can not access DOM.

We already know that javascript is synchronous single threaded language. Now server worker runs on the separate thread where it sits between the web application, browser and network.

Check if service worker is supported in your browser first --> go to inspect--> console --> navigator.serviceWorker .....It will give you object of service worker.

if(navigator.serviceWorker) is present we need to register service worker.

navigator.serviceWorker.register("./sw.js"). Check the photo attached.
Register API returns a promise.

After registering we can go to applications in the browser and service worker to check if its registered.

Service workers are event driven. It goes through the lifecycle like first it installs then its activates, fetch and many more such events. All the lifecycle code we will write in sw.js through which we have registered the service worker.

Now we wanted to create an offline experience. So we will store all the files in the cache storage. We will store all files in cache so we will not have to make the network request.

While installing event is going on, we will store all the files in cache storage. Now in the cache storage we will be able to see all the cache files. (Check photo attached). Now we have added into cache.

Let's write the logic for when user is offline fetch from cache. Now we will write about the event of fetch.

Offline experience
Whenever a file is requested
1.fetch from network , update the cache 
2. if user is offline use cache as fallback
 */
