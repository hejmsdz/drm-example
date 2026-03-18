# DRM example

This is a minimal reproducible example for DRM playback not working in a local web view.

## How to launch

Prerequisite: install Kepler SDK according to the instructions:
https://developer.amazon.com/docs/vega/0.22/install-vega-sdk.html

```sh
git clone https://github.com/hejmsdz/drm-example.git
cd drm-example
npm install
npm run build:debug
kepler virtual-device start # if you want to use an emulator, or:
# vda connect $DEVICE_IP:5555 # if you want to connect to a real device
kepler run-kepler build/armv7-debug/drmexample_armv7.vpkg
```
