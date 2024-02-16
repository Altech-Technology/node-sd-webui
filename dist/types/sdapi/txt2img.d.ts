import { ControlNetOptions } from "../extensions/controlNet/index.js";
export type Txt2ImgOptions = {
    hires?: {
        steps: number;
        denoisingStrength: number;
        upscaler: string;
        upscaleBy?: number;
        resizeWidthTo?: number;
        resizeHeigthTo?: number;
    };
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
    script?: {
        name: string;
        args?: string[];
    };
    extensions?: {
        controlNet?: ControlNetOptions[];
    };
};
export type Txt2ImgResponse = {
    images: string[];
    parameters: object;
    info: string;
};
export declare const txt2img: (options: Txt2ImgOptions, apiUrl?: string, headers?: {
    [key: string]: string;
} | undefined) => Promise<Txt2ImgResponse>;
