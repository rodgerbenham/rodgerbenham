#!/bin/bash

# tidy comes with mac by default
tidy -config config.txt -o out.html index.html
mv out.html index.html
