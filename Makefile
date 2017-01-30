SHELL = /bin/bash
MAKEFLAGS+=-s
.DEFAULT_GOAL := all

node_modules:
	npm install

build:
	npm run build
	sed -i "" 's/\/static/static/g' build/index.html

all: node_modules build

.PHONY: build