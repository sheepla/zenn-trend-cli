PREFIX ?= /usr/local
BINDIR := $(PREFIX)/bin

NAME := zenn-trend-cli
SRC := bin/$(NAME)
DEST := $(BINDIR)/$(NAME)

.PHONY: run
run:
	deno run --allow-net cli.ts

.PHONY: lint
lint:
	deno lint

.PHONY: fmt
fmt:
	deno fmt

.PHONY: build
build:
	deno compile --allow-net -o $(SRC) cli.ts 

.PHONY: test
test:
	deno test --allow-net

.PHONY: install
install:
	install -Dm 0755 $(SRC) $(DEST)

.PHONY: uninstall
uninstall:
	rm -f $(DEST)

.PHONY: clean
clean:
	rm ./bin/*
