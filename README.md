# my-cypress-project
cypress官方使用文档可参考[___官方使用文档___](https://docs.cypress.io/api/table-of-contents)

## 运行测试
#### 1. 安装相关依赖
`npm install`
#### 2. 运行
___Mac系统___ `./node_modules/.bin/cypress open` ___或___ `npx cypress open/run`
___Windows系统___ `<完整路径>/node_modules/.bin/cypress open`


## 环境配置
#### 1. 安装node.js：
`node.js == 12` ___or___ `node.js > 14`
#### 2. 初始化项目：
`npm init`
#### 3. 在创建的项目上安装cypress：
`npm install cypress --save-dev`
#### 4. 安装cyress cucumber插件：
`npm install --save-dev cypress-cucumber-preprocessor`
#### 5. 在文件`cypress/plugins/index.js`中添加：
```javascript
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
    on('file:preprocessor', cucumber())
}
```
#### 6. 在文件`cypress.json`中添加：
```json
{
  "testFiles": "**/*.feature"
}
```
#### 7. 在`package.json`文件中添加:
```json
{
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
  }
}
```


## 查看结果
### Mocha report
#### 1. 安装 mochawesome：
`npm install mochawesome --save-dev`
#### 2. 安装 mochanpm：
`install mocha --save-dev`
#### 3. merge mochawesome json reports
`npm install mochawesome-merge --save-dev`
#### 4. 在`cypress.json`文件添加：
```json
{
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/results",
    "overwrite": false,
    "html": true,
    "json": true
  }
}
```
#### 5. 运行 script：
`npx cypress run --spec "<path of spec file>"`
