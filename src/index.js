import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import reportWebVitals from "./reportWebVitals";
// Import the service worker file


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Register the service worker (with optional delay)
// serviceWorkerRegistration.register({
//   onUpdate: (registration) => {
//     const confirmationMessage = 
//         `New update is available. Click OK to reload.`;
//     if (confirm(confirmationMessage)) {
//       registration.waiting.postMessage({ type: 'SKIP_WAITING' });
//     }
//   },
// });


// If you want to register the service
// worker only in production (optional)
// if (process.env.NODE_ENV === 'production') {
//   serviceWorkerRegistration.register();
// }
