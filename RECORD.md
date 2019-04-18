## 问题一
导入管道打包--prod提示：
ERROR in : Unexpected value 'undefined' declared by the module 'ɵa in /Users/cy/procedure/program/cytest/node_modules/ng-cy-ui/ng-cy-ui.d.ts'

解决：
``` ts
// import { HtmlStylePipe } from './../util'; // 错误导入方式
import { HtmlStylePipe } from './../util/html-style.pipe'; 
```

## 问题二
项目支持scss

解决：
npm/npm install node-sass --save-dev
npm/npm install sass-loader --save-dev

```
"prefix": "cy",
"schematics": {
    "@schematics/angular:component": {
        "styleext": "scss"
    }
},
"architect": { ……
```