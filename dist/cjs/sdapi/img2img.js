"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.img2img = void 0;
const index_js_1 = require("../extensions/controlNet/index.js");
const img2img = async (options, apiUrl = "http://localhost:7860", headers) => {
    let body = {
        init_images: options.imageData,
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
    const { extensions } = options;
    if (extensions?.controlNet) {
        body.controlnet_units = extensions.controlNet.map(index_js_1.mapControlNetOptions);
    }
    let endpoint = "/sdapi/v1/img2img";
    if (options.extensions?.controlNet) {
        endpoint = "/controlnet/img2img";
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
exports.img2img = img2img;