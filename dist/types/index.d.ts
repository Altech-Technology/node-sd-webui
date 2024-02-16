import { Img2ImgOptions, Img2ImgResponse } from "./sdapi/img2img.js";
import { PngInfoOptions, PngInfoResponse } from "./sdapi/pngInfo.js";
import { Txt2ImgOptions, Txt2ImgResponse } from "./sdapi/txt2img.js";
export * from "./types.js";
type Props = {
    apiUrl?: string;
    headers?: {
        [key: string]: string;
    };
};
export type Client = {
    apiUrl: string;
    pngInfo: (options: PngInfoOptions) => Promise<PngInfoResponse>;
    img2img: (options: Img2ImgOptions) => Promise<Img2ImgResponse>;
    txt2img: (options: Txt2ImgOptions) => Promise<Txt2ImgResponse>;
};
declare const sdwebui: (props?: Props) => Client;
export default sdwebui;