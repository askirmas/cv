#/!bin/bash

sed -E "s;(=\")\./;\1$npm_package_homepage;g" Andrii_Kirmas.html > index.html