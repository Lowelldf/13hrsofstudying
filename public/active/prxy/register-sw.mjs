export async function registerSW() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register(new URL("sw.js", import.meta.url), {
        scope: "/public/active/",
      });
      console.log("Service Worker registered successfully");
    } catch (error) {
      console.error("Service Worker registration failed:", error);
      throw error;
    }
  } else {
    console.error("Service Workers are not supported in this browser");
    throw new Error("Service Workers not supported");
  }
}
