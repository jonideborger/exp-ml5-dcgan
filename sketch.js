"use strict";
// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
DCGAN example
=== */

let dcgan;
let button;

function preload(){
    console.log("Preloadig ...");
    dcgan = ml5.DCGAN('./manifest.json');
}

function setup() {
    console.log('Init', dcgan);
    createCanvas(200, 200);

    // Button to generate an image
    button = createButton('generate');
    button.mousePressed(generate);

    // generate an image on load
    generate();
}

function generate() {
    //Walk random vector (optional);
  // Generate function receives a callback for when image is ready
  dcgan.generate(displayImage);
}

function displayImage(err, result) {
  if (err) {
    console.log(err);
    return;
  }
  image(result.image, 0, 0, 200, 200);
}





/*

Using a model from https://github.com/alantian/ganshowcase/blob/master/webcode/ganshowcase/index.js


let all_model_info = {
    dcgan64: {
        description: 'DCGAN, 64x64 (16 MB)',
        model_url: "https://storage.googleapis.com/store.alantian.net/tfjs_gan/chainer-dcgan-celebahq-64/tfjs_SmoothedGenerator_50000/model.json",
        model_size: 64,
        model_latent_dim: 128,
        draw_multiplier: 4,
        animate_frame: 200,
    },
    resnet128: {
        description: 'ResNet, 128x128 (252 MB)',
        model_url: "https://storage.googleapis.com/store.alantian.net/tfjs_gan/chainer-resent128-celebahq-128/tfjs_SmoothedGenerator_20000/model.json",
        model_size: 128,
        model_latent_dim: 128,
        draw_multiplier: 2,
        animate_frame: 10
    },
    resnet256: {
        description: 'ResNet, 256x256 (252 MB)',
        model_url: "https://storage.googleapis.com/store.alantian.net/tfjs_gan/chainer-resent256-celebahq-256/tfjs_SmoothedGenerator_40000/model.json",
        model_size: 256,
        model_latent_dim: 128,
        draw_multiplier: 1,
        animate_frame: 10
    }
};
*/