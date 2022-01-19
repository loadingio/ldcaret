caldis = do
  vertical: (x, y, box) ->
    tx = box.x + box.width / 2
    ty = box.y + box.height / 2
    return (tx - x) ** 2 + 10000 * (ty - y) ** 2
  euclidean: (x, y, box) ->
    tx = box.x + box.width / 2
    ty = box.y + box.height / 2
    return (tx - x) ** 2 + (ty - y) ** 2

ldcaret = do
  # HTMLInputElement selectionStart / selectionEnd
  # IE9+, Edge12+
  # https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
  # can i use? https://caniuse.com/#search=inputelement
  # Use range instead?
  get: ->
    # This wont get the range within a textarea / input box, but anyway we get it first.
    sel = window.getSelection!
    if !sel.rangeCount => return {}
    range = sel.getRangeAt 0
    obj = ns: range.startContainer, ne: range.endContainer, os: range.startOffset, oe: range.endOffset
    # Now, if by obj.ns & os we found an input / textarea element, use selectionStart instead,
    # since selection inside textarea / input will never cross it's bounding box.
    n = obj.ns.childNodes[obj.os]
    if n and n.nodeName in <[TEXTAREA INPUT]> =>
      obj = ns: n, ne: n, os: n.selectionStart, oe: n.selectionEnd
    return obj

  # set caret / selection via range
  # opt: {ns,ne,os,oe} or range
  # edit: true if we need update range to the innermost element
  set: (opt = {}, edit = false) ->
    # old api
    if opt.ns? =>
      {ns,os,ne,oe} = opt
      # if ns is an input / textarea element, simply use setSelectionRange
      if ns.setSelectionRange => ns.focus!; return ns.setSelectionRange os, (if oe? => oe else os)
      range = document.createRange!
      range.setStart ns, os
      range.setEnd (if ne? => ne else ns), (if oe? => oe else os)
    else if opt.startContainer => range = opt
    if edit =>
      new-range = document.createRange!
      n = range.startContainer
      o = range.startOffset
      # range not on text-node ( on element node )
      #   - we select the innermost first element
      #   - we should also check recursively if it's editable
      if range.startContainer.nodeType != Element.TEXT_NODE =>
        _ = (n,o) ->
          if !n or !n.childNodes => return n
          ret = _(n.childNodes[o], 0)
          return if ret => that else n
        [n,o] = [_(n, o), 0]
      new-range.setStart n,o
      new-range.setEnd n,o
      range = new-range

    selection = window.getSelection!
    selection.removeAllRanges!
    selection.addRange range

  clear: ->
    selection = window.getSelection!
    selection.removeAllRanges!

  # height = 0 if no caret. width = 0 if no selection (os = oe).
  get-bounding-box: ->
    range = window.getSelection!getRangeAt 0
    return range.getBoundingClientRect!
  setContent: (n) -> @insert n
  insert: (n) ->
    if typeof(n) == \string =>
      obj = ldcaret.get!
      if !(obj and obj.ns) => return
      if obj.ns.setRangeText => return obj.ns.setRangeText n
      n = document.createTextNode n
      # if we want to simply the text nodes ...
      # [ns,ps] = [n.nextSibling, n.previousSibling]
      # if ns and ns.nodeType == 3 => n.nodeValue += ns.nodeValue; ns.parentNode.removeChild ns
      # if ps and ps.nodeType == 3 => ps.nodeValue += n.nodeValue; n.parentNode.removeChild n
      # TODO re-select after text node merged, otherwise select range will become the whole text node
    range = window.getSelection!getRangeAt 0
    range.deleteContents!
    range.insertNode n

  get-content: (opt) ->
    if !opt => return text = window.getSelection!toString!
    range = document.createRange!
    range.setStart opt.ns, opt.os
    range.setEnd opt.ne, opt.oe
    return range.toString!

  # set caret based on a x, y position
  # node: caret should be inside this element.
  # x, y: coordinates we'd like to find a closest caret for.
  # return: {min, range}
  #   - min: minimal distance from (x,y) to the closest caret
  #   - range: range object for the closest caret.
  by-ptr: ({node, x, y, range, method}) ->
    ret = ldcaret._by-ptr({node, x, y, range, method})
    box = ret.range.getBoundingClientRect!
    ret.box = box
    return ret

  _by-ptr: ({node, x, y, range, method}) ->
    if !range => range = document.createRange!
    if node.nodeType == Element.TEXT_NODE => return ldcaret._by-ptr-in-text {node, x, y, range, method}
    min = null
    for i from 0 til node.childNodes.length =>
      r = ldcaret._by-ptr {node: node.childNodes[i], x, y, range, method}
      if !min or r.min < min.min => min = r
    # min = null: this node is empty ( no childNodes ). select itself to get correct range box
    if !min =>
      p = node.parentNode
      c = Array.from(p.childNodes)
      range = document.createRange!
      range.setStart p, c.indexOf(node)
      range.setEnd p, c.indexOf(node) + 1
      box = range.getBoundingClientRect!
      dist = caldis[method or \vertical] x, y, box
      min = {min: dist, range: range}
    return min

  _by-ptr-in-text: ({node, x, y, method}) ->
    range = document.createRange!
    for i from 0 til node.length + 1
      range.setStart node, i
      box = range.getBoundingClientRect!
      dist = caldis[method or \vertical] x, y, box
      if !(min?) or dist < min => [idx, min] = [i, dist]
    range.setStart node, idx
    range.setEnd node, idx
    return {min, range}

if module? => module.exports = ldcaret
else if window? => window.ldcaret = ldcaret
