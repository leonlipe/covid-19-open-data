#!/bin/sh

curl http://187.191.75.115/gobmx/salud/datos_abiertos/datos_abiertos_covid19.zip > downloaded_data/datos_abiertos_covid19.zip
cd downloaded_data
unzip datos_abiertos_covid19.zip