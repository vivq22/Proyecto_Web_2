import path, {resolve} from 'node:path'
import { defineConfig } from 'vite'
import * as glob from 'glob'
import htmlPurge from 'vite-plugin-purgecss'
import handlebars from 'vite-plugin-handlebars'
import {ViteMinifyPlugin} from 'vite-plugin-minify'

const obtenerEntradas = ()=>{
    return Object.fromEntries(
        [
            ...glob.sync(
                './**/*.html',
                {
                    ignore: [
                        './dist/**',
                        './node_modules/**'
                    ]
                }
            ).map(
                fileData => [
                    fileData.slice(0, fileData.length - path.extname(fileData).length),
                    resolve(__dirname, fileData)
                ]
            )
        ]
    );
}


export default defineConfig({
    appType: 'mpa',
    base: process.env.DEPLOY_BASE_URL,
    build: {
        rollupOptions: {
            input: obtenerEntradas()
        },
        minify: true
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
            context : (pagePath)=> {
                return {}
            }
        }),
        htmlPurge({})
    ]
});

/**
 
✓ 2 modules transformed.
dist/index.html                 1.71 kB │ gzip: 0.63 kB
dist/assets/index-DMCu4TLF.css  5.83 kB │ gzip: 1.22 kB
✓ built in 251ms

 */