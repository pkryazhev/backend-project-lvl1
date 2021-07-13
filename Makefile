install:
	npm ci

brain-games:
	node bin/brain-games.js

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish --dry-run