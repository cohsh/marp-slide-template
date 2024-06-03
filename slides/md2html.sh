#!/bin/sh

md_file_name=$1

output_file_name=$(basename "$md_file_name" .md).html

yarn marp slides/$md_file_name --theme $PWD/custom.css -o public/$output_file_name