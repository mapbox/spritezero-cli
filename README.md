# spritezero-cli

A command-line interface to [spritezero](https://github.com/mapbox/spritezero).

## Installation

    npm install -g spritezero-cli

## Usage

    spritezero [output filename] [input directory]

      --retina      shorthand for --ratio=2
      --ratio=[n]   pixel ratio

Spritezero reads directory full of SVG files and generates a JSON
layout file and PNG spritesheet.
