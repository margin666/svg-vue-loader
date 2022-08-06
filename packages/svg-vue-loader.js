function fn(source, map) {
    const tem = `<template>
                    <div :style="{width: size+'px', height: size+'px', color: color, overflow: 'hidden'}">${source}</div>
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