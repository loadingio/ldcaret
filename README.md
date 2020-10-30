# ldCaret

Caret Manipulation Library, in Vanilla JS.


## Usage

1. download and include [ldcaret.js](https://raw.githubusercontent.com/loadingio/ldCaret/v0.0.1/dist/ldcaret.min.js):

    <link rel="stylesheet" type="text/css" href="ldcaret.min.js"/>

you an use a CDN, such as, from jsDelivr:

    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/loadingio/ldCaret@v0.0.1/dist/ldcaret.min.css"/>

2. call desired API (see below) provided by `ldCaret` object:

    ldCaret.get();


## API

ldCaret provides following API:

 * get() - get selection range in an object with following attributes:
   - ns: start container
   - os: start offset
   - ne: end container
   - oe: end offset

 * set(opt) - select based on option object `opt` with following attributes:
   - ns: start container
   - os: start offset
   - ne: end container ( will use ns when ne is omitted )
   - oe: end offset ( will use os when oe is omitted )
   
 * getContent() - get content from current selection.
 * setContent(content) - replace range of current selection with `content`.
 * clear() - clear selection.


## LICENSE

MIT License.
