# Change Logs

## v3.0.0

 - rename `ldCaret` to `ldcaret`
 - wrap js by transpiler. check for both window and module for module export.
 - rename `ldcaret.js`, `ldcaret.min.js` to `index.js` and `index.min.js`
 - upgrade modules
 - release with compact directory structure
 - add `main` and `browser` field in `package.json`.
 - further minimize generated js file with mangling and compression
 - remove assets files from git
 - patch test code to make it work with upgraded modules
 - fix bug: `setContent` not implemneted
 - fix bug: in `insert`, `txt` not defined ( which should be `n` )
 - fix bug: exception when `setContent` without selection


## v2.1.0

 - add additional parameter `method` in `byPtr` method for deciding distance calculation algorithm.


## v2.0.0

 - extend set api to adopt range, and add `edit` option to update range into the innermost text element.
 - rename `set-pos` to `set-bounding-box`.
 - merge `set-dom` and `set-content`, and rename to `insert`.
 - add `by-ptr` api to set caret by screen position.
   - not yet work in input / textarea box.


## v1.1.0

 - add option in getContent
 - insert text node only if there are text to add
 - add getPos api
 - add setDom api
