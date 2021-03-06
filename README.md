#   NCUT-WIFI —— 基于 Scriptable 的 iOS 桌面小组件
> 项目 widget ui 实现 fork 自 [im3x](https://github.com/im3x/Scriptables)

# 介绍

使用 Scriptable 实现的 iOS 桌面小组件

可以显示 NCUT 校园网剩余流量

异步自动更新并使用本地文件缓存，支持 iCloud 同步更新

# 使用

**此 widget 仅能在 NCUT 校园网环境下更新**

1. 在 App Store 中搜索并下载 **Scriptable**
2. 复制以下内容，或复制 `install.js`
```js
const FILE_MGR = FileManager[module.filename.includes('Documents/iCloud~') ? 'iCloud' : 'local']();
const REQ = new Request(`https://blog.magicxin.tech/NCUT-WIFI.js`);
const RES = await REQ.load();
FILE_MGR.write(FILE_MGR.joinPath(FILE_MGR.documentsDirectory(), `NCUT-WIFI.js`), RES);
FILE_MGR.remove(module.filename);
Safari.open("scriptable:///open?scriptName=" + encodeURIComponent('NCUT-WIFI'));
```
3. 打开 **Scriptable** 点击右上角<kbd>+</kbd> -> 粘贴代码 -> 点击右下角**运行箭头** -> 弹出 NCUT-WIFI 代码窗口后点击右上角 <kbd>Done</kbd>

4. 在桌面新建小组件 (widget)，选择 **Scriptable**，尺寸选择**小**或**中**

5. 在小组件弹出窗口中

    * **Script** 项选择 **NCUT-WIFI**
    * **When Interacting** 项选择 **Run Script**
    * **Parameter** 项中填写**学号**

6. 连接 NCUT-AUTO，或连接 NCUT 并登陆

7. 点击桌面小组件，或在 **Scriptable** 中运行 **NCUT-WIFI**，返回桌面查看即可


***

Debug 代码自动补全

```shell
npm install @types/scriptable-ios
```
