const FILE_MGR = FileManager[module.filename.includes('Documents/iCloud~') ? 'iCloud' : 'local']();
const REQ = new Request(`https://blog.magicxin.tech/NCUT-WIFI.js`);
const RES = await REQ.load();
FILE_MGR.write(FILE_MGR.joinPath(FILE_MGR.documentsDirectory(), `NCUT-WIFI.js`), RES);
FILE_MGR.remove(module.filename);
Safari.open("scriptable:///open?scriptName=" + encodeURIComponent('NCUT-WIFI'));