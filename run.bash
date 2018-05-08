#! /bin/bash

pip3 install python/requirements.txt
python3 python/getBusStopId.py &

ionic serve &
