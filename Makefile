ESLINT = node_modules/eslint/bin/eslint.js
.PHONY: install start lint docs

install:
	./scripts/install.sh

build:
	make clean
	./scripts/build.sh

dev:
	make clean
	./scripts/dev.sh

docs:
	./scripts/docs.sh

clean:
	rm -rf ./dist
	rm -rf ./examples/dist

lint:
	./scripts/lint.sh
