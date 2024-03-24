import path from "path";
import { app, ipcMain, BrowserWindow } from "electron";
import serve from "electron-serve";
// import { createWindow } from './helpers'

const isProd = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
    titleBarStyle: "hidden",
    titleBarOverlay: {
      symbolColor: "#fff",
      color: "#ffffff00",
      height: 38,
    },
    transparent: true,
    resizable: true,
    frame: false,
  });

  // windows transparency
  mainWindow.setBackgroundMaterial("acrylic");
  // macOS vibrancy
  mainWindow.setVibrancy("sidebar");


  if (isProd) {
    await mainWindow.loadURL("app://./home");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    // mainWindow.webContents.openDevTools()
  }
})();

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.on("message", async (event, arg) => {
  event.reply("message", `${arg} World!`);
});
