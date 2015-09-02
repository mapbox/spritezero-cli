# spritezero-cli

[![build status](https://secure.travis-ci.org/mapbox/spritezero-cli.svg)](http://travis-ci.org/mapbox/spritezero-cli) [![Coverage Status](https://coveralls.io/repos/mapbox/spritezero-cli/badge.svg?branch=master&service=github)](https://coveralls.io/github/mapbox/spritezero-cli?branch=master)

A command-line interface to [spritezero](https://github.com/mapbox/spritezero).

## Installation

    npm install -g spritezero-cli

## Usage

    spritezero [output filename] [input directory]

      --retina      shorthand for --ratio=2
      --ratio=[n]   pixel ratio

Spritezero reads directory full of SVG files and generates a JSON
layout file and PNG spritesheet.
