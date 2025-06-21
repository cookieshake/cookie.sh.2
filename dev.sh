#!/usr/bin/env bash

set -euo pipefail
rm -rf _site || true
flox activate -- npx @11ty/eleventy --serve