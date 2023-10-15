#!/bin/bash

export COMPOSE_HTTP_TIMEOUT=20000
docker-compose -f docker-compose.yml down
docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.yml up -d

exec "$@"
