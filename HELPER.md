# Install Packages
```bash
# Install tsup, the library that will help us compile...
npm i -D tsup
```

# Publish...
```bash
npm version patch && npm run bundle && npm publish --access=public
```

# Verify Publication
```bash
npm info @korautils/forms
```
