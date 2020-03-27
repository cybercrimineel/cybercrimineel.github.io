DEP := index.pug render.js package.json state.json
OBJ := node_modules package-lock.json
TGT := index.html

.DEFAULT: all
.PHONY: all clean mostlyclean rebuild

all: $(TGT)

clean: mostlyclean
	rm -f -r $(OBJ)

mostlyclean:
	rm -f -r $(TGT)

rebuild: mostlyclean
	make $(TGT)

update: $(OBJ)
	npm update

$(OBJ): $(DEP)
	test -d node_modules || npm install

index.html: $(OBJ)
	node render.js > $@