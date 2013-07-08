#!/bin/bash

set -e

rsync -rva --delete drc_map/* jameslaneconkling@map.timconkling.com:map.timconkling.com/
