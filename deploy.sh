#!/usr/bin/env bash
timestamp=$(date +%c)
git commit -m "Deploy $timestamp"
git push