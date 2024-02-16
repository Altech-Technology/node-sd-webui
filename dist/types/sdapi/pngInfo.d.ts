export type PngInfoOptions = {
    imageData: string;
};
export type PngInfoResponse = {
    prompt: string;
    negativePrompt?: string;
    steps: number;
    samplingMethod: string;
    cfgScale: number;
    seed: number;
    width: number;
    height: number;
    modelHash: string;
    model: string;
};
export declare const pngInfo: (options: PngInfoOptions, apiUrl?: string, headers?: {
    [key: string]: string;
} | undefined) => Promise<PngInfoResponse>;
