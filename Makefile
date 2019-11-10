.DEFAULT: index.html
.PHONY: update

FIRST := package.json
SECOND := index.pug node_modules render.js state.json

index.html: $(SECOND)
	node render.js > index.html

node_modules: $(FIRST)
	npm install

update: $(FIRST) $(SECOND)
	rm -f index.html
	make index.html