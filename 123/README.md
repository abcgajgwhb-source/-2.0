# 字体库 2.0

Vue 3 + Vite 实现的 Figma 免费商用字体速查库。

## GitHub 上传说明

上传本项目时保留源码文件即可，不需要上传 `node_modules`、`dist`、`.vite`。

建议上传这些文件和目录：

```txt
src/
scripts/
index.html
package.json
package-lock.json
vite.config.js
README.md
.gitignore
```

## 使用

```bash
npm install
npm run dev
```

浏览器打开终端显示的本地地址，通常是：

```txt
http://127.0.0.1:5173/
```

## 构建

```bash
npm run build
```

## 数据

字体数据位于 `src/data/fonts.json`，由 `scripts/generate-font-data.py` 根据本地字体文件夹和官方链接补充表生成。

```bash
python3 scripts/generate-font-data.py
```
