#!/bin/bash

author=$(echo "$npm_package_author_name" | sed -E 's; ;_;g')
sed -E "s;(=\")\./;\1$npm_package_homepage;g" "$author.html" > index.html