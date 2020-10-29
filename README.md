# webpack_test

Current dist output:
```
index.html
main.css
main.js
```

in main.js now we have an error ReferenceError: Can't find variable: templateData
because templateData.js is bundled after main.js


Expected output:

```
index.html
main.js
style_editor.css
style_banner.css
```

- in output main.js file src/js/templateData.js must be bundled before src/js/main.js
- normalize.css must be bundled with style_editor.css
