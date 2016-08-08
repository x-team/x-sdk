ESLINT = node_modules/eslint/bin/eslint.js
.PHONY: install start lint

install:
	./scripts/install.sh

build:
	make clean
	./scripts/build.sh

dev:
	make clean
	./scripts/dev.sh

clean:
	rm -rf ./dist
	rm -rf ./examples/dist

lint:
	./scripts/lint.sh
