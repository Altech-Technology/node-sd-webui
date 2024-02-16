"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const img2img_js_1 = require("./sdapi/img2img.js");
const pngInfo_js_1 = require("./sdapi/pngInfo.js");
const txt2img_js_1 = require("./sdapi/txt2img.js");
__exportStar(require("./types.js"), exports);
const sdwebui = (props) => {
    const apiUrl = props?.apiUrl || "http://localhost:7860";
    const headers = props?.headers || {};
    return {
        apiUrl,
        pngInfo: (options) => (0, pngInfo_js_1.pngInfo)(options, apiUrl, headers),
        img2img: (options) => (0, img2img_js_1.img2img)(options, apiUrl, headers),
        txt2img: (options) => (0, txt2img_js_1.txt2img)(options, apiUrl, headers),
    };
};
exports.default = sdwebui;