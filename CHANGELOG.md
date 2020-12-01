# 2.1.0

 - add additional parameter `method` in `byPtr` method for deciding distance calculation algorithm.


# 2.0.0

 - extend set api to adopt range, and add `edit` option to update range into the innermost text element.
 - rename `set-pos` to `set-bounding-box`.
 - merge `set-dom` and `set-content`, and rename to `insert`.
 - add `by-ptr` api to set caret by screen position.
   - not yet work in input / textarea box.

# 1.1.0

 - add option in getContent
 - insert text node only if there are text to add
 - add getPos api
 - add setDom api
