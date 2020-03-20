module.exports = {
    sourceType: "unambiguous", //可以去除use strict 
    "presets": [
        [   
            "@babel/preset-env",
            {
            	"useBuiltIns": "usage",
            	"corejs": 3
            }
        ],
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-syntax-dynamic-import",
        ["import", { "libraryName": "saber", "style": true }]
    ]
};
