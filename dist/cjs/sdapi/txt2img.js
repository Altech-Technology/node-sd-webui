"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.txt2img = void 0;
const index_js_1 = require("../extensions/controlNet/index.js");
const mapTxt2ImgOptions = (options) => {
    let body = {
        prompt: options.prompt,
        negative_prompt: options.negativePrompt,
        seed: options.seed,
        subseed: options.variationSeed,
        subseed_strength: options.variationSeedStrength,
        sampler_name: options.samplingMethod,
        batch_size: options.batchSize,
        n_iter: options.batchCount,
        steps: options.steps,
        width: options.width,
        height: options.height,
        cfg_scale: options.cfgScale,
        seed_resize_from_w: options.resizeSeedFromWidth,
        seed_resize_from_h: options.resizeSeedFromHeight,
        restore_faces: options.restoreFaces,
    };
    if (options.hires) {
        body = {
            ...body,
            enable_hr: true,
            denoising_strength: options.hires.denoisingStrength,
            hr_upscaler: options.hires.upscaler,
            hr_scale: options.hires.upscaleBy,
            hr_resize_x: options.hires.resizeWidthTo,
            hr_resize_y: options.hires.resizeHeigthTo,
            hr_second_pass_steps: options.hires.steps,
        };
    }
    if (options.script) {
        body = {
            ...body,
            script_name: options.script.name,
            script_args: options.script.args || [],
        };
    }
    const { extensions } = options;
    if (extensions?.controlNet) {
        body.controlnet_units = extensions.controlNet.map(index_js_1.mapControlNetOptions);
    }
    return body;
};
const txt2img = async (options, apiUrl = "http://localhost:7860", headers) => {
    const body = mapTxt2ImgOptions(options);
    let endpoint = "/sdapi/v1/txt2img";
    if (options.extensions?.controlNet) {
        endpoint = "/controlnet/txt2img";
    }
    /* @ts-ignore */
    const result = await fetch(`${apiUrl}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
    });
    if (result.status !== 200) {
        throw new Error(result.statusText);
    }
    const data = await result.json();
    if (!data?.images) {
        throw new Error("api returned an invalid response");
    }
    return data;
};
exports.txt2img = txt2img;
