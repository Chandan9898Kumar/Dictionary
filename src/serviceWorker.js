// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives

// it offline capabilities. However, it also means that developers (and users)

// will only see deployed updates on the "N+1" visit to a page, since previously

// cached resources are updated in the background.

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.

    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.

    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

export default function register(config) {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener("load", () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log("This web app is being served cache-first by a service " + "worker. To learn more, visit https://cra.link/PWA");
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              console.log("New content is available and will be used when all " + "tabs for this page are closed. See https://cra.link/PWA.");

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log("Content is cached for offline use.");

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error("Error during service worker registration:", error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: { "Service-Worker": "script" },
  })
    .then((response) => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get("content-type");
      if (response.status === 404 || (contentType != null && contentType.indexOf("javascript") === -1)) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log("No internet connection found. App is running in offline mode.");
    });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
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
