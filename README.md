# ldCaret

Caret Manipulation Library, in Vanilla JS.


## Usage

1. download and include [ldcaret.js](https://raw.githubusercontent.com/loadingio/ldCaret/v2.0.0/dist/ldcaret.min.js):

    <link rel="stylesheet" type="text/css" href="ldcaret.min.js"/>

you an use a CDN, such as, from jsDelivr:

    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/loadingio/ldCaret@v2.0.0/dist/ldcaret.min.css"/>

2. call desired API (see below) provided by `ldCaret` object:

    ldCaret.get();


## API

ldCaret provides following API:

 * get() - get selection range in an object with following attributes:
   - ns: start container
   - os: start offset
   - ne: end container
   - oe: end offset
 * set(opt, edit) - set selection / caret based on option object `opt`
   - opt: selection range, in two possible format
     - simplified format:
       - ns: start container
       - os: start offset
       - ne: end container ( will use ns when ne is omitted )
       - oe: end offset ( will use os when oe is omitted )
     - range object
   - edit: when set to true, patch range into innermost element if possible. default false.
 * clear() - clear selection.
 * getContent() - get text content from current selection.
 * getBoundingBox() - get the bounding box of current selection.
 * setContent(content) - replace range of current selection with `content`.
 * insert(arg) - insert or replace current selection with arg. arg could be:
   - text
   - Element
 * byPtr({node, x, y, method}) - get a closest possible caret position under `node` based on `(x,y)` coordinates.
   - method: method name (string) of the distance calculation algorithm. possible values:
     - `euclidean` - straight line distnace
     - `vertical` - favor y distance against x distance. default value.
   - return value: {min, range, box}
     - min: minimal distance in px from the calculated caret to `(x,y)` coordinates.
     - range: corresponding range of the calculated caret.
     - box: bounding box of the calculated range.


## LICENSE

MIT License.
