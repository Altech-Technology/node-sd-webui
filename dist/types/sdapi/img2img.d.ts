import { ControlNetOptions } from "../extensions/controlNet/index.js";
export type Img2ImgOptions = {
    imageData: string[];
    prompt: string;
    negativePrompt?: string;
    width?: number;
    height?: number;
    samplingMethod?: string;
    seed?: number;
    variationSeed?: number;
    variationSeedStrength?: number;
    resizeSeedFromHeight?: number;
    resizeSeedFromWidth?: number;
    batchSize?: number;
    batchCount?: number;
    steps?: number;
    cfgScale?: number;
    restoreFaces?: boolean;
    extensions?: {
        controlNet?: ControlNetOptions[];
    };
};
export type Img2ImgResponse = {
    images: string[];
    parameters: object;
    info: string;
};
export declare const img2img: (options: Img2ImgOptions, apiUrl?: string, headers?: {
    [key: string]: string;
} | undefined) => Promise<Img2ImgResponse>;