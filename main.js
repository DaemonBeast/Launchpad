const { app, BrowserWindow } = require("electron");


function init() {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  window.loadFile("pages/index.html");
}

app.whenReady().then(init);

app.on("window-all-closed", _ => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", _ => {
  if (BrowserWindow.getAllWindows().length === 0) {
    init();
  }
});