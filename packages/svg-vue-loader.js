

function fn(source, map) {
    // 使用正则替换那些已经设置了颜色的svg图片，使其可以跟随容器颜色
    const result = source.replace(/fill\s?=\s?(['"])(.+?)\1/g, 'fill="currentColor"')
    
    const tem = `<template>
                    <div :style="{width: size+'px', height: size+'px', color: color, overflow: 'hidden'}">${result}</div>
                </template>
                <script setup>
                    defineProps({
                        size: {
                            type: Number,
                            default: 14
                        },
                        color: {
                            type: String,
                            default: '#000'
                        }
                    })
                </script>
                `
    this.callback(null, tem, map)
}

module.exports = fn