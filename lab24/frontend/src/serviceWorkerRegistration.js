const register = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        const registration =
          await navigator.serviceWorker.register("/service-worker.js");

        console.log("Service Worker Registered");
        console.log(registration);
      } catch (error) {
        console.log("Service Worker Registration Failed");
        console.log(error);
      }
    });
  }
};

export default register;
