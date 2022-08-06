## svg-vue-loader

### 说明

> 引入时需在被转换的文件后面添加`?s`
> 
> 需要和`vue-loader`搭配使用


### **Example**
```js
//  webpack.config.js

module.exports = {
    // ...
    module: {
        rules: [
            {
                test: /\.svg$/,
                resourceQuery: /s/,
                use: [
                    'vue-loader',
                    'svg-vue-loader'
                ]
            }
        ]
    },
    resolveLoader: {
        module: [
            'node_modules',
            resolve(__dirname, 'dist')
        ]
    }
    // ...
}
```

```html
// component.vue
<template>
    <Svg size="14" color="#f90"></Svg>
</template>

<script setup>
import Svg from '***.svg?s';
</script>
```

### **props**
`size`

type: number

default: 14

`color`

type: string

default: '#000'