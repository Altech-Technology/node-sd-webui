import { img2img } from "./sdapi/img2img.js";
import { pngInfo } from "./sdapi/pngInfo.js";
import { txt2img } from "./sdapi/txt2img.js";
export * from "./types.js";
const sdwebui = (props) => {
    const apiUrl = props?.apiUrl || "http://localhost:7860";
    const headers = props?.headers || {};
    return {
        apiUrl,
        pngInfo: (options) => pngInfo(options, apiUrl, headers),
        img2img: (options) => img2img(options, apiUrl, headers),
        txt2img: (options) => txt2img(options, apiUrl, headers),
    };
};
export default sdwebui;
