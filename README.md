# OnlinePageToPDF-node

简单的网页转PDF的工具，用node实现

## 用法

```sh
# 安装依赖
npm install
# 网页转PDF
node index.js --waitTime=5000 --pageUrl="http://localhost:8080" --pdfFilePath="test.pdf"
```

## 参数说明

| 参数  |  说明 |
|---|---|
|  waitTime | 等待网页加载时间,默认5s  |
|  pageUrl | 网页链接，必传  |
|  pdfFilePath | 保存文件路径，默认test.pdf  |

## 原理

用puppeteer运行chrome无头模式，等待指定的加载时间后保存网页为PDF