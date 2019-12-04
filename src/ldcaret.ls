(->
  ldCaret = do
    # HTMLInputElement selectionStart / selectionEnd
    # IE9+, Edge12+
    # https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
    # can i use? https://caniuse.com/#search=inputelement
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

    set: ({ns,ne,os,oe}) ->
      # if ns is an input / textarea element, simply use setSelectionRange
      if ns.setSelectionRange => ns.focus!; return ns.setSelectionRange os, (if oe? => oe else os)
      range = document.createRange!
      range.setStart ns, os
      range.setEnd (if ne? => ne else ns), (if oe? => oe else os)
      selection = window.getSelection!
      selection.removeAllRanges!
      selection.addRange range

    clear: ->
      selection = window.getSelection!
      selection.removeAllRanges!

    set-content: (txt) ->
      obj = ldCaret.get!
      if obj.ns.setRangeText => return obj.ns.setRangeText txt
      range = window.getSelection!getRangeAt 0
      range.deleteContents!
      range.insertNode n = document.createTextNode txt
      # if we want to simply the text nodes ...
      # [ns,ps] = [n.nextSibling, n.previousSibling]
      # if ns and ns.nodeType == 3 => n.nodeValue += ns.nodeValue; ns.parentNode.removeChild ns
      # if ps and ps.nodeType == 3 => ps.nodeValue += n.nodeValue; n.parentNode.removeChild n
      # TODO re-select after text node merged, otherwise select range will become the whole text node

    get-content: ->
      return text = window.getSelection!toString!

  window.ldCaret = ldCaret
)!
