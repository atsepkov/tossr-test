
/**
 * @roxi/routify 2.15.1
 * File generated Sun Mar 28 2021 15:13:29 GMT-0400 (Eastern Daylight Time)
 */

export const __version = "2.15.1"
export const __timestamp = "2021-03-28T19:13:29.478Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {
    "title": "Xyzzy"
  },
  "absolutePath": "/home/atsepkov/work/sandbox/tossr-test/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": false,
      "isDir": true,
      "file": "blog",
      "filepath": "/blog",
      "name": "blog",
      "ext": "",
      "badExt": false,
      "absolutePath": "/home/atsepkov/work/sandbox/tossr-test/src/pages/blog",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[blogId].svelte",
          "filepath": "/blog/[blogId].svelte",
          "name": "[blogId]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/atsepkov/work/sandbox/tossr-test/src/pages/blog/[blogId].svelte",
          "importPath": "../src/pages/blog/[blogId].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/blog/:blogId",
          "id": "_blog__blogId",
          "component": () => import('../src/pages/blog/[blogId].svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/blog/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/atsepkov/work/sandbox/tossr-test/src/pages/blog/index.svelte",
          "importPath": "../src/pages/blog/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/blog/index",
          "id": "_blog_index",
          "component": () => import('../src/pages/blog/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/blog"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/atsepkov/work/sandbox/tossr-test/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "spa.svelte",
      "filepath": "/spa.svelte",
      "name": "spa",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/atsepkov/work/sandbox/tossr-test/src/pages/spa.svelte",
      "importPath": "../src/pages/spa.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/spa",
      "id": "_spa",
      "component": () => import('../src/pages/spa.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "ssr.svelte",
      "filepath": "/ssr.svelte",
      "name": "ssr",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/atsepkov/work/sandbox/tossr-test/src/pages/ssr.svelte",
      "importPath": "../src/pages/ssr.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/ssr",
      "id": "_ssr",
      "component": () => import('../src/pages/ssr.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "title": "Xyzzy",
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

