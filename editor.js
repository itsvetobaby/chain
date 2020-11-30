'classList' in document.createElement('_') || !(function (a) {
  'use strict'
  if ('Element' in a) {
    const b = 'classList'
    const c = 'prototype'
    const d = a.Element[c]
    const e = Object
    const f = String[c].trim || function () {
      return this.replace(/^\s+|\s+$/g, '')
    }
    const g = Array[c].indexOf || function (a) {
      for (let b = 0, c = this.length; c > b; b++) { if (b in this && this[b] === a) return b }
      return -1
    }
    const h = function (a, b) {
      this.name = a, this.code = DOMException[a], this.message = b
    }
    const i = function (a, b) {
      if (b === '') throw new h('SYNTAX_ERR', 'An invalid or illegal string was specified')
      if (/\s/.test(b)) throw new h('INVALID_CHARACTER_ERR', 'String contains an invalid character')
      return g.call(a, b)
    }
    const j = function (a) {
      for (let b = f.call(a.getAttribute('class') || ''), c = b ? b.split(/\s+/) : [], d = 0, e = c.length; e > d; d++) this.push(c[d])
      this._updateClassName = function () {
        a.setAttribute('class', this.toString())
      }
    }
    const k = j[c] = []
    const l = function () {
      return new j(this)
    }
    if (h[c] = Error[c], k.item = function (a) {
      return this[a] || null
    }, k.contains = function (a) {
      return a += '', i(this, a) !== -1
    }, k.add = function () {
      let a; const b = arguments
      let c = 0
      const d = b.length
      let e = !1
      do a = b[c] + '', i(this, a) === -1 && (this.push(a), e = !0); while (++c < d)
      e && this._updateClassName()
    }, k.remove = function () {
      let a; let b; const c = arguments
      let d = 0
      const e = c.length
      let f = !1
      do { for (a = c[d] + '', b = i(this, a); b !== -1;) this.splice(b, 1), f = !0, b = i(this, a) } while (++d < e)
      f && this._updateClassName()
    }, k.toggle = function (a, b) {
      a += ''
      const c = this.contains(a)
      const d = c ? b !== !0 && 'remove' : b !== !1 && 'add'
      return d && this[d](a), b === !0 || b === !1 ? b : !c
    }, k.toString = function () {
      return this.join(' ')
    }, e.defineProperty) {
      const m = {
        get: l,
        enumerable: !0,
        configurable: !0
      }
      try {
        e.defineProperty(d, b, m)
      } catch (n) {
        n.number === -2146823252 && (m.enumerable = !1, e.defineProperty(d, b, m))
      }
    } else e[c].__defineGetter__ && d.__defineGetter__(b, l)
  }
}(self)),
(function (a) {
  'use strict'
  if (a.URL = a.URL || a.webkitURL, a.Blob && a.URL) {
    try {
      return void new Blob()
    } catch (b) {}
  }
  const c = a.BlobBuilder || a.WebKitBlobBuilder || a.MozBlobBuilder || (function (a) {
    const b = function (a) {
      return Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1]
    }
    const c = function () {
      this.data = []
    }
    const d = function (a, b, c) {
      this.data = a, this.size = a.length, this.type = b, this.encoding = c
    }
    const e = c.prototype
    const f = d.prototype
    const g = a.FileReaderSync
    const h = function (a) {
      this.code = this[this.name = a]
    }
    const i = 'NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR'.split(' ')
    let j = i.length
    const k = a.URL || a.webkitURL || a
    const l = k.createObjectURL
    const m = k.revokeObjectURL
    let n = k
    const o = a.btoa
    const p = a.atob
    const q = a.ArrayBuffer
    const r = a.Uint8Array
    const s = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/
    for (d.fake = f.fake = !0; j--;) h.prototype[i[j]] = j + 1
    return k.createObjectURL || (n = a.URL = function (a) {
      let b; const c = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
      return c.href = a, 'origin' in c || (c.protocol.toLowerCase() === 'data:' ? c.origin = null : (b = a.match(s), c.origin = b && b[1])), c
    }), n.createObjectURL = function (a) {
      let b; let c = a.type
      return c === null && (c = 'application/octet-stream'), a instanceof d ? (b = 'data:' + c, a.encoding === 'base64' ? b + ';base64,' + a.data : a.encoding === 'URI' ? b + ',' + decodeURIComponent(a.data) : o ? b + ';base64,' + o(a.data) : b + ',' + encodeURIComponent(a.data)) : l ? l.call(k, a) : void 0
    }, n.revokeObjectURL = function (a) {
      a.substring(0, 5) !== 'data:' && m && m.call(k, a)
    }, e.append = function (a) {
      const c = this.data
      if (r && (a instanceof q || a instanceof r)) {
        for (var e = '', f = new r(a), i = 0, j = f.length; j > i; i++) e += String.fromCharCode(f[i])
        c.push(e)
      } else if (b(a) === 'Blob' || b(a) === 'File') {
        if (!g) throw new h('NOT_READABLE_ERR')
        const k = new g()
        c.push(k.readAsBinaryString(a))
      } else a instanceof d ? a.encoding === 'base64' && p ? c.push(p(a.data)) : a.encoding === 'URI' ? c.push(decodeURIComponent(a.data)) : a.encoding === 'raw' && c.push(a.data) : (typeof a !== 'string' && (a += ''), c.push(unescape(encodeURIComponent(a))))
    }, e.getBlob = function (a) {
      return arguments.length || (a = null), new d(this.data.join(''), a, 'raw')
    }, e.toString = function () {
      return '[object BlobBuilder]'
    }, f.slice = function (a, b, c) {
      const e = arguments.length
      return e < 3 && (c = null), new d(this.data.slice(a, e > 1 ? b : this.data.length), c, this.encoding)
    }, f.toString = function () {
      return '[object Blob]'
    }, f.close = function () {
      this.size = 0, delete this.data
    }, c
  }(a))
  a.Blob = function (a, b) {
    const d = b ? b.type || '' : ''
    const e = new c()
    if (a) { for (let f = 0, g = a.length; g > f; f++) Uint8Array && a[f] instanceof Uint8Array ? e.append(a[f].buffer) : e.append(a[f]) }
    const h = e.getBlob(d)
    return !h.slice && h.webkitSlice && (h.slice = h.webkitSlice), h
  }
  const d = Object.getPrototypeOf || function (a) {
    return a.__proto__
  }
  a.Blob.prototype = d(new a.Blob())
}(typeof self !== 'undefined' && self || typeof window !== 'undefined' && window || this.content || this)),
(function (a, b) {
  'use strict'
  const c = typeof module === 'object' && typeof process !== 'undefined' && process && process.versions && process.versions.electron
  c || typeof module !== 'object' ? typeof define === 'function' && define.amd ? define(function () {
    return b
  }) : a.MediumEditor = b : module.exports = b
}(this, (function () {
  'use strict'

  function a (a, b) {
    return this.init(a, b)
  }
  return a.extensions = {},
  (function (b) {
    function c (a, b) {
      let c; const d = Array.prototype.slice.call(arguments, 2)
      b = b || {}
      for (let e = 0; e < d.length; e++) {
        const f = d[e]
        if (f) { for (c in f) f.hasOwnProperty(c) && typeof f[c] !== 'undefined' && (a || b.hasOwnProperty(c) === !1) && (b[c] = f[c]) }
      }
      return b
    }
    let d = !1
    try {
      const e = document.createElement('div')
      const f = document.createTextNode(' ')
      e.appendChild(f), d = e.contains(f)
    } catch (g) {}
    var h = {
      isIE: navigator.appName === 'Microsoft Internet Explorer' || navigator.appName === 'Netscape' && new RegExp('Trident/.*rv:([0-9]{1,}[.0-9]{0,})').exec(navigator.userAgent) !== null,
      isEdge: /Edge\/\d+/.exec(navigator.userAgent) !== null,
      isFF: navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
      isMac: b.navigator.platform.toUpperCase().indexOf('MAC') >= 0,
      keyCode: {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        ESCAPE: 27,
        SPACE: 32,
        DELETE: 46,
        K: 75,
        M: 77,
        V: 86
      },
      isMetaCtrlKey: function (a) {
        return !!(h.isMac && a.metaKey || !h.isMac && a.ctrlKey)
      },
      isKey: function (a, b) {
        const c = h.getKeyCode(a)
        return !1 === Array.isArray(b) ? c === b : b.indexOf(c) !== -1
      },
      getKeyCode: function (a) {
        let b = a.which
        return b === null && (b = a.charCode !== null ? a.charCode : a.keyCode), b
      },
      blockContainerElementNames: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre', 'ul', 'li', 'ol', 'address', 'article', 'aside', 'audio', 'canvas', 'dd', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'header', 'hgroup', 'main', 'nav', 'noscript', 'output', 'section', 'video', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td'],
      emptyElementNames: ['br', 'col', 'colgroup', 'hr', 'img', 'input', 'source', 'wbr'],
      extend: function () {
        const a = [!0].concat(Array.prototype.slice.call(arguments))
        return c.apply(this, a)
      },
      defaults: function () {
        const a = [!1].concat(Array.prototype.slice.call(arguments))
        return c.apply(this, a)
      },
      createLink: function (a, b, c, d) {
        const e = a.createElement('a')
        return h.moveTextRangeIntoElement(b[0], b[b.length - 1], e), e.setAttribute('href', c), d && (d === '_blank' && e.setAttribute('rel', 'noopener noreferrer'), e.setAttribute('target', d)), e
      },
      findOrCreateMatchingTextNodes: function (a, b, c) {
        for (var d = a.createTreeWalker(b, NodeFilter.SHOW_ALL, null, !1), e = [], f = 0, g = !1, i = null, j = null; (i = d.nextNode()) !== null;) {
          if (!(i.nodeType > 3)) {
 if (i.nodeType === 3) {
            if (!g && c.start < f + i.nodeValue.length && (g = !0, j = h.splitStartNodeIfNeeded(i, c.start, f)), g && h.splitEndNodeIfNeeded(i, j, c.end, f), g && f === c.end) break
            if (g && f > c.end + 1) throw new Error('PerformLinking overshot the target!')
            g && e.push(j || i), f += i.nodeValue.length, j !== null && (f += j.nodeValue.length, d.nextNode()), j = null
          } else i.tagName.toLowerCase() === 'img' && (!g && c.start <= f && (g = !0), g && e.push(i)) 
}
        }
        return e
      },
      splitStartNodeIfNeeded: function (a, b, c) {
        return b !== c ? a.splitText(b - c) : null
      },
      splitEndNodeIfNeeded: function (a, b, c, d) {
        let e, f
        e = d + a.nodeValue.length + (b ? b.nodeValue.length : 0) - 1, f = c - d - (b ? a.nodeValue.length : 0), e >= c && d !== e && f !== 0 && (b || a).splitText(f)
      },
      splitByBlockElements: function (b) {
        if (b.nodeType !== 3 && b.nodeType !== 1) return []
        let c = []
        const d = a.util.blockContainerElementNames.join(',')
        if (b.nodeType === 3 || b.querySelectorAll(d).length === 0) return [b]
        for (let e = 0; e < b.childNodes.length; e++) {
          const f = b.childNodes[e]
          if (f.nodeType === 3) c.push(f)
          else if (f.nodeType === 1) {
            const g = f.querySelectorAll(d)
            g.length === 0 ? c.push(f) : c = c.concat(a.util.splitByBlockElements(f))
          }
        }
        return c
      },
      findAdjacentTextNodeWithContent: function (a, b, c) {
        let d; let e = !1
        const f = c.createNodeIterator(a, NodeFilter.SHOW_TEXT, null, !1)
        for (d = f.nextNode(); d;) {
          if (d === b) e = !0
          else if (e && d.nodeType === 3 && d.nodeValue && d.nodeValue.trim().length > 0) break
          d = f.nextNode()
        }
        return d
      },
      findPreviousSibling: function (a) {
        if (!a || h.isMediumEditorElement(a)) return !1
        for (var b = a.previousSibling; !b && !h.isMediumEditorElement(a.parentNode);) a = a.parentNode, b = a.previousSibling
        return b
      },
      isDescendant: function (a, b, c) {
        if (!a || !b) return !1
        if (a === b) return !!c
        if (a.nodeType !== 1) return !1
        if (d || b.nodeType !== 3) return a.contains(b)
        for (let e = b.parentNode; e !== null;) {
          if (e === a) return !0
          e = e.parentNode
        }
        return !1
      },
      isElement: function (a) {
        return !(!a || a.nodeType !== 1)
      },
      throttle: function (a, b) {
        let c; let d; let e; const f = 50
        let g = null
        let h = 0
        const i = function () {
          h = Date.now(), g = null, e = a.apply(c, d), g || (c = d = null)
        }
        return b || b === 0 || (b = f),
        function () {
          const f = Date.now()
          const j = b - (f - h)
          return c = this, d = arguments, j <= 0 || j > b ? (g && (clearTimeout(g), g = null), h = f, e = a.apply(c, d), g || (c = d = null)) : g || (g = setTimeout(i, j)), e
        }
      },
      traverseUp: function (a, b) {
        if (!a) return !1
        do {
          if (a.nodeType === 1) {
            if (b(a)) return a
            if (h.isMediumEditorElement(a)) return !1
          }
          a = a.parentNode
        } while (a)
        return !1
      },
      htmlEntities: function (a) {
        return String(a).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
      },
      insertHTMLCommand: function (b, c) {
        let d; let e; let f; let g; let i; let j; let k; let l = !1
        const m = ['insertHTML', !1, c]
        if (!a.util.isEdge && b.queryCommandSupported('insertHTML')) {
          try {
            return b.execCommand.apply(b, m)
          } catch (n) {}
        }
        if (d = b.getSelection(), d.rangeCount) {
          if (e = d.getRangeAt(0), k = e.commonAncestorContainer, h.isMediumEditorElement(k) && !k.firstChild) e.selectNode(k.appendChild(b.createTextNode('')))
          else if (k.nodeType === 3 && e.startOffset === 0 && e.endOffset === k.nodeValue.length || k.nodeType !== 3 && k.innerHTML === e.toString()) {
            for (; !h.isMediumEditorElement(k) && k.parentNode && k.parentNode.childNodes.length === 1 && !h.isMediumEditorElement(k.parentNode);) k = k.parentNode
            e.selectNode(k)
          }
          for (e.deleteContents(), f = b.createElement('div'), f.innerHTML = c, g = b.createDocumentFragment(); f.firstChild;) i = f.firstChild, j = g.appendChild(i)
          e.insertNode(g), j && (e = e.cloneRange(), e.setStartAfter(j), e.collapse(!0), a.selection.selectRange(b, e)), l = !0
        }
        return b.execCommand.callListeners && b.execCommand.callListeners(m, l), l
      },
      execFormatBlock: function (b, c) {
        let d; const e = h.getTopBlockContainer(a.selection.getSelectionStart(b))
        if (c === 'blockquote') {
          if (e && (d = Array.prototype.slice.call(e.childNodes), d.some(function (a) {
            return h.isBlockContainer(a)
          }))) return b.execCommand('outdent', !1, null)
          if (h.isIE) return b.execCommand('indent', !1, c)
        }
        if (e && c === e.nodeName.toLowerCase() && (c = 'p'), h.isIE && (c = '<' + c + '>'), e && e.nodeName.toLowerCase() === 'blockquote') {
          if (h.isIE && c === '<p>') return b.execCommand('outdent', !1, c)
          if ((h.isFF || h.isEdge) && c === 'p') {
            return d = Array.prototype.slice.call(e.childNodes), d.some(function (a) {
              return !h.isBlockContainer(a)
            }) && b.execCommand('formatBlock', !1, c), b.execCommand('outdent', !1, c)
          }
        }
        return b.execCommand('formatBlock', !1, c)
      },
      setTargetBlank: function (a, b) {
        let c; const d = b || !1
        if (a.nodeName.toLowerCase() === 'a') a.target = '_blank', a.rel = 'noopener noreferrer'
        else { for (a = a.getElementsByTagName('a'), c = 0; c < a.length; c += 1) !1 !== d && d !== a[c].attributes.href.value || (a[c].target = '_blank', a[c].rel = 'noopener noreferrer') }
      },
      removeTargetBlank: function (a, b) {
        let c
        if (a.nodeName.toLowerCase() === 'a') a.removeAttribute('target'), a.removeAttribute('rel')
        else { for (a = a.getElementsByTagName('a'), c = 0; c < a.length; c += 1) b === a[c].attributes.href.value && (a[c].removeAttribute('target'), a[c].removeAttribute('rel')) }
      },
      addClassToAnchors: function (a, b) {
        let c; let d; const e = b.split(' ')
        if (a.nodeName.toLowerCase() === 'a') { for (d = 0; d < e.length; d += 1) a.classList.add(e[d]) } else {
          const f = a.getElementsByTagName('a')
          if (f.length === 0) {
            const g = h.getClosestTag(a, 'a')
            a = g ? [g] : []
          } else a = f
          for (c = 0; c < a.length; c += 1) { for (d = 0; d < e.length; d += 1) a[c].classList.add(e[d]) }
        }
      },
      isListItem: function (a) {
        if (!a) return !1
        if (a.nodeName.toLowerCase() === 'li') return !0
        for (let b = a.parentNode, c = b.nodeName.toLowerCase();
          c === 'li' || !h.isBlockContainer(b) && c !== 'div';) {
          if (c === 'li') return !0
          if (b = b.parentNode, !b) return !1
          c = b.nodeName.toLowerCase()
        }
        return !1
      },
      cleanListDOM: function (b, c) {
        if (c.nodeName.toLowerCase() === 'li') {
          const d = c.parentElement
          d.parentElement.nodeName.toLowerCase() === 'p' && (h.unwrap(d.parentElement, b), a.selection.moveCursor(b, c.firstChild, c.firstChild.textContent.length))
        }
      },
      splitOffDOMTree: function (a, b, c) {
        for (var d = b, e = null, f = !c; d !== a;) {
          var g; const h = d.parentNode
          const i = h.cloneNode(!1)
          let j = f ? d : h.firstChild
          for (e && (f ? i.appendChild(e) : g = e), e = i; j;) {
            const k = j.nextSibling
            j === d ? (j.hasChildNodes() ? j = j.cloneNode(!1) : j.parentNode.removeChild(j), j.textContent && e.appendChild(j), j = f ? k : null) : (j.parentNode.removeChild(j), (j.hasChildNodes() || j.textContent) && e.appendChild(j), j = k)
          }
          g && e.appendChild(g), d = h
        }
        return e
      },
      moveTextRangeIntoElement: function (a, b, c) {
        if (!a || !b) return !1
        const d = h.findCommonRoot(a, b)
        if (!d) return !1
        if (b === a) {
          const e = a.parentNode
          const f = a.nextSibling
          return e.removeChild(a), c.appendChild(a), f ? e.insertBefore(c, f) : e.appendChild(c), c.hasChildNodes()
        }
        for (var g, i, j, k = [], l = 0; l < d.childNodes.length; l++) {
          if (j = d.childNodes[l], g) {
            if (h.isDescendant(j, b, !0)) {
              i = j
              break
            }
            k.push(j)
          } else h.isDescendant(j, a, !0) && (g = j)
        }
        const m = i.nextSibling
        const n = d.ownerDocument.createDocumentFragment()
        return g === a ? (g.parentNode.removeChild(g), n.appendChild(g)) : n.appendChild(h.splitOffDOMTree(g, a)), k.forEach(function (a) {
          a.parentNode.removeChild(a), n.appendChild(a)
        }), i === b ? (i.parentNode.removeChild(i), n.appendChild(i)) : n.appendChild(h.splitOffDOMTree(i, b, !0)), c.appendChild(n), i.parentNode === d ? d.insertBefore(c, i) : m ? d.insertBefore(c, m) : d.appendChild(c), c.hasChildNodes()
      },
      depthOfNode: function (a) {
        for (var b = 0, c = a; c.parentNode !== null;) c = c.parentNode, b++
        return b
      },
      findCommonRoot: function (a, b) {
        for (var c = h.depthOfNode(a), d = h.depthOfNode(b), e = a, f = b; c !== d;) c > d ? (e = e.parentNode, c -= 1) : (f = f.parentNode, d -= 1)
        for (; e !== f;) e = e.parentNode, f = f.parentNode
        return e
      },
      isElementAtBeginningOfBlock: function (a) {
        for (var b, c; !h.isBlockContainer(a) && !h.isMediumEditorElement(a);) {
          for (c = a; c = c.previousSibling;) { if (b = c.nodeType === 3 ? c.nodeValue : c.textContent, b.length > 0) return !1 }
          a = a.parentNode
        }
        return !0
      },
      isMediumEditorElement: function (a) {
        return a && a.getAttribute && !!a.getAttribute('data-medium-editor-element')
      },
      getContainerEditorElement: function (a) {
        return h.traverseUp(a, function (a) {
          return h.isMediumEditorElement(a)
        })
      },
      isBlockContainer: function (a) {
        return a && a.nodeType !== 3 && h.blockContainerElementNames.indexOf(a.nodeName.toLowerCase()) !== -1
      },
      getClosestBlockContainer: function (a) {
        return h.traverseUp(a, function (a) {
          return h.isBlockContainer(a) || h.isMediumEditorElement(a)
        })
      },
      getTopBlockContainer: function (a) {
        let b = h.isBlockContainer(a) ? a : !1
        return h.traverseUp(a, function (a) {
          return h.isBlockContainer(a) && (b = a), !b && h.isMediumEditorElement(a) ? (b = a, !0) : !1
        }), b
      },
      getFirstSelectableLeafNode: function (a) {
        for (; a && a.firstChild;) a = a.firstChild
        if (a = h.traverseUp(a, function (a) {
          return h.emptyElementNames.indexOf(a.nodeName.toLowerCase()) === -1
        }), a.nodeName.toLowerCase() === 'table') {
          const b = a.querySelector('th, td')
          b && (a = b)
        }
        return a
      },
      getFirstTextNode: function (a) {
        return h.warn('getFirstTextNode is deprecated and will be removed in version 6.0.0'), h._getFirstTextNode(a)
      },
      _getFirstTextNode: function (a) {
        if (a.nodeType === 3) return a
        for (let b = 0; b < a.childNodes.length; b++) {
          const c = h._getFirstTextNode(a.childNodes[b])
          if (c !== null) return c
        }
        return null
      },
      ensureUrlHasProtocol: function (a) {
        return a.indexOf('://') === -1 ? 'http://' + a : a
      },
      warn: function () {
        void 0 !== b.console && typeof b.console.warn === 'function' && b.console.warn.apply(b.console, arguments)
      },
      deprecated: function (a, b, c) {
        let d = a + ' is deprecated, please use ' + b + ' instead.'
        c && (d += ' Will be removed in ' + c), h.warn(d)
      },
      deprecatedMethod: function (a, b, c, d) {
        h.deprecated(a, b, d), typeof this[b] === 'function' && this[b].apply(this, c)
      },
      cleanupAttrs: function (a, b) {
        b.forEach(function (b) {
          a.removeAttribute(b)
        })
      },
      cleanupTags: function (a, b) {
        b.indexOf(a.nodeName.toLowerCase()) !== -1 && a.parentNode.removeChild(a)
      },
      unwrapTags: function (b, c) {
        c.indexOf(b.nodeName.toLowerCase()) !== -1 && a.util.unwrap(b, document)
      },
      getClosestTag: function (a, b) {
        return h.traverseUp(a, function (a) {
          return a.nodeName.toLowerCase() === b.toLowerCase()
        })
      },
      unwrap: function (a, b) {
        for (var c = b.createDocumentFragment(), d = Array.prototype.slice.call(a.childNodes), e = 0; e < d.length; e++) c.appendChild(d[e])
        c.childNodes.length ? a.parentNode.replaceChild(c, a) : a.parentNode.removeChild(a)
      },
      guid: function () {
        function a () {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return a() + a() + '-' + a() + '-' + a() + '-' + a() + '-' + a() + a() + a()
      }
    }
    a.util = h
  }(window)),
  (function () {
    const b = function (b) {
      a.util.extend(this, b)
    }
    b.extend = function (b) {
      let c; const d = this
      c = b && b.hasOwnProperty('constructor') ? b.constructor : function () {
        return d.apply(this, arguments)
      }, a.util.extend(c, d)
      const e = function () {
        this.constructor = c
      }
      return e.prototype = d.prototype, c.prototype = new e(), b && a.util.extend(c.prototype, b), c
    }, b.prototype = {
      init: function () {},
      base: void 0,
      name: void 0,
      checkState: void 0,
      destroy: void 0,
      queryCommandState: void 0,
      isActive: void 0,
      isAlreadyApplied: void 0,
      setActive: void 0,
      setInactive: void 0,
      getInteractionElements: void 0,
      window: void 0,
      document: void 0,
      getEditorElements: function () {
        return this.base.elements
      },
      getEditorId: function () {
        return this.base.id
      },
      getEditorOption: function (a) {
        return this.base.options[a]
      }
    }, ['execAction', 'on', 'off', 'subscribe', 'trigger'].forEach(function (a) {
      b.prototype[a] = function () {
        return this.base[a].apply(this.base, arguments)
      }
    }), a.Extension = b
  }()),
  (function () {
    function b (b) {
      return a.util.isBlockContainer(b) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
    }
    const c = {
      findMatchingSelectionParent: function (b, c) {
        let d; let e; const f = c.getSelection()
        return f.rangeCount === 0 ? !1 : (d = f.getRangeAt(0), e = d.commonAncestorContainer, a.util.traverseUp(e, b))
      },
      getSelectionElement: function (b) {
        return this.findMatchingSelectionParent(function (b) {
          return a.util.isMediumEditorElement(b)
        }, b)
      },
      exportSelection: function (a, b) {
        if (!a) return null
        let c = null
        const d = b.getSelection()
        if (d.rangeCount > 0) {
          let e; const f = d.getRangeAt(0)
          const g = f.cloneRange()
          g.selectNodeContents(a), g.setEnd(f.startContainer, f.startOffset), e = g.toString().length, c = {
            start: e,
            end: e + f.toString().length
          }, this.doesRangeStartWithImages(f, b) && (c.startsWithImage = !0)
          const h = this.getTrailingImageCount(a, c, f.endContainer, f.endOffset)
          if (h && (c.trailingImageCount = h), e !== 0) {
            const i = this.getIndexRelativeToAdjacentEmptyBlocks(b, a, f.startContainer, f.startOffset); i !== -1 && (c.emptyBlocksIndex = i)
          }
        }
        return c
      },
      importSelection: function (a, b, c, d) {
        if (a && b) {
          let e = c.createRange()
          e.setStart(b, 0), e.collapse(!0)
          let f; let g = b
          const h = []
          let i = 0
          let j = !1
          let k = !1
          let l = 0
          let m = !1
          let n = !1
          let o = null
          for ((d || a.startsWithImage || typeof a.emptyBlocksIndex !== 'undefined') && (n = !0); !m && g;) {
            if (g.nodeType > 3) g = h.pop()
            else {
              if (g.nodeType !== 3 || k) {
                if (a.trailingImageCount && k && (g.nodeName.toLowerCase() === 'img' && l++, l === a.trailingImageCount)) {
                  for (var p = 0; g.parentNode.childNodes[p] !== g;) p++
                  e.setEnd(g.parentNode, p + 1), m = !0
                }
                if (!m && g.nodeType === 1) { for (let q = g.childNodes.length - 1; q >= 0;) h.push(g.childNodes[q]), q -= 1 }
              } else f = i + g.length, !j && a.start >= i && a.start <= f && (n || a.start < f ? (e.setStart(g, a.start - i), j = !0) : o = g), j && a.end >= i && a.end <= f && (a.trailingImageCount ? k = !0 : (e.setEnd(g, a.end - i), m = !0)), i = f
              m || (g = h.pop())
            }
          }!j && o && (e.setStart(o, o.length), e.setEnd(o, o.length)), typeof a.emptyBlocksIndex !== 'undefined' && (e = this.importSelectionMoveCursorPastBlocks(c, b, a.emptyBlocksIndex, e)), d && (e = this.importSelectionMoveCursorPastAnchor(a, e)), this.selectRange(c, e)
        }
      },
      importSelectionMoveCursorPastAnchor: function (b, c) {
        const d = function (a) {
          return a.nodeName.toLowerCase() === 'a'
        }
        if (b.start === b.end && c.startContainer.nodeType === 3 && c.startOffset === c.startContainer.nodeValue.length && a.util.traverseUp(c.startContainer, d)) {
          for (var e = c.startContainer, f = c.startContainer.parentNode; f !== null && f.nodeName.toLowerCase() !== 'a';) f.childNodes[f.childNodes.length - 1] !== e ? f = null : (e = f, f = f.parentNode)
          if (f !== null && f.nodeName.toLowerCase() === 'a') {
            for (var g = null, h = 0; g === null && h < f.parentNode.childNodes.length; h++) f.parentNode.childNodes[h] === f && (g = h)
            c.setStart(f.parentNode, g + 1), c.collapse(!0)
          }
        }
        return c
      },
      importSelectionMoveCursorPastBlocks: function (c, d, e, f) {
        let g; let h; const i = c.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, b, !1)
        const j = f.startContainer
        let k = 0
        for (e = e || 1, g = j.nodeType === 3 && a.util.isBlockContainer(j.previousSibling) ? j.previousSibling : a.util.getClosestBlockContainer(j); i.nextNode();) {
          if (h) {
            if (h = i.currentNode, k++, k === e) break
            if (h.textContent.length > 0) break
          } else g === i.currentNode && (h = i.currentNode)
        }
        return h || (h = g), f.setStart(a.util.getFirstSelectableLeafNode(h), 0), f
      },
      getIndexRelativeToAdjacentEmptyBlocks: function (c, d, e, f) {
        if (e.textContent.length > 0 && f > 0) return -1
        let g = e
        if (g.nodeType !== 3 && (g = e.childNodes[f]), g) {
          if (!a.util.isElementAtBeginningOfBlock(g)) return -1
          const h = a.util.findPreviousSibling(g)
          if (!h) return -1
          if (h.nodeValue) return -1
        }
        for (var i = a.util.getClosestBlockContainer(e), j = c.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, b, !1), k = 0; j.nextNode();) {
          const l = j.currentNode.textContent === ''
          if ((l || k > 0) && (k += 1), j.currentNode === i) return k
          l || (k = 0)
        }
        return k
      },
      doesRangeStartWithImages: function (a, b) {
        if (a.startOffset !== 0 || a.startContainer.nodeType !== 1) return !1
        if (a.startContainer.nodeName.toLowerCase() === 'img') return !0
        const c = a.startContainer.querySelector('img')
        if (!c) return !1
        for (let d = b.createTreeWalker(a.startContainer, NodeFilter.SHOW_ALL, null, !1); d.nextNode();) {
          const e = d.currentNode
          if (e === c) break
          if (e.nodeValue) return !1
        }
        return !0
      },
      getTrailingImageCount: function (a, b, c, d) {
        if (d === 0 || c.nodeType !== 1) return 0
        if (c.nodeName.toLowerCase() !== 'img' && !c.querySelector('img')) return 0
        for (var e = c.childNodes[d - 1]; e.hasChildNodes();) e = e.lastChild
        for (var f, g = a, h = [], i = 0, j = !1, k = !1, l = !1, m = 0; !l && g;) {
          if (g.nodeType > 3) g = h.pop()
          else {
            if (g.nodeType !== 3 || k) {
              if (g.nodeName.toLowerCase() === 'img' && m++, g === e) l = !0
              else if (g.nodeType === 1) { for (let n = g.childNodes.length - 1; n >= 0;) h.push(g.childNodes[n]), n -= 1 }
            } else m = 0, f = i + g.length, !j && b.start >= i && b.start <= f && (j = !0), j && b.end >= i && b.end <= f && (k = !0), i = f
            l || (g = h.pop())
          }
        } return m
      },
      selectionContainsContent: function (a) {
        const b = a.getSelection()
        if (!b || b.isCollapsed || !b.rangeCount) return !1
        if (b.toString().trim() !== '') return !0
        const c = this.getSelectedParentElement(b.getRangeAt(0))
        return !(!c || !(c.nodeName.toLowerCase() === 'img' || c.nodeType === 1 && c.querySelector('img')))
      },
      selectionInContentEditableFalse: function (a) {
        let b; const c = this.findMatchingSelectionParent(function (a) {
          const c = a && a.getAttribute('contenteditable')
          return c === 'true' && (b = !0), a.nodeName !== '#text' && c === 'false'
        }, a)
        return !b && c
      },
      getSelectionHtml: function (a) {
        let b; let c; let d; let e = ''
        const f = a.getSelection()
        if (f.rangeCount) {
          for (d = a.createElement('div'), b = 0, c = f.rangeCount; c > b; b += 1) d.appendChild(f.getRangeAt(b).cloneContents())
          e = d.innerHTML
        }
        return e
      },
      getCaretOffsets: function (a, b) {
        let c, d
        return b || (b = window.getSelection().getRangeAt(0)), c = b.cloneRange(), d = b.cloneRange(), c.selectNodeContents(a), c.setEnd(b.endContainer, b.endOffset), d.selectNodeContents(a), d.setStart(b.endContainer, b.endOffset), {
          left: c.toString().length,
          right: d.toString().length
        }
      },
      rangeSelectsSingleNode: function (a) {
        const b = a.startContainer
        return b === a.endContainer && b.hasChildNodes() && a.endOffset === a.startOffset + 1
      },
      getSelectedParentElement: function (a) {
        return a ? this.rangeSelectsSingleNode(a) && a.startContainer.childNodes[a.startOffset].nodeType !== 3 ? a.startContainer.childNodes[a.startOffset] : a.startContainer.nodeType === 3 ? a.startContainer.parentNode : a.startContainer : null
      },
      getSelectedElements: function (a) {
        let b; let c; let d; const e = a.getSelection()
        if (!e.rangeCount || e.isCollapsed || !e.getRangeAt(0).commonAncestorContainer) return []
        if (b = e.getRangeAt(0), b.commonAncestorContainer.nodeType === 3) {
          for (c = [], d = b.commonAncestorContainer; d.parentNode && d.parentNode.childNodes.length === 1;) c.push(d.parentNode), d = d.parentNode
          return c
        }
        return [].filter.call(b.commonAncestorContainer.getElementsByTagName('*'), function (a) {
          return typeof e.containsNode === 'function' ? e.containsNode(a, !0) : !0
        })
      },
      selectNode: function (a, b) {
        const c = b.createRange()
        c.selectNodeContents(a), this.selectRange(b, c)
      },
      select: function (a, b, c, d, e) {
        const f = a.createRange()
        return f.setStart(b, c), d ? f.setEnd(d, e) : f.collapse(!0), this.selectRange(a, f), f
      },
      clearSelection: function (a, b) {
        b ? a.getSelection().collapseToStart() : a.getSelection().collapseToEnd()
      },
      moveCursor: function (a, b, c) {
        this.select(a, b, c)
      },
      getSelectionRange: function (a) {
        const b = a.getSelection()
        return b.rangeCount === 0 ? null : b.getRangeAt(0)
      },
      selectRange: function (a, b) {
        const c = a.getSelection()
        c.removeAllRanges(), c.addRange(b)
      },
      getSelectionStart: function (a) {
        const b = a.getSelection().anchorNode
        const c = b && b.nodeType === 3 ? b.parentNode : b
        return c
      }
    }
    a.selection = c
  }()),
  (function () {
    function b (b, c) {
      return b ? b.some(function (b) {
        if (typeof b.getInteractionElements !== 'function') return !1
        let d = b.getInteractionElements()
        return d ? (Array.isArray(d) || (d = [d]), d.some(function (b) {
          return a.util.isDescendant(b, c, !0)
        })) : !1
      }) : !1
    }
    const c = function (a) {
      this.base = a, this.options = this.base.options, this.events = [], this.disabledEvents = {}, this.customEvents = {}, this.listeners = {}
    }
    c.prototype = {
      InputEventOnContenteditableSupported: !a.util.isIE && !a.util.isEdge,
      attachDOMEvent: function (b, c, d, e) {
        const f = this.base.options.contentWindow
        const g = this.base.options.ownerDocument
        b = a.util.isElement(b) || [f, g].indexOf(b) > -1 ? [b] : b, Array.prototype.forEach.call(b, function (a) {
          a.addEventListener(c, d, e), this.events.push([a, c, d, e])
        }.bind(this))
      },
      detachDOMEvent: function (b, c, d, e) {
        let f; let g; const h = this.base.options.contentWindow
        const i = this.base.options.ownerDocument
        b && (b = a.util.isElement(b) || [h, i].indexOf(b) > -1 ? [b] : b, Array.prototype.forEach.call(b, function (a) {
          f = this.indexOfListener(a, c, d, e), f !== -1 && (g = this.events.splice(f, 1)[0], g[0].removeEventListener(g[1], g[2], g[3]))
        }.bind(this)))
      },
      indexOfListener: function (a, b, c, d) {
        let e, f, g
        for (e = 0, f = this.events.length; f > e; e += 1) { if (g = this.events[e], g[0] === a && g[1] === b && g[2] === c && g[3] === d) return e }
        return -1
      },
      detachAllDOMEvents: function () {
        for (let a = this.events.pop(); a;) a[0].removeEventListener(a[1], a[2], a[3]), a = this.events.pop()
      },
      detachAllEventsFromElement: function (a) {
        for (let b = this.events.filter(function (b) {
            return b && b[0].getAttribute && b[0].getAttribute('medium-editor-index') === a.getAttribute('medium-editor-index')
          }), c = 0, d = b.length; d > c; c++) {
          const e = b[c]
          this.detachDOMEvent(e[0], e[1], e[2], e[3])
        }
      },
      attachAllEventsToElement: function (a) {
        this.listeners.editableInput && (this.contentCache[a.getAttribute('medium-editor-index')] = a.innerHTML), this.eventsCache && this.eventsCache.forEach(function (b) {
          this.attachDOMEvent(a, b.name, b.handler.bind(this))
        }, this)
      },
      enableCustomEvent: function (a) {
        void 0 !== this.disabledEvents[a] && delete this.disabledEvents[a]
      },
      disableCustomEvent: function (a) {
        this.disabledEvents[a] = !0
      },
      attachCustomEvent: function (a, b) {
        this.setupListener(a), this.customEvents[a] || (this.customEvents[a] = []), this.customEvents[a].push(b)
      },
      detachCustomEvent: function (a, b) {
        const c = this.indexOfCustomListener(a, b); c !== -1 && this.customEvents[a].splice(c, 1)
      },
      indexOfCustomListener: function (a, b) {
        return this.customEvents[a] && this.customEvents[a].length ? this.customEvents[a].indexOf(b) : -1
      },
      detachAllCustomEvents: function () {
        this.customEvents = {}
      },
      triggerCustomEvent: function (a, b, c) {
        this.customEvents[a] && !this.disabledEvents[a] && this.customEvents[a].forEach(function (a) {
          a(b, c)
        })
      },
      destroy: function () {
        this.detachAllDOMEvents(), this.detachAllCustomEvents(), this.detachExecCommand(), this.base.elements && this.base.elements.forEach(function (a) {
          a.removeAttribute('data-medium-focused')
        })
      },
      attachToExecCommand: function () {
        this.execCommandListener || (this.execCommandListener = function (a) {
          this.handleDocumentExecCommand(a)
        }.bind(this), this.wrapExecCommand(), this.options.ownerDocument.execCommand.listeners.push(this.execCommandListener))
      },
      detachExecCommand: function () {
        const a = this.options.ownerDocument
        if (this.execCommandListener && a.execCommand.listeners) {
          const b = a.execCommand.listeners.indexOf(this.execCommandListener); b !== -1 && a.execCommand.listeners.splice(b, 1), a.execCommand.listeners.length || this.unwrapExecCommand()
        }
      },
      wrapExecCommand: function () {
        const a = this.options.ownerDocument
        if (!a.execCommand.listeners) {
          const b = function (b, c) {
            a.execCommand.listeners && a.execCommand.listeners.forEach(function (a) {
              a({
                command: b[0],
                value: b[2],
                args: b,
                result: c
              })
            })
          }
          const c = function () {
            const c = a.execCommand.orig.apply(this, arguments)
            if (!a.execCommand.listeners) return c
            const d = Array.prototype.slice.call(arguments)
            return b(d, c), c
          }
          c.orig = a.execCommand, c.listeners = [], c.callListeners = b, a.execCommand = c
        }
      },
      unwrapExecCommand: function () {
        const a = this.options.ownerDocument
        a.execCommand.orig && (a.execCommand = a.execCommand.orig)
      },
      setupListener: function (a) {
        if (!this.listeners[a]) {
          switch (a) {
            case 'externalInteraction':
              this.attachDOMEvent(this.options.ownerDocument.body, 'mousedown', this.handleBodyMousedown.bind(this), !0), this.attachDOMEvent(this.options.ownerDocument.body, 'click', this.handleBodyClick.bind(this), !0), this.attachDOMEvent(this.options.ownerDocument.body, 'focus', this.handleBodyFocus.bind(this), !0)
              break
            case 'blur':
              this.setupListener('externalInteraction')
              break
            case 'focus':
              this.setupListener('externalInteraction')
              break
            case 'editableInput':
              this.contentCache = {}, this.base.elements.forEach(function (a) {
                this.contentCache[a.getAttribute('medium-editor-index')] = a.innerHTML
              }, this), this.InputEventOnContenteditableSupported && this.attachToEachElement('input', this.handleInput), this.InputEventOnContenteditableSupported || (this.setupListener('editableKeypress'), this.keypressUpdateInput = !0, this.attachDOMEvent(document, 'selectionchange', this.handleDocumentSelectionChange.bind(this)), this.attachToExecCommand())
              break
            case 'editableClick':
              this.attachToEachElement('click', this.handleClick)
              break
            case 'editableBlur':
              this.attachToEachElement('blur', this.handleBlur)
              break
            case 'editableKeypress':
              this.attachToEachElement('keypress', this.handleKeypress)
              break
            case 'editableKeyup':
              this.attachToEachElement('keyup', this.handleKeyup)
              break
            case 'editableKeydown':
              this.attachToEachElement('keydown', this.handleKeydown)
              break
            case 'editableKeydownSpace':
              this.setupListener('editableKeydown')
              break
            case 'editableKeydownEnter':
              this.setupListener('editableKeydown')
              break
            case 'editableKeydownTab':
              this.setupListener('editableKeydown')
              break
            case 'editableKeydownDelete':
              this.setupListener('editableKeydown')
              break
            case 'editableMouseover':
              this.attachToEachElement('mouseover', this.handleMouseover)
              break
            case 'editableDrag':
              this.attachToEachElement('dragover', this.handleDragging), this.attachToEachElement('dragleave', this.handleDragging)
              break
            case 'editableDrop':
              this.attachToEachElement('drop', this.handleDrop)
              break
            case 'editablePaste':
              this.attachToEachElement('paste', this.handlePaste)
          }
          this.listeners[a] = !0
        }
      },
      attachToEachElement: function (a, b) {
        this.eventsCache || (this.eventsCache = []), this.base.elements.forEach(function (c) {
          this.attachDOMEvent(c, a, b.bind(this))
        }, this), this.eventsCache.push({
          name: a,
          handler: b
        })
      },
      cleanupElement: function (a) {
        const b = a.getAttribute('medium-editor-index')
        b && (this.detachAllEventsFromElement(a), this.contentCache && delete this.contentCache[b])
      },
      focusElement: function (a) {
        a.focus(), this.updateFocus(a, {
          target: a,
          type: 'focus'
        })
      },
      updateFocus: function (c, d) {
        let e; const f = this.base.getFocusedElement()
        f && d.type === 'click' && this.lastMousedownTarget && (a.util.isDescendant(f, this.lastMousedownTarget, !0) || b(this.base.extensions, this.lastMousedownTarget)) && (e = f), e || this.base.elements.some(function (b) {
          return !e && a.util.isDescendant(b, c, !0) && (e = b), !!e
        }, this)
        const g = !a.util.isDescendant(f, c, !0) && !b(this.base.extensions, c)
        e !== f && (f && g && (f.removeAttribute('data-medium-focused'), this.triggerCustomEvent('blur', d, f)), e && (e.setAttribute('data-medium-focused', !0), this.triggerCustomEvent('focus', d, e))), g && this.triggerCustomEvent('externalInteraction', d)
      },
      updateInput: function (a, b) {
        if (this.contentCache) {
          const c = a.getAttribute('medium-editor-index')
          const d = a.innerHTML
          d !== this.contentCache[c] && this.triggerCustomEvent('editableInput', b, a), this.contentCache[c] = d
        }
      },
      handleDocumentSelectionChange: function (b) {
        if (b.currentTarget && b.currentTarget.activeElement) {
          let c; const d = b.currentTarget.activeElement
          this.base.elements.some(function (b) {
            return a.util.isDescendant(b, d, !0) ? (c = b, !0) : !1
          }, this), c && this.updateInput(c, {
            target: d,
            currentTarget: c
          })
        }
      },
      handleDocumentExecCommand: function () {
        const a = this.base.getFocusedElement()
        a && this.updateInput(a, {
          target: a,
          currentTarget: a
        })
      },
      handleBodyClick: function (a) {
        this.updateFocus(a.target, a)
      },
      handleBodyFocus: function (a) {
        this.updateFocus(a.target, a)
      },
      handleBodyMousedown: function (a) {
        this.lastMousedownTarget = a.target
      },
      handleInput: function (a) {
        this.updateInput(a.currentTarget, a)
      },
      handleClick: function (a) {
        this.triggerCustomEvent('editableClick', a, a.currentTarget)
      },
      handleBlur: function (a) {
        this.triggerCustomEvent('editableBlur', a, a.currentTarget)
      },
      handleKeypress: function (a) {
        if (this.triggerCustomEvent('editableKeypress', a, a.currentTarget), this.keypressUpdateInput) {
          const b = {
            target: a.target,
            currentTarget: a.currentTarget
          }
          setTimeout(function () {
            this.updateInput(b.currentTarget, b)
          }.bind(this), 0)
        }
      },
      handleKeyup: function (a) {
        this.triggerCustomEvent('editableKeyup', a, a.currentTarget)
      },
      handleMouseover: function (a) {
        this.triggerCustomEvent('editableMouseover', a, a.currentTarget)
      },
      handleDragging: function (a) {
        this.triggerCustomEvent('editableDrag', a, a.currentTarget)
      },
      handleDrop: function (a) {
        this.triggerCustomEvent('editableDrop', a, a.currentTarget)
      },
      handlePaste: function (a) {
        this.triggerCustomEvent('editablePaste', a, a.currentTarget)
      },
      handleKeydown: function (b) {
        return this.triggerCustomEvent('editableKeydown', b, b.currentTarget), a.util.isKey(b, a.util.keyCode.SPACE) ? this.triggerCustomEvent('editableKeydownSpace', b, b.currentTarget) : a.util.isKey(b, a.util.keyCode.ENTER) || b.ctrlKey && a.util.isKey(b, a.util.keyCode.M) ? this.triggerCustomEvent('editableKeydownEnter', b, b.currentTarget) : a.util.isKey(b, a.util.keyCode.TAB) ? this.triggerCustomEvent('editableKeydownTab', b, b.currentTarget) : a.util.isKey(b, [a.util.keyCode.DELETE, a.util.keyCode.BACKSPACE]) ? this.triggerCustomEvent('editableKeydownDelete', b, b.currentTarget) : void 0
      }
    }, a.Events = c
  }()),
  (function () {
    var b = a.Extension.extend({
      action: void 0,
      aria: void 0,
      tagNames: void 0,
      style: void 0,
      useQueryState: void 0,
      contentDefault: void 0,
      contentFA: void 0,
      classList: void 0,
      attrs: void 0,
      constructor: function (c) {
        b.isBuiltInButton(c) ? a.Extension.call(this, this.defaults[c]) : a.Extension.call(this, c)
      },
      init: function () {
        a.Extension.prototype.init.apply(this, arguments), this.button = this.createButton(), this.on(this.button, 'click', this.handleClick.bind(this))
      },
      getButton: function () {
        return this.button
      },
      getAction: function () {
        return typeof this.action === 'function' ? this.action(this.base.options) : this.action
      },
      getAria: function () {
        return typeof this.aria === 'function' ? this.aria(this.base.options) : this.aria
      },
      getTagNames: function () {
        return typeof this.tagNames === 'function' ? this.tagNames(this.base.options) : this.tagNames
      },
      createButton: function () {
        const a = this.document.createElement('button')
        let b = this.contentDefault
        const c = this.getAria()
        const d = this.getEditorOption('buttonLabels')
        return a.classList.add('medium-editor-action'), a.classList.add('medium-editor-action-' + this.name), this.classList && this.classList.forEach(function (b) {
          a.classList.add(b)
        }), a.setAttribute('data-action', this.getAction()), c && (a.setAttribute('title', c), a.setAttribute('aria-label', c)), this.attrs && Object.keys(this.attrs).forEach(function (b) {
          a.setAttribute(b, this.attrs[b])
        }, this), d === 'fontawesome' && this.contentFA && (b = this.contentFA), a.innerHTML = b, a
      },
      handleClick: function (a) {
        a.preventDefault(), a.stopPropagation()
        const b = this.getAction()
        b && this.execAction(b)
      },
      isActive: function () {
        return this.button.classList.contains(this.getEditorOption('activeButtonClass'))
      },
      setInactive: function () {
        this.button.classList.remove(this.getEditorOption('activeButtonClass')), delete this.knownState
      },
      setActive: function () {
        this.button.classList.add(this.getEditorOption('activeButtonClass')), delete this.knownState
      },
      queryCommandState: function () {
        let a = null
        return this.useQueryState && (a = this.base.queryCommandState(this.getAction())), a
      },
      isAlreadyApplied: function (a) {
        let b; let c; let d = !1
        const e = this.getTagNames()
        return this.knownState === !1 || this.knownState === !0 ? this.knownState : (e && e.length > 0 && (d = e.indexOf(a.nodeName.toLowerCase()) !== -1), !d && this.style && (b = this.style.value.split('|'), c = this.window.getComputedStyle(a, null).getPropertyValue(this.style.prop), b.forEach(function (a) {
          this.knownState || (d = c.indexOf(a) !== -1, (d || this.style.prop !== 'text-decoration') && (this.knownState = d))
        }, this)), d)
      }
    })
    b.isBuiltInButton = function (b) {
      return typeof b === 'string' && a.extensions.button.prototype.defaults.hasOwnProperty(b)
    }, a.extensions.button = b
  }()),
  (function () {
    a.extensions.button.prototype.defaults = {
      bold: {
        name: 'bold',
        action: 'bold',
        aria: 'bold',
        tagNames: ['b', 'strong'],
        style: {
          prop: 'font-weight',
          value: '700|bold'
        },
        useQueryState: !0,
        contentDefault: '<b>B</b>',
        contentFA: '<i class="fa fa-bold"></i>'
      },
      italic: {
        name: 'italic',
        action: 'italic',
        aria: 'italic',
        tagNames: ['i', 'em'],
        style: {
          prop: 'font-style',
          value: 'italic'
        },
        useQueryState: !0,
        contentDefault: '<b><i>I</i></b>',
        contentFA: '<i class="fa fa-italic"></i>'
      },
      underline: {
        name: 'underline',
        action: 'underline',
        aria: 'underline',
        tagNames: ['u'],
        style: {
          prop: 'text-decoration',
          value: 'underline'
        },
        useQueryState: !0,
        contentDefault: '<b><u>U</u></b>',
        contentFA: '<i class="fa fa-underline"></i>'
      },
      strikethrough: {
        name: 'strikethrough',
        action: 'strikethrough',
        aria: 'strike through',
        tagNames: ['strike'],
        style: {
          prop: 'text-decoration',
          value: 'line-through'
        },
        useQueryState: !0,
        contentDefault: '<s>A</s>',
        contentFA: '<i class="fa fa-strikethrough"></i>'
      },
      superscript: {
        name: 'superscript',
        action: 'superscript',
        aria: 'superscript',
        tagNames: ['sup'],
        contentDefault: '<b>x<sup>1</sup></b>',
        contentFA: '<i class="fa fa-superscript"></i>'
      },
      subscript: {
        name: 'subscript',
        action: 'subscript',
        aria: 'subscript',
        tagNames: ['sub'],
        contentDefault: '<b>x<sub>1</sub></b>',
        contentFA: '<i class="fa fa-subscript"></i>'
      },
      image: {
        name: 'image',
        action: 'image',
        aria: 'image',
        tagNames: ['img'],
        contentDefault: '<b>image</b>',
        contentFA: '<i class="fa fa-picture-o"></i>'
      },
      html: {
        name: 'html',
        action: 'html',
        aria: 'evaluate html',
        tagNames: ['iframe', 'object'],
        contentDefault: '<b>html</b>',
        contentFA: '<i class="fa fa-code"></i>'
      },
      orderedlist: {
        name: 'orderedlist',
        action: 'insertorderedlist',
        aria: 'ordered list',
        tagNames: ['ol'],
        useQueryState: !0,
        contentDefault: '<b>1.</b>',
        contentFA: '<i class="fa fa-list-ol"></i>'
      },
      unorderedlist: {
        name: 'unorderedlist',
        action: 'insertunorderedlist',
        aria: 'unordered list',
        tagNames: ['ul'],
        useQueryState: !0,
        contentDefault: '<b>&bull;</b>',
        contentFA: '<i class="fa fa-list-ul"></i>'
      },
      indent: {
        name: 'indent',
        action: 'indent',
        aria: 'indent',
        tagNames: [],
        contentDefault: '<b>&rarr;</b>',
        contentFA: '<i class="fa fa-indent"></i>'
      },
      outdent: {
        name: 'outdent',
        action: 'outdent',
        aria: 'outdent',
        tagNames: [],
        contentDefault: '<b>&larr;</b>',
        contentFA: '<i class="fa fa-outdent"></i>'
      },
      justifyCenter: {
        name: 'justifyCenter',
        action: 'justifyCenter',
        aria: 'center justify',
        tagNames: [],
        style: {
          prop: 'text-align',
          value: 'center'
        },
        contentDefault: '<b>C</b>',
        contentFA: '<i class="fa fa-align-center"></i>'
      },
      justifyFull: {
        name: 'justifyFull',
        action: 'justifyFull',
        aria: 'full justify',
        tagNames: [],
        style: {
          prop: 'text-align',
          value: 'justify'
        },
        contentDefault: '<b>J</b>',
        contentFA: '<i class="fa fa-align-justify"></i>'
      },
      justifyLeft: {
        name: 'justifyLeft',
        action: 'justifyLeft',
        aria: 'left justify',
        tagNames: [],
        style: {
          prop: 'text-align',
          value: 'left'
        },
        contentDefault: '<b>L</b>',
        contentFA: '<i class="fa fa-align-left"></i>'
      },
      justifyRight: {
        name: 'justifyRight',
        action: 'justifyRight',
        aria: 'right justify',
        tagNames: [],
        style: {
          prop: 'text-align',
          value: 'right'
        },
        contentDefault: '<b>R</b>',
        contentFA: '<i class="fa fa-align-right"></i>'
      },
      removeFormat: {
        name: 'removeFormat',
        aria: 'remove formatting',
        action: 'removeFormat',
        contentDefault: '<b>X</b>',
        contentFA: '<i class="fa fa-eraser"></i>'
      },
      quote: {
        name: 'quote',
        action: 'append-blockquote',
        aria: 'blockquote',
        tagNames: ['blockquote'],
        contentDefault: '<b>&ldquo;</b>',
        contentFA: '<i class="fa fa-quote-right"></i>'
      },
      pre: {
        name: 'pre',
        action: 'append-pre',
        aria: 'preformatted text',
        tagNames: ['pre'],
        contentDefault: '<b>0101</b>',
        contentFA: '<i class="fa fa-code fa-lg"></i>'
      },
      h1: {
        name: 'h1',
        action: 'append-h1',
        aria: 'header type one',
        tagNames: ['h1'],
        contentDefault: '<b>H1</b>',
        contentFA: '<i class="fa fa-header"><sup>1</sup>'
      },
      h2: {
        name: 'h2',
        action: 'append-h2',
        aria: 'header type two',
        tagNames: ['h2'],
        contentDefault: '<b>H2</b>',
        contentFA: '<i class="fa fa-header"><sup>2</sup>'
      },
      h3: {
        name: 'h3',
        action: 'append-h3',
        aria: 'header type three',
        tagNames: ['h3'],
        contentDefault: '<b>H3</b>',
        contentFA: '<i class="fa fa-header"><sup>3</sup>'
      },
      h4: {
        name: 'h4',
        action: 'append-h4',
        aria: 'header type four',
        tagNames: ['h4'],
        contentDefault: '<b>H4</b>',
        contentFA: '<i class="fa fa-header"><sup>4</sup>'
      },
      h5: {
        name: 'h5',
        action: 'append-h5',
        aria: 'header type five',
        tagNames: ['h5'],
        contentDefault: '<b>H5</b>',
        contentFA: '<i class="fa fa-header"><sup>5</sup>'
      },
      h6: {
        name: 'h6',
        action: 'append-h6',
        aria: 'header type six',
        tagNames: ['h6'],
        contentDefault: '<b>H6</b>',
        contentFA: '<i class="fa fa-header"><sup>6</sup>'
      }
    }
  }()),
  (function () {
    const b = a.extensions.button.extend({
      init: function () {
        a.extensions.button.prototype.init.apply(this, arguments)
      },
      formSaveLabel: '&#10003;',
      formCloseLabel: '&times;',
      activeClass: 'medium-editor-toolbar-form-active',
      hasForm: !0,
      getForm: function () {},
      isDisplayed: function () {
        return this.hasForm ? this.getForm().classList.contains(this.activeClass) : !1
      },
      showForm: function () {
        this.hasForm && this.getForm().classList.add(this.activeClass)
      },
      hideForm: function () {
        this.hasForm && this.getForm().classList.remove(this.activeClass)
      },
      showToolbarDefaultActions: function () {
        const a = this.base.getExtensionByName('toolbar')
        a && a.showToolbarDefaultActions()
      },
      hideToolbarDefaultActions: function () {
        const a = this.base.getExtensionByName('toolbar')
        a && a.hideToolbarDefaultActions()
      },
      setToolbarPosition: function () {
        const a = this.base.getExtensionByName('toolbar')
        a && a.setToolbarPosition()
      }
    })
    a.extensions.form = b
  }()),
  (function () {
    const b = a.extensions.form.extend({
      customClassOption: null,
      customClassOptionText: 'Button',
      linkValidation: !1,
      placeholderText: 'Paste or type a link',
      targetCheckbox: !1,
      targetCheckboxText: 'Open in new window',
      name: 'anchor',
      action: 'createLink',
      aria: 'link',
      tagNames: ['a'],
      contentDefault: '<b>#</b>',
      contentFA: '<i class="fa fa-link"></i>',
      init: function () {
        a.extensions.form.prototype.init.apply(this, arguments), this.subscribe('editableKeydown', this.handleKeydown.bind(this))
      },
      handleClick: function (b) {
        b.preventDefault(), b.stopPropagation()
        const c = a.selection.getSelectionRange(this.document)
        return c.startContainer.nodeName.toLowerCase() === 'a' || c.endContainer.nodeName.toLowerCase() === 'a' || a.util.getClosestTag(a.selection.getSelectedParentElement(c), 'a') ? this.execAction('unlink') : (this.isDisplayed() || this.showForm(), !1)
      },
      handleKeydown: function (b) {
        a.util.isKey(b, a.util.keyCode.K) && a.util.isMetaCtrlKey(b) && !b.shiftKey && this.handleClick(b)
      },
      getForm: function () {
        return this.form || (this.form = this.createForm()), this.form
      },
      getTemplate: function () {
        const a = ['<input type="text" class="medium-editor-toolbar-input" placeholder="', this.placeholderText, '">']
        return a.push('<a href="#" class="medium-editor-toolbar-save">', this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fa fa-check"></i>' : this.formSaveLabel, '</a>'), a.push('<a href="#" class="medium-editor-toolbar-close">', this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fa fa-times"></i>' : this.formCloseLabel, '</a>'), this.targetCheckbox && a.push('<div class="medium-editor-toolbar-form-row">', '<input type="checkbox" class="medium-editor-toolbar-anchor-target" id="medium-editor-toolbar-anchor-target-field-' + this.getEditorId() + '">', '<label for="medium-editor-toolbar-anchor-target-field-' + this.getEditorId() + '">', this.targetCheckboxText, '</label>', '</div>'), this.customClassOption && a.push('<div class="medium-editor-toolbar-form-row">', '<input type="checkbox" class="medium-editor-toolbar-anchor-button">', '<label>', this.customClassOptionText, '</label>', '</div>'), a.join('')
      },
      isDisplayed: function () {
        return a.extensions.form.prototype.isDisplayed.apply(this)
      },
      hideForm: function () {
        a.extensions.form.prototype.hideForm.apply(this), this.getInput().value = ''
      },
      showForm: function (b) {
        const c = this.getInput()
        const d = this.getAnchorTargetCheckbox()
        const e = this.getAnchorButtonCheckbox()
        if (b = b || {
          value: ''
        }, typeof b === 'string' && (b = {
          value: b
        }), this.base.saveSelection(), this.hideToolbarDefaultActions(), a.extensions.form.prototype.showForm.apply(this), this.setToolbarPosition(), c.value = b.value, c.focus(), d && (d.checked = b.target === '_blank'), e) {
          const f = b.buttonClass ? b.buttonClass.split(' ') : []
          e.checked = f.indexOf(this.customClassOption) !== -1
        }
      },
      destroy: function () {
        return this.form ? (this.form.parentNode && this.form.parentNode.removeChild(this.form), void delete this.form) : !1
      },
      getFormOpts: function () {
        const a = this.getAnchorTargetCheckbox()
        const b = this.getAnchorButtonCheckbox()
        const c = {
          value: this.getInput().value.trim()
        }
        return this.linkValidation && (c.value = this.checkLinkFormat(c.value)), c.target = '_self', a && a.checked && (c.target = '_blank'), b && b.checked && (c.buttonClass = this.customClassOption), c
      },
      doFormSave: function () {
        const a = this.getFormOpts()
        this.completeFormSave(a)
      },
      completeFormSave: function (a) {
        this.base.restoreSelection(), this.execAction(this.action, a), this.base.checkSelection()
      },
      ensureEncodedUri: function (a) {
        return a === decodeURI(a) ? encodeURI(a) : a
      },
      ensureEncodedUriComponent: function (a) {
        return a === decodeURIComponent(a) ? encodeURIComponent(a) : a
      },
      ensureEncodedParam: function (a) {
        const b = a.split('=')
        const c = b[0]
        const d = b[1]
        return c + (void 0 === d ? '' : '=' + this.ensureEncodedUriComponent(d))
      },
      ensureEncodedQuery: function (a) {
        return a.split('&').map(this.ensureEncodedParam.bind(this)).join('&')
      },
      checkLinkFormat: function (a) {
        const b = /^([a-z]+:)?\/\/|^(mailto|tel|maps):|^\#/i
        const c = b.test(a)
        let d = ''
        const e = /^\+?\s?\(?(?:\d\s?\-?\)?){3,20}$/
        const f = a.match(/^(.*?)(?:\?(.*?))?(?:#(.*))?$/)
        const g = f[1]
        const h = f[2]
        const i = f[3]
        if (e.test(a)) return 'tel:' + a
        if (!c) {
          const j = g.split('/')[0];
          (j.match(/.+(\.|:).+/) || j === 'localhost') && (d = 'http://')
        }
        return d + this.ensureEncodedUri(g) + (void 0 === h ? '' : '?' + this.ensureEncodedQuery(h)) + (void 0 === i ? '' : '#' + i)
      },
      doFormCancel: function () {
        this.base.restoreSelection(), this.base.checkSelection()
      },
      attachFormEvents: function (a) {
        const b = a.querySelector('.medium-editor-toolbar-close')
        const c = a.querySelector('.medium-editor-toolbar-save')
        const d = a.querySelector('.medium-editor-toolbar-input')
        this.on(a, 'click', this.handleFormClick.bind(this)), this.on(d, 'keyup', this.handleTextboxKeyup.bind(this)), this.on(b, 'click', this.handleCloseClick.bind(this)), this.on(c, 'click', this.handleSaveClick.bind(this), !0)
      },
      createForm: function () {
        const a = this.document
        const b = a.createElement('div')
        return b.className = 'medium-editor-toolbar-form', b.id = 'medium-editor-toolbar-form-anchor-' + this.getEditorId(), b.innerHTML = this.getTemplate(), this.attachFormEvents(b), b
      },
      getInput: function () {
        return this.getForm().querySelector('input.medium-editor-toolbar-input')
      },
      getAnchorTargetCheckbox: function () {
        return this.getForm().querySelector('.medium-editor-toolbar-anchor-target')
      },
      getAnchorButtonCheckbox: function () {
        return this.getForm().querySelector('.medium-editor-toolbar-anchor-button')
      },
      handleTextboxKeyup: function (b) {
        return b.keyCode === a.util.keyCode.ENTER ? (b.preventDefault(), void this.doFormSave()) : void (b.keyCode === a.util.keyCode.ESCAPE && (b.preventDefault(), this.doFormCancel()))
      },
      handleFormClick: function (a) {
        a.stopPropagation()
      },
      handleSaveClick: function (a) {
        a.preventDefault(), this.doFormSave()
      },
      handleCloseClick: function (a) {
        a.preventDefault(), this.doFormCancel()
      }
    })
    a.extensions.anchor = b
  }()),
  (function () {
    const b = a.Extension.extend({
      name: 'anchor-preview',
      hideDelay: 500,
      previewValueSelector: 'a',
      showWhenToolbarIsVisible: !1,
      showOnEmptyLinks: !0,
      init: function () {
        this.anchorPreview = this.createPreview(), this.getEditorOption('elementsContainer').appendChild(this.anchorPreview), this.attachToEditables()
      },
      getInteractionElements: function () {
        return this.getPreviewElement()
      },
      getPreviewElement: function () {
        return this.anchorPreview
      },
      createPreview: function () {
        const a = this.document.createElement('div')
        return a.id = 'medium-editor-anchor-preview-' + this.getEditorId(), a.className = 'medium-editor-anchor-preview', a.innerHTML = this.getTemplate(), this.on(a, 'click', this.handleClick.bind(this)), a
      },
      getTemplate: function () {
        return '<div class="medium-editor-toolbar-anchor-preview" id="medium-editor-toolbar-anchor-preview">    <a class="medium-editor-toolbar-anchor-preview-inner"></a></div>'
      },
      destroy: function () {
        this.anchorPreview && (this.anchorPreview.parentNode && this.anchorPreview.parentNode.removeChild(this.anchorPreview), delete this.anchorPreview)
      },
      hidePreview: function () {
        this.anchorPreview && this.anchorPreview.classList.remove('medium-editor-anchor-preview-active'), this.activeAnchor = null
      },
      showPreview: function (a) {
        return this.anchorPreview.classList.contains('medium-editor-anchor-preview-active') || a.getAttribute('data-disable-preview') ? !0 : (this.previewValueSelector && (this.anchorPreview.querySelector(this.previewValueSelector).textContent = a.attributes.href.value, this.anchorPreview.querySelector(this.previewValueSelector).href = a.attributes.href.value), this.anchorPreview.classList.add('medium-toolbar-arrow-over'), this.anchorPreview.classList.remove('medium-toolbar-arrow-under'), this.anchorPreview.classList.contains('medium-editor-anchor-preview-active') || this.anchorPreview.classList.add('medium-editor-anchor-preview-active'), this.activeAnchor = a, this.positionPreview(), this.attachPreviewHandlers(), this)
      },
      positionPreview: function (a) {
        a = a || this.activeAnchor
        let b; let c; let d; let e; let f; let g = this.window.innerWidth
        const h = this.anchorPreview.offsetHeight
        let i = a.getBoundingClientRect()
        let j = this.diffLeft
        let k = this.diffTop
        const l = this.getEditorOption('elementsContainer')
        const m = ['absolute', 'fixed'].indexOf(window.getComputedStyle(l).getPropertyValue('position')) > -1
        const n = {}
        b = this.anchorPreview.offsetWidth / 2
        const o = this.base.getExtensionByName('toolbar')
        o && (j = o.diffLeft, k = o.diffTop), c = j - b, m ? (e = l.getBoundingClientRect(), ['top', 'left'].forEach(function (a) {
          n[a] = i[a] - e[a]
        }), n.width = i.width, n.height = i.height, i = n, g = e.width, f = l.scrollTop) : f = this.window.pageYOffset, d = i.left + i.width / 2, f += h + i.top + i.height - k - this.anchorPreview.offsetHeight, this.anchorPreview.style.top = Math.round(f) + 'px', this.anchorPreview.style.right = 'initial', b > d ? (this.anchorPreview.style.left = c + b + 'px', this.anchorPreview.style.right = 'initial') : b > g - d ? (this.anchorPreview.style.left = 'auto', this.anchorPreview.style.right = 0) : (this.anchorPreview.style.left = c + d + 'px', this.anchorPreview.style.right = 'initial')
      },
      attachToEditables: function () {
        this.subscribe('editableMouseover', this.handleEditableMouseover.bind(this)), this.subscribe('positionedToolbar', this.handlePositionedToolbar.bind(this))
      },
      handlePositionedToolbar: function () {
        this.showWhenToolbarIsVisible || this.hidePreview()
      },
      handleClick: function (a) {
        const b = this.base.getExtensionByName('anchor')
        let c = this.activeAnchor
        b && c && (a.preventDefault(), this.base.selectElement(this.activeAnchor), this.base.delay(function () {
          if (c) {
            const a = {
              value: c.attributes.href.value,
              target: c.getAttribute('target'),
              buttonClass: c.getAttribute('class')
            }
            b.showForm(a), c = null
          }
        })), this.hidePreview()
      },
      handleAnchorMouseout: function () {
        this.anchorToPreview = null, this.off(this.activeAnchor, 'mouseout', this.instanceHandleAnchorMouseout), this.instanceHandleAnchorMouseout = null
      },
      handleEditableMouseover: function (b) {
        const c = a.util.getClosestTag(b.target, 'a')
        if (!1 !== c) {
          if (!this.showOnEmptyLinks && (!/href=["']\S+["']/.test(c.outerHTML) || /href=["']#\S+["']/.test(c.outerHTML))) return !0
          const d = this.base.getExtensionByName('toolbar')
          if (!this.showWhenToolbarIsVisible && d && d.isDisplayed && d.isDisplayed()) return !0
          this.activeAnchor && this.activeAnchor !== c && this.detachPreviewHandlers(), this.anchorToPreview = c, this.instanceHandleAnchorMouseout = this.handleAnchorMouseout.bind(this), this.on(this.anchorToPreview, 'mouseout', this.instanceHandleAnchorMouseout), this.base.delay(function () {
            this.anchorToPreview && this.showPreview(this.anchorToPreview)
          }.bind(this))
        }
      },
      handlePreviewMouseover: function () {
        this.lastOver = (new Date()).getTime(), this.hovering = !0
      },
      handlePreviewMouseout: function (a) {
        a.relatedTarget && /anchor-preview/.test(a.relatedTarget.className) || (this.hovering = !1)
      },
      updatePreview: function () {
        if (this.hovering) return !0
        const a = (new Date()).getTime() - this.lastOver
        a > this.hideDelay && this.detachPreviewHandlers()
      },
      detachPreviewHandlers: function () {
        clearInterval(this.intervalTimer), this.instanceHandlePreviewMouseover && (this.off(this.anchorPreview, 'mouseover', this.instanceHandlePreviewMouseover), this.off(this.anchorPreview, 'mouseout', this.instanceHandlePreviewMouseout), this.activeAnchor && (this.off(this.activeAnchor, 'mouseover', this.instanceHandlePreviewMouseover), this.off(this.activeAnchor, 'mouseout', this.instanceHandlePreviewMouseout))), this.hidePreview(), this.hovering = this.instanceHandlePreviewMouseover = this.instanceHandlePreviewMouseout = null
      },
      attachPreviewHandlers: function () {
        this.lastOver = (new Date()).getTime(), this.hovering = !0, this.instanceHandlePreviewMouseover = this.handlePreviewMouseover.bind(this), this.instanceHandlePreviewMouseout = this.handlePreviewMouseout.bind(this), this.intervalTimer = setInterval(this.updatePreview.bind(this), 200), this.on(this.anchorPreview, 'mouseover', this.instanceHandlePreviewMouseover), this.on(this.anchorPreview, 'mouseout', this.instanceHandlePreviewMouseout), this.on(this.activeAnchor, 'mouseover', this.instanceHandlePreviewMouseover), this.on(this.activeAnchor, 'mouseout', this.instanceHandlePreviewMouseout)
      }
    })
    a.extensions.anchorPreview = b
  }()),
  (function () {
    function b (b) {
      return !a.util.getClosestTag(b, 'a')
    }
    let c, d, e, f, g
    c = [' ', '	', '\n', '\r', ' ', ' ', ' ', ' ', ' ', '\u2028', '\u2029'], d = 'com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw', e = '(((?:(https?://|ftps?://|nntp://)|www\\d{0,3}[.]|[a-z0-9.\\-]+[.](' + d + ")\\/)\\S+(?:[^\\s`!\\[\\]{};:'\".,?«»“”‘’])))|(([a-z0-9\\-]+\\.)?[a-z0-9\\-]+\\.(" + d + '))', f = new RegExp('^(' + d + ')$', 'i'), g = new RegExp(e, 'gi')
    const h = a.Extension.extend({
      init: function () {
        a.Extension.prototype.init.apply(this, arguments), this.disableEventHandling = !1, this.subscribe('editableKeypress', this.onKeypress.bind(this)), this.subscribe('editableBlur', this.onBlur.bind(this)), this.document.execCommand('AutoUrlDetect', !1, !1)
      },
      isLastInstance: function () {
        for (var a = 0, b = 0; b < this.window._mediumEditors.length; b++) {
          const c = this.window._mediumEditors[b]
          c !== null && void 0 !== c.getExtensionByName('autoLink') && a++
        }
        return a === 1
      },
      destroy: function () {
        this.document.queryCommandSupported('AutoUrlDetect') && this.isLastInstance() && this.document.execCommand('AutoUrlDetect', !1, !0)
      },
      onBlur: function (a, b) {
        this.performLinking(b)
      },
      onKeypress: function (b) {
        this.disableEventHandling || a.util.isKey(b, [a.util.keyCode.SPACE, a.util.keyCode.ENTER]) && (clearTimeout(this.performLinkingTimeout), this.performLinkingTimeout = setTimeout(function () {
          try {
            const a = this.base.exportSelection()
            this.performLinking(b.target) && this.base.importSelection(a, !0)
          } catch (c) {
            window.console && window.console.error('Failed to perform linking', c), this.disableEventHandling = !0
          }
        }.bind(this), 0))
      },
      performLinking: function (b) {
        let c = a.util.splitByBlockElements(b)
        let d = !1
        c.length === 0 && (c = [b])
        for (let e = 0; e < c.length; e++) d = this.removeObsoleteAutoLinkSpans(c[e]) || d, d = this.performLinkingWithinElement(c[e]) || d
        return this.base.events.updateInput(b, {
          target: b,
          currentTarget: b
        }), d
      },
      removeObsoleteAutoLinkSpans: function (c) {
        if (!c || c.nodeType === 3) return !1
        for (var d = c.querySelectorAll('span[data-auto-link="true"]'), e = !1, f = 0; f < d.length; f++) {
          let g = d[f].textContent
          if (g.indexOf('://') === -1 && (g = a.util.ensureUrlHasProtocol(g)), d[f].getAttribute('data-href') !== g && b(d[f])) {
            e = !0
            const h = g.replace(/\s+$/, '')
            if (d[f].getAttribute('data-href') === h) {
              const i = g.length - h.length
              const j = a.util.splitOffDOMTree(d[f], this.splitTextBeforeEnd(d[f], i))
              d[f].parentNode.insertBefore(j, d[f].nextSibling)
            } else a.util.unwrap(d[f], this.document)
          }
        }
        return e
      },
      splitTextBeforeEnd: function (a, b) {
        for (var c = this.document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1), d = !0; d;) d = c.lastChild() !== null
        for (var e, f, g; b > 0 && g !== null;) e = c.currentNode, f = e.nodeValue, f.length > b ? (g = e.splitText(f.length - b), b = 0) : (g = c.previousNode(), b -= f.length)
        return g
      },
      performLinkingWithinElement: function (b) {
        for (var c = this.findLinkableText(b), d = !1, e = 0; e < c.length; e++) {
          const f = a.util.findOrCreateMatchingTextNodes(this.document, b, c[e])
          this.shouldNotLink(f) || this.createAutoLink(f, c[e].href)
        }
        return d
      },
      shouldNotLink: function (b) {
        for (var c = !1, d = 0; d < b.length && c === !1; d++) {
          c = !!a.util.traverseUp(b[d], function (a) {
            return a.nodeName.toLowerCase() === 'a' || a.getAttribute && a.getAttribute('data-auto-link') === 'true'
          })
        }
        return c
      },
      findLinkableText: function (a) {
        for (var b = a.textContent, d = null, e = []; (d = g.exec(b)) !== null;) {
          let h = !0
          const i = d.index + d[0].length
          h = !(d.index !== 0 && c.indexOf(b[d.index - 1]) === -1 || i !== b.length && c.indexOf(b[i]) === -1), h = h && (d[0].indexOf('/') !== -1 || f.test(d[0].split('.').pop().split('?').shift())), h && e.push({
            href: d[0],
            start: d.index,
            end: i
          })
        }
        return e
      },
      createAutoLink: function (b, c) {
        c = a.util.ensureUrlHasProtocol(c)
        const d = a.util.createLink(this.document, b, c, this.getEditorOption('targetBlank') ? '_blank' : null)
        const e = this.document.createElement('span')
        for (e.setAttribute('data-auto-link', 'true'), e.setAttribute('data-href', c), d.insertBefore(e, d.firstChild); d.childNodes.length > 1;) e.appendChild(d.childNodes[1])
      }
    })
    a.extensions.autoLink = h
  }()),
  (function () {
    function b (b) {
      const d = a.util.getContainerEditorElement(b)
      const e = Array.prototype.slice.call(d.parentElement.querySelectorAll('.' + c))
      e.forEach(function (a) {
        a.classList.remove(c)
      })
    }
    var c = 'medium-editor-dragover'
    const d = a.Extension.extend({
      name: 'fileDragging',
      allowedTypes: ['image'],
      init: function () {
        a.Extension.prototype.init.apply(this, arguments), this.subscribe('editableDrag', this.handleDrag.bind(this)), this.subscribe('editableDrop', this.handleDrop.bind(this))
      },
      handleDrag: function (a) {
        a.preventDefault(), a.dataTransfer.dropEffect = 'copy'
        const d = a.target.classList ? a.target : a.target.parentElement
        b(d), a.type === 'dragover' && d.classList.add(c)
      },
      handleDrop: function (a) {
        a.preventDefault(), a.stopPropagation(), this.base.selectElement(a.target)
        const c = this.base.exportSelection()
        c.start = c.end, this.base.importSelection(c), a.dataTransfer.files && Array.prototype.slice.call(a.dataTransfer.files).forEach(function (a) {
          this.isAllowedFile(a) && a.type.match('image') && this.insertImageFile(a)
        }, this), b(a.target)
      },
      isAllowedFile: function (a) {
        return this.allowedTypes.some(function (b) {
          return !!a.type.match(b)
        })
      },
      insertImageFile: function (b) {
        if (typeof FileReader === 'function') {
          const c = new FileReader()
          c.readAsDataURL(b), c.addEventListener('load', function (b) {
            const c = this.document.createElement('img')
            c.src = b.target.result, a.util.insertHTMLCommand(this.document, c.outerHTML)
          }.bind(this))
        }
      }
    })
    a.extensions.fileDragging = d
  }()),
  (function () {
    const b = a.Extension.extend({
      name: 'keyboard-commands',
      commands: [{
        command: 'bold',
        key: 'B',
        meta: !0,
        shift: !1,
        alt: !1
      }, {
        command: 'italic',
        key: 'I',
        meta: !0,
        shift: !1,
        alt: !1
      }, {
        command: 'underline',
        key: 'U',
        meta: !0,
        shift: !1,
        alt: !1
      }],
      init: function () {
        a.Extension.prototype.init.apply(this, arguments), this.subscribe('editableKeydown', this.handleKeydown.bind(this)), this.keys = {}, this.commands.forEach(function (a) {
          const b = a.key.charCodeAt(0)
          this.keys[b] || (this.keys[b] = []), this.keys[b].push(a)
        }, this)
      },
      handleKeydown: function (b) {
        const c = a.util.getKeyCode(b)
        if (this.keys[c]) {
          const d = a.util.isMetaCtrlKey(b)
          const e = !!b.shiftKey
          const f = !!b.altKey
          this.keys[c].forEach(function (a) {
            a.meta !== d || a.shift !== e || a.alt !== f && void 0 !== a.alt || (b.preventDefault(), b.stopPropagation(), typeof a.command === 'function' ? a.command.apply(this) : !1 !== a.command && this.execAction(a.command))
          }, this)
        }
      }
    })
    a.extensions.keyboardCommands = b
  }()),
  (function () {
    const b = a.extensions.form.extend({
      name: 'fontname',
      action: 'fontName',
      aria: 'change font name',
      contentDefault: '&#xB1;',
      contentFA: '<i class="fa fa-font"></i>',
      fonts: ['', 'Arial', 'Verdana', 'Times New Roman'],
      init: function () {
        a.extensions.form.prototype.init.apply(this, arguments)
      },
      handleClick: function (a) {
        if (a.preventDefault(), a.stopPropagation(), !this.isDisplayed()) {
          const b = this.document.queryCommandValue('fontName') + ''
          this.showForm(b)
        }
        return !1
      },
      getForm: function () {
        return this.form || (this.form = this.createForm()), this.form
      },
      isDisplayed: function () {
        return this.getForm().style.display === 'block'
      },
      hideForm: function () {
        this.getForm().style.display = 'none', this.getSelect().value = ''
      },
      showForm: function (a) {
        const b = this.getSelect()
        this.base.saveSelection(), this.hideToolbarDefaultActions(), this.getForm().style.display = 'block', this.setToolbarPosition(), b.value = a || '', b.focus()
      },
      destroy: function () {
        return this.form ? (this.form.parentNode && this.form.parentNode.removeChild(this.form), void delete this.form) : !1
      },
      doFormSave: function () {
        this.base.restoreSelection(), this.base.checkSelection()
      },
      doFormCancel: function () {
        this.base.restoreSelection(), this.clearFontName(), this.base.checkSelection()
      },
      createForm: function () {
        let a; const b = this.document
        const c = b.createElement('div')
        const d = b.createElement('select')
        const e = b.createElement('a')
        const f = b.createElement('a')
        c.className = 'medium-editor-toolbar-form', c.id = 'medium-editor-toolbar-form-fontname-' + this.getEditorId(), this.on(c, 'click', this.handleFormClick.bind(this))
        for (let g = 0; g < this.fonts.length; g++) a = b.createElement('option'), a.innerHTML = this.fonts[g], a.value = this.fonts[g], d.appendChild(a)
        return d.className = 'medium-editor-toolbar-select', c.appendChild(d), this.on(d, 'change', this.handleFontChange.bind(this)), f.setAttribute('href', '#'), f.className = 'medium-editor-toobar-save', f.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fa fa-check"></i>' : '&#10003;', c.appendChild(f), this.on(f, 'click', this.handleSaveClick.bind(this), !0), e.setAttribute('href', '#'), e.className = 'medium-editor-toobar-close', e.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fa fa-times"></i>' : '&times;', c.appendChild(e), this.on(e, 'click', this.handleCloseClick.bind(this)), c
      },
      getSelect: function () {
        return this.getForm().querySelector('select.medium-editor-toolbar-select')
      },
      clearFontName: function () {
        a.selection.getSelectedElements(this.document).forEach(function (a) {
          a.nodeName.toLowerCase() === 'font' && a.hasAttribute('face') && a.removeAttribute('face')
        })
      },
      handleFontChange: function () {
        const a = this.getSelect().value
        a === '' ? this.clearFontName() : this.execAction('fontName', {
          value: a
        })
      },
      handleFormClick: function (a) {
        a.stopPropagation()
      },
      handleSaveClick: function (a) {
        a.preventDefault(), this.doFormSave()
      },
      handleCloseClick: function (a) {
        a.preventDefault(), this.doFormCancel()
      }
    })
    a.extensions.fontName = b
  }()),
  (function () {
    const b = a.extensions.form.extend({
      name: 'fontsize',
      action: 'fontSize',
      aria: 'increase/decrease font size',
      contentDefault: '&#xB1;',
      contentFA: '<i class="fa fa-text-height"></i>',
      init: function () {
        a.extensions.form.prototype.init.apply(this, arguments)
      },
      handleClick: function (a) {
        if (a.preventDefault(), a.stopPropagation(), !this.isDisplayed()) {
          const b = this.document.queryCommandValue('fontSize') + ''
          this.showForm(b)
        }
        return !1
      },
      getForm: function () {
        return this.form || (this.form = this.createForm()), this.form
      },
      isDisplayed: function () {
        return this.getForm().style.display === 'block'
      },
      hideForm: function () {
        this.getForm().style.display = 'none', this.getInput().value = ''
      },
      showForm: function (a) {
        const b = this.getInput()
        this.base.saveSelection(), this.hideToolbarDefaultActions(), this.getForm().style.display = 'block', this.setToolbarPosition(), b.value = a || '', b.focus()
      },
      destroy: function () {
        return this.form ? (this.form.parentNode && this.form.parentNode.removeChild(this.form), void delete this.form) : !1
      },
      doFormSave: function () {
        this.base.restoreSelection(), this.base.checkSelection()
      },
      doFormCancel: function () {
        this.base.restoreSelection(), this.clearFontSize(), this.base.checkSelection()
      },
      createForm: function () {
        const a = this.document
        const b = a.createElement('div')
        const c = a.createElement('input')
        const d = a.createElement('a')
        const e = a.createElement('a')
        return b.className = 'medium-editor-toolbar-form', b.id = 'medium-editor-toolbar-form-fontsize-' + this.getEditorId(), this.on(b, 'click', this.handleFormClick.bind(this)), c.setAttribute('type', 'range'), c.setAttribute('min', '1'),
        c.setAttribute('max', '7'), c.className = 'medium-editor-toolbar-input', b.appendChild(c), this.on(c, 'change', this.handleSliderChange.bind(this)), e.setAttribute('href', '#'), e.className = 'medium-editor-toobar-save', e.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fa fa-check"></i>' : '&#10003;', b.appendChild(e), this.on(e, 'click', this.handleSaveClick.bind(this), !0), d.setAttribute('href', '#'), d.className = 'medium-editor-toobar-close', d.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fa fa-times"></i>' : '&times;', b.appendChild(d), this.on(d, 'click', this.handleCloseClick.bind(this)), b
      },
      getInput: function () {
        return this.getForm().querySelector('input.medium-editor-toolbar-input')
      },
      clearFontSize: function () {
        a.selection.getSelectedElements(this.document).forEach(function (a) {
          a.nodeName.toLowerCase() === 'font' && a.hasAttribute('size') && a.removeAttribute('size')
        })
      },
      handleSliderChange: function () {
        const a = this.getInput().value
        a === '4' ? this.clearFontSize() : this.execAction('fontSize', {
          value: a
        })
      },
      handleFormClick: function (a) {
        a.stopPropagation()
      },
      handleSaveClick: function (a) {
        a.preventDefault(), this.doFormSave()
      },
      handleCloseClick: function (a) {
        a.preventDefault(), this.doFormCancel()
      }
    })
    a.extensions.fontSize = b
  }()),
  (function () {
    function b () {
      return [
        [new RegExp(/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/g), ''],
        [new RegExp(/<!--StartFragment-->|<!--EndFragment-->/g), ''],
        [new RegExp(/<br>$/i), ''],
        [new RegExp(/<[^>]*docs-internal-guid[^>]*>/gi), ''],
        [new RegExp(/<\/b>(<br[^>]*>)?$/gi), ''],
        [new RegExp(/<span class="Apple-converted-space">\s+<\/span>/g), ' '],
        [new RegExp(/<br class="Apple-interchange-newline">/g), '<br>'],
        [new RegExp(/<span[^>]*(font-style:italic;font-weight:(bold|700)|font-weight:(bold|700);font-style:italic)[^>]*>/gi), '<span class="replace-with italic bold">'],
        [new RegExp(/<span[^>]*font-style:italic[^>]*>/gi), '<span class="replace-with italic">'],
        [new RegExp(/<span[^>]*font-weight:(bold|700)[^>]*>/gi), '<span class="replace-with bold">'],
        [new RegExp(/&lt;(\/?)(i|b|a)&gt;/gi), '<$1$2>'],
        [new RegExp(/&lt;a(?:(?!href).)+href=(?:&quot;|&rdquo;|&ldquo;|"|“|”)(((?!&quot;|&rdquo;|&ldquo;|"|“|”).)*)(?:&quot;|&rdquo;|&ldquo;|"|“|”)(?:(?!&gt;).)*&gt;/gi), '<a href="$1">'],
        [new RegExp(/<\/p>\n+/gi), '</p>'],
        [new RegExp(/\n+<p/gi), '<p'],
        [new RegExp(/<\/?o:[a-z]*>/gi), ''],
        [new RegExp(/<!\[if !supportLists\]>(((?!<!).)*)<!\[endif]\>/gi), '$1']
      ]
    }

    function c (a, b, c) {
      const d = a.clipboardData || b.clipboardData || c.dataTransfer
      const e = {}
      if (!d) return e
      if (d.getData) {
        const f = d.getData('Text')
        f && f.length > 0 && (e['text/plain'] = f)
      }
      if (d.types) {
        for (let g = 0; g < d.types.length; g++) {
          const h = d.types[g]
          e[h] = d.getData(h)
        }
      }
      return e
    }
    const d = '%ME_PASTEBIN%'
    let e = null
    let f = null
    const g = function (a) {
      a.stopPropagation()
    }
    const h = a.Extension.extend({
      forcePlainText: !0,
      cleanPastedHTML: !1,
      preCleanReplacements: [],
      cleanReplacements: [],
      cleanAttrs: ['class', 'style', 'dir'],
      cleanTags: ['meta'],
      unwrapTags: [],
      init: function () {
        a.Extension.prototype.init.apply(this, arguments), (this.forcePlainText || this.cleanPastedHTML) && (this.subscribe('editableKeydown', this.handleKeydown.bind(this)), this.getEditorElements().forEach(function (a) {
          this.on(a, 'paste', this.handlePaste.bind(this))
        }, this), this.subscribe('addElement', this.handleAddElement.bind(this)))
      },
      handleAddElement: function (a, b) {
        this.on(b, 'paste', this.handlePaste.bind(this))
      },
      destroy: function () {
        (this.forcePlainText || this.cleanPastedHTML) && this.removePasteBin()
      },
      handlePaste: function (a, b) {
        if (!a.defaultPrevented) {
          const d = c(a, this.window, this.document)
          let e = d['text/html']
          const f = d['text/plain']
          this.window.clipboardData && void 0 === a.clipboardData && !e && (e = f), (e || f) && (a.preventDefault(), this.doPaste(e, f, b))
        }
      },
      doPaste: function (b, c, d) {
        let e; let f; let g = ''
        if (this.cleanPastedHTML && b) return this.cleanPaste(b)
        if (c) {
          if (this.getEditorOption('disableReturn') || d && d.getAttribute('data-disable-return')) g = a.util.htmlEntities(c)
          else if (e = c.split(/[\r\n]+/g), e.length > 1) { for (f = 0; f < e.length; f += 1) e[f] !== '' && (g += '<p>' + a.util.htmlEntities(e[f]) + '</p>') } else g = a.util.htmlEntities(e[0])
          a.util.insertHTMLCommand(this.document, g)
        }
      },
      handlePasteBinPaste: function (a) {
        if (a.defaultPrevented) return void this.removePasteBin()
        const b = c(a, this.window, this.document)
        let d = b['text/html']
        const e = b['text/plain']
        const g = f
        return !this.cleanPastedHTML || d ? (a.preventDefault(), this.removePasteBin(), this.doPaste(d, e, g), void this.trigger('editablePaste', {
          currentTarget: g,
          target: g
        }, g)) : void setTimeout(function () {
          this.cleanPastedHTML && (d = this.getPasteBinHtml()), this.removePasteBin(), this.doPaste(d, e, g), this.trigger('editablePaste', {
            currentTarget: g,
            target: g
          }, g)
        }.bind(this), 0)
      },
      handleKeydown: function (b, c) {
        a.util.isKey(b, a.util.keyCode.V) && a.util.isMetaCtrlKey(b) && (b.stopImmediatePropagation(), this.removePasteBin(), this.createPasteBin(c))
      },
      createPasteBin: function (b) {
        let c; const h = a.selection.getSelectionRange(this.document)
        let i = this.window.pageYOffset
        f = b, h && (c = h.getClientRects(), i += c.length ? c[0].top : void 0 !== h.startContainer.getBoundingClientRect ? h.startContainer.getBoundingClientRect().top : h.getBoundingClientRect().top), e = h
        const j = this.document.createElement('div')
        j.id = this.pasteBinId = 'medium-editor-pastebin-' + +Date.now(), j.setAttribute('style', 'border: 1px red solid; position: absolute; top: ' + i + 'px; width: 10px; height: 10px; overflow: hidden; opacity: 0'), j.setAttribute('contentEditable', !0), j.innerHTML = d, this.document.body.appendChild(j), this.on(j, 'focus', g), this.on(j, 'focusin', g), this.on(j, 'focusout', g), j.focus(), a.selection.selectNode(j, this.document), this.boundHandlePaste || (this.boundHandlePaste = this.handlePasteBinPaste.bind(this)), this.on(j, 'paste', this.boundHandlePaste)
      },
      removePasteBin: function () {
        e !== null && (a.selection.selectRange(this.document, e), e = null), f !== null && (f = null)
        const b = this.getPasteBin()
        b && b && (this.off(b, 'focus', g), this.off(b, 'focusin', g), this.off(b, 'focusout', g), this.off(b, 'paste', this.boundHandlePaste), b.parentElement.removeChild(b))
      },
      getPasteBin: function () {
        return this.document.getElementById(this.pasteBinId)
      },
      getPasteBinHtml: function () {
        const a = this.getPasteBin()
        if (!a) return !1
        if (a.firstChild && a.firstChild.id === 'mcepastebin') return !1
        const b = a.innerHTML
        return b && b !== d ? b : !1
      },
      cleanPaste: function (a) {
        let c; let d; let e; let f; const g = /<p|<br|<div/.test(a)
        const h = [].concat(this.preCleanReplacements || [], b(), this.cleanReplacements || [])
        for (c = 0; c < h.length; c += 1) a = a.replace(h[c][0], h[c][1])
        if (!g) return this.pasteHTML(a)
        for (e = this.document.createElement('div'), e.innerHTML = '<p>' + a.split('<br><br>').join('</p><p>') + '</p>', d = e.querySelectorAll('a,p,div,br'), c = 0; c < d.length; c += 1) {
          switch (f = d[c], f.innerHTML = f.innerHTML.replace(/\n/gi, ' '), f.nodeName.toLowerCase()) {
            case 'p':
            case 'div':
              this.filterCommonBlocks(f)
              break
            case 'br':
              this.filterLineBreak(f)
          }
        }
        this.pasteHTML(e.innerHTML)
      },
      pasteHTML: function (b, c) {
        c = a.util.defaults({}, c, {
          cleanAttrs: this.cleanAttrs,
          cleanTags: this.cleanTags,
          unwrapTags: this.unwrapTags
        })
        let d; let e; let f; let g; const h = this.document.createDocumentFragment()
        for (h.appendChild(this.document.createElement('body')), g = h.querySelector('body'), g.innerHTML = b, this.cleanupSpans(g), d = g.querySelectorAll('*'), f = 0; f < d.length; f += 1) e = d[f], e.nodeName.toLowerCase() === 'a' && this.getEditorOption('targetBlank') && a.util.setTargetBlank(e), a.util.cleanupAttrs(e, c.cleanAttrs), a.util.cleanupTags(e, c.cleanTags), a.util.unwrapTags(e, c.unwrapTags)
        a.util.insertHTMLCommand(this.document, g.innerHTML.replace(/&nbsp;/g, ' '))
      },
      isCommonBlock: function (a) {
        return a && (a.nodeName.toLowerCase() === 'p' || a.nodeName.toLowerCase() === 'div')
      },
      filterCommonBlocks: function (a) {
        /^\s*$/.test(a.textContent) && a.parentNode && a.parentNode.removeChild(a)
      },
      filterLineBreak: function (a) {
        this.isCommonBlock(a.previousElementSibling) ? this.removeWithParent(a) : !this.isCommonBlock(a.parentNode) || a.parentNode.firstChild !== a && a.parentNode.lastChild !== a ? a.parentNode && a.parentNode.childElementCount === 1 && a.parentNode.textContent === '' && this.removeWithParent(a) : this.removeWithParent(a)
      },
      removeWithParent: function (a) {
        a && a.parentNode && (a.parentNode.parentNode && a.parentNode.childElementCount === 1 ? a.parentNode.parentNode.removeChild(a.parentNode) : a.parentNode.removeChild(a))
      },
      cleanupSpans: function (b) {
        let c; let d; let e; let f = b.querySelectorAll('.replace-with')
        const g = function (a) {
          return a && a.nodeName !== '#text' && a.getAttribute('contenteditable') === 'false'
        }
        for (c = 0; c < f.length; c += 1) d = f[c], e = this.document.createElement(d.classList.contains('bold') ? 'b' : 'i'), d.classList.contains('bold') && d.classList.contains('italic') ? e.innerHTML = '<i>' + d.innerHTML + '</i>' : e.innerHTML = d.innerHTML, d.parentNode.replaceChild(e, d)
        for (f = b.querySelectorAll('span'), c = 0; c < f.length; c += 1) {
          if (d = f[c], a.util.traverseUp(d, g)) return !1
          a.util.unwrap(d, this.document)
        }
      }
    })
    a.extensions.paste = h
  }()),
  (function () {
    const b = a.Extension.extend({
      name: 'placeholder',
      text: 'Type your text',
      hideOnClick: !0,
      init: function () {
        a.Extension.prototype.init.apply(this, arguments), this.initPlaceholders(), this.attachEventHandlers()
      },
      initPlaceholders: function () {
        this.getEditorElements().forEach(this.initElement, this)
      },
      handleAddElement: function (a, b) {
        this.initElement(b)
      },
      initElement: function (a) {
        a.getAttribute('data-placeholder') || a.setAttribute('data-placeholder', this.text), this.updatePlaceholder(a)
      },
      destroy: function () {
        this.getEditorElements().forEach(this.cleanupElement, this)
      },
      handleRemoveElement: function (a, b) {
        this.cleanupElement(b)
      },
      cleanupElement: function (a) {
        a.getAttribute('data-placeholder') === this.text && a.removeAttribute('data-placeholder')
      },
      showPlaceholder: function (b) {
        b && (a.util.isFF && b.childNodes.length === 0 ? (b.classList.add('medium-editor-placeholder-relative'), b.classList.remove('medium-editor-placeholder')) : (b.classList.add('medium-editor-placeholder'), b.classList.remove('medium-editor-placeholder-relative')))
      },
      hidePlaceholder: function (a) {
        a && (a.classList.remove('medium-editor-placeholder'), a.classList.remove('medium-editor-placeholder-relative'))
      },
      updatePlaceholder: function (a, b) {
        return a.querySelector('img, blockquote, ul, ol, table') || a.textContent.replace(/^\s+|\s+$/g, '') !== '' ? this.hidePlaceholder(a) : void (b || this.showPlaceholder(a))
      },
      attachEventHandlers: function () {
        this.hideOnClick && this.subscribe('focus', this.handleFocus.bind(this)), this.subscribe('editableInput', this.handleInput.bind(this)), this.subscribe('blur', this.handleBlur.bind(this)), this.subscribe('addElement', this.handleAddElement.bind(this)), this.subscribe('removeElement', this.handleRemoveElement.bind(this))
      },
      handleInput: function (a, b) {
        const c = this.hideOnClick && b === this.base.getFocusedElement()
        this.updatePlaceholder(b, c)
      },
      handleFocus: function (a, b) {
        this.hidePlaceholder(b)
      },
      handleBlur: function (a, b) {
        this.updatePlaceholder(b)
      }
    })
    a.extensions.placeholder = b
  }()),
  (function () {
    const b = a.Extension.extend({
      name: 'toolbar',
      align: 'center',
      allowMultiParagraphSelection: !0,
      buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
      diffLeft: 0,
      diffTop: -10,
      firstButtonClass: 'medium-editor-button-first',
      lastButtonClass: 'medium-editor-button-last',
      standardizeSelectionStart: !1,
      static: !1,
      sticky: !1,
      stickyTopOffset: 0,
      updateOnEmptySelection: !1,
      relativeContainer: null,
      init: function () {
        a.Extension.prototype.init.apply(this, arguments), this.initThrottledMethods(), this.relativeContainer ? this.relativeContainer.appendChild(this.getToolbarElement()) : this.getEditorOption('elementsContainer').appendChild(this.getToolbarElement())
      },
      forEachExtension: function (a, b) {
        return this.base.extensions.forEach(function (c) {
          return c !== this ? a.apply(b || this, arguments) : void 0
        }, this)
      },
      createToolbar: function () {
        const a = this.document.createElement('div')
        return a.id = 'medium-editor-toolbar-' + this.getEditorId(), a.className = 'medium-editor-toolbar', this.static ? a.className += ' static-toolbar' : this.relativeContainer ? a.className += ' medium-editor-relative-toolbar' : a.className += ' medium-editor-stalker-toolbar', a.appendChild(this.createToolbarButtons()), this.forEachExtension(function (b) {
          b.hasForm && a.appendChild(b.getForm())
        }), this.attachEventHandlers(), a
      },
      createToolbarButtons: function () {
        let b; let c; let d; let e; let f; let g; const h = this.document.createElement('ul')
        return h.id = 'medium-editor-toolbar-actions' + this.getEditorId(), h.className = 'medium-editor-toolbar-actions', h.style.display = 'block', this.buttons.forEach(function (d) {
          typeof d === 'string' ? (f = d, g = null) : (f = d.name, g = d), e = this.base.addBuiltInExtension(f, g), e && typeof e.getButton === 'function' && (c = e.getButton(this.base), b = this.document.createElement('li'), a.util.isElement(c) ? b.appendChild(c) : b.innerHTML = c, h.appendChild(b))
        }, this), d = h.querySelectorAll('button'), d.length > 0 && (d[0].classList.add(this.firstButtonClass), d[d.length - 1].classList.add(this.lastButtonClass)), h
      },
      destroy: function () {
        this.toolbar && (this.toolbar.parentNode && this.toolbar.parentNode.removeChild(this.toolbar), delete this.toolbar)
      },
      getInteractionElements: function () {
        return this.getToolbarElement()
      },
      getToolbarElement: function () {
        return this.toolbar || (this.toolbar = this.createToolbar()), this.toolbar
      },
      getToolbarActionsElement: function () {
        return this.getToolbarElement().querySelector('.medium-editor-toolbar-actions')
      },
      initThrottledMethods: function () {
        this.throttledPositionToolbar = a.util.throttle(function () {
          this.base.isActive && this.positionToolbarIfShown()
        }.bind(this))
      },
      attachEventHandlers: function () {
        this.subscribe('blur', this.handleBlur.bind(this)), this.subscribe('focus', this.handleFocus.bind(this)), this.subscribe('editableClick', this.handleEditableClick.bind(this)), this.subscribe('editableKeyup', this.handleEditableKeyup.bind(this)), this.on(this.document.documentElement, 'mouseup', this.handleDocumentMouseup.bind(this)), this.static && this.sticky && this.on(this.window, 'scroll', this.handleWindowScroll.bind(this), !0), this.on(this.window, 'resize', this.handleWindowResize.bind(this))
      },
      handleWindowScroll: function () {
        this.positionToolbarIfShown()
      },
      handleWindowResize: function () {
        this.throttledPositionToolbar()
      },
      handleDocumentMouseup: function (b) {
        return b && b.target && a.util.isDescendant(this.getToolbarElement(), b.target) ? !1 : void this.checkState()
      },
      handleEditableClick: function () {
        setTimeout(function () {
          this.checkState()
        }.bind(this), 0)
      },
      handleEditableKeyup: function () {
        this.checkState()
      },
      handleBlur: function () {
        clearTimeout(this.hideTimeout), clearTimeout(this.delayShowTimeout), this.hideTimeout = setTimeout(function () {
          this.hideToolbar()
        }.bind(this), 1)
      },
      handleFocus: function () {
        this.checkState()
      },
      isDisplayed: function () {
        return this.getToolbarElement().classList.contains('medium-editor-toolbar-active')
      },
      showToolbar: function () {
        clearTimeout(this.hideTimeout), this.isDisplayed() || (this.getToolbarElement().classList.add('medium-editor-toolbar-active'), this.trigger('showToolbar', {}, this.base.getFocusedElement()))
      },
      hideToolbar: function () {
        this.isDisplayed() && (this.getToolbarElement().classList.remove('medium-editor-toolbar-active'), this.trigger('hideToolbar', {}, this.base.getFocusedElement()))
      },
      isToolbarDefaultActionsDisplayed: function () {
        return this.getToolbarActionsElement().style.display === 'block'
      },
      hideToolbarDefaultActions: function () {
        this.isToolbarDefaultActionsDisplayed() && (this.getToolbarActionsElement().style.display = 'none')
      },
      showToolbarDefaultActions: function () {
        this.hideExtensionForms(), this.isToolbarDefaultActionsDisplayed() || (this.getToolbarActionsElement().style.display = 'block'), this.delayShowTimeout = this.base.delay(function () {
          this.showToolbar()
        }.bind(this))
      },
      hideExtensionForms: function () {
        this.forEachExtension(function (a) {
          a.hasForm && a.isDisplayed() && a.hideForm()
        })
      },
      multipleBlockElementsSelected: function () {
        const b = /<[^\/>][^>]*><\/[^>]+>/gim
        const c = new RegExp('<(' + a.util.blockContainerElementNames.join('|') + ')[^>]*>', 'g')
        const d = a.selection.getSelectionHtml(this.document).replace(b, '')
        const e = d.match(c)
        return !!e && e.length > 1
      },
      modifySelection: function () {
        const b = this.window.getSelection()
        let c = b.getRangeAt(0)
        if (this.standardizeSelectionStart && c.startContainer.nodeValue && c.startOffset === c.startContainer.nodeValue.length) {
          const d = a.util.findAdjacentTextNodeWithContent(a.selection.getSelectionElement(this.window), c.startContainer, this.document)
          if (d) {
            for (var e = 0; d.nodeValue.substr(e, 1).trim().length === 0;) e += 1
            c = a.selection.select(this.document, d, e, c.endContainer, c.endOffset)
          }
        }
      },
      checkState: function () {
        if (!this.base.preventSelectionUpdates) {
          if (!this.base.getFocusedElement() || a.selection.selectionInContentEditableFalse(this.window)) return this.hideToolbar()
          const b = a.selection.getSelectionElement(this.window)
          return !b || this.getEditorElements().indexOf(b) === -1 || b.getAttribute('data-disable-toolbar') ? this.hideToolbar() : this.updateOnEmptySelection && this.static ? this.showAndUpdateToolbar() : !a.selection.selectionContainsContent(this.document) || this.allowMultiParagraphSelection === !1 && this.multipleBlockElementsSelected() ? this.hideToolbar() : void this.showAndUpdateToolbar()
        }
      },
      showAndUpdateToolbar: function () {
        this.modifySelection(), this.setToolbarButtonStates(), this.trigger('positionToolbar', {}, this.base.getFocusedElement()), this.showToolbarDefaultActions(), this.setToolbarPosition()
      },
      setToolbarButtonStates: function () {
        this.forEachExtension(function (a) {
          typeof a.isActive === 'function' && typeof a.setInactive === 'function' && a.setInactive()
        }), this.checkActiveButtons()
      },
      checkActiveButtons: function () {
        let b; const c = []
        let d = null
        const e = a.selection.getSelectionRange(this.document)
        const f = function (a) {
          typeof a.checkState === 'function' ? a.checkState(b) : typeof a.isActive === 'function' && typeof a.isAlreadyApplied === 'function' && typeof a.setActive === 'function' && !a.isActive() && a.isAlreadyApplied(b) && a.setActive()
        }
        if (e && (this.forEachExtension(function (a) {
          return typeof a.queryCommandState === 'function' && (d = a.queryCommandState(), d !== null) ? void (d && typeof a.setActive === 'function' && a.setActive()) : void c.push(a)
        }), b = a.selection.getSelectedParentElement(e), this.getEditorElements().some(function (c) {
          return a.util.isDescendant(c, b, !0)
        }))) { for (; b && (c.forEach(f), !a.util.isMediumEditorElement(b));) b = b.parentNode }
      },
      positionToolbarIfShown: function () {
        this.isDisplayed() && this.setToolbarPosition()
      },
      setToolbarPosition: function () {
        const a = this.base.getFocusedElement()
        const b = this.window.getSelection()
        return a ? void (!this.static && b.isCollapsed || (this.showToolbar(), this.relativeContainer || (this.static ? this.positionStaticToolbar(a) : this.positionToolbar(b)), this.trigger('positionedToolbar', {}, this.base.getFocusedElement()))) : this
      },
      positionStaticToolbar: function (a) {
        this.getToolbarElement().style.left = '0'
        let b; const c = this.document.documentElement && this.document.documentElement.scrollTop || this.document.body.scrollTop
        const d = this.window.innerWidth
        const e = this.getToolbarElement()
        const f = a.getBoundingClientRect()
        const g = f.top + c
        const h = f.left + f.width / 2
        const i = e.offsetHeight
        const j = e.offsetWidth
        const k = j / 2
        switch (this.sticky ? c > g + a.offsetHeight - i - this.stickyTopOffset ? (e.style.top = g + a.offsetHeight - i + 'px', e.classList.remove('medium-editor-sticky-toolbar')) : c > g - i - this.stickyTopOffset ? (e.classList.add('medium-editor-sticky-toolbar'), e.style.top = this.stickyTopOffset + 'px') : (e.classList.remove('medium-editor-sticky-toolbar'), e.style.top = g - i + 'px') : e.style.top = g - i + 'px', this.align) {
          case 'left':
            b = f.left
            break
          case 'right':
            b = f.right - j
            break
          case 'center':
            b = h - k
        }
        b < 0 ? b = 0 : b + j > d && (b = d - Math.ceil(j) - 1), e.style.left = b + 'px'
      },
      positionToolbar: function (a) {
        this.getToolbarElement().style.left = '0', this.getToolbarElement().style.right = 'initial'
        const b = a.getRangeAt(0)
        let c = b.getBoundingClientRect();
        (!c || c.height === 0 && c.width === 0 && b.startContainer === b.endContainer) && (c = b.startContainer.nodeType === 1 && b.startContainer.querySelector('img') ? b.startContainer.querySelector('img').getBoundingClientRect() : b.startContainer.getBoundingClientRect())
        let d; let e; let f = this.window.innerWidth
        const g = this.getToolbarElement()
        const h = g.offsetHeight
        const i = g.offsetWidth
        const j = i / 2
        const k = 50
        const l = this.diffLeft - j
        const m = this.getEditorOption('elementsContainer')
        const n = ['absolute', 'fixed'].indexOf(window.getComputedStyle(m).getPropertyValue('position')) > -1
        const o = {}
        const p = {}
        n ? (e = m.getBoundingClientRect(), ['top', 'left'].forEach(function (a) {
          p[a] = c[a] - e[a]
        }), p.width = c.width, p.height = c.height, c = p, f = e.width, o.top = m.scrollTop) : o.top = this.window.pageYOffset, d = c.left + c.width / 2, o.top += c.top - h, c.top < k ? (g.classList.add('medium-toolbar-arrow-over'), g.classList.remove('medium-toolbar-arrow-under'), o.top += k + c.height - this.diffTop) : (g.classList.add('medium-toolbar-arrow-under'), g.classList.remove('medium-toolbar-arrow-over'), o.top += this.diffTop), j > d ? (o.left = l + j, o.right = 'initial') : j > f - d ? (o.left = 'auto', o.right = 0) : (o.left = l + d, o.right = 'initial'), ['top', 'left', 'right'].forEach(function (a) {
          g.style[a] = o[a] + (isNaN(o[a]) ? '' : 'px')
        })
      }
    })
    a.extensions.toolbar = b
  }()),
  (function () {
    const b = a.Extension.extend({
      init: function () {
        a.Extension.prototype.init.apply(this, arguments), this.subscribe('editableDrag', this.handleDrag.bind(this)), this.subscribe('editableDrop', this.handleDrop.bind(this))
      },
      handleDrag: function (a) {
        const b = 'medium-editor-dragover'
        a.preventDefault(), a.dataTransfer.dropEffect = 'copy', a.type === 'dragover' ? a.target.classList.add(b) : a.type === 'dragleave' && a.target.classList.remove(b)
      },
      handleDrop: function (b) {
        let c; const d = 'medium-editor-dragover'
        b.preventDefault(), b.stopPropagation(), b.dataTransfer.files && (c = Array.prototype.slice.call(b.dataTransfer.files, 0), c.some(function (b) {
          if (b.type.match('image')) {
            let c, d
            c = new FileReader(), c.readAsDataURL(b), d = 'medium-img-' + +new Date(), a.util.insertHTMLCommand(this.document, '<img class="medium-editor-image-loading" id="' + d + '" />'), c.onload = function () {
              const a = this.document.getElementById(d)
              a && (a.removeAttribute('id'), a.removeAttribute('class'), a.src = c.result)
            }.bind(this)
          }
        }.bind(this))), b.target.classList.remove(d)
      }
    })
    a.extensions.imageDragging = b
  }()),
  (function () {
    function b (b) {
      const c = a.selection.getSelectionStart(this.options.ownerDocument)
      const d = c.textContent
      const e = a.selection.getCaretOffsets(c);
      (void 0 === d[e.left - 1] || d[e.left - 1].trim() === '' || void 0 !== d[e.left] && d[e.left].trim() === '') && b.preventDefault()
    }

    function c (b, c) {
      if (this.options.disableReturn || c.getAttribute('data-disable-return')) b.preventDefault()
      else if (this.options.disableDoubleReturn || c.getAttribute('data-disable-double-return')) {
        const d = a.selection.getSelectionStart(this.options.ownerDocument);
        (d && d.textContent.trim() === '' && d.nodeName.toLowerCase() !== 'li' || d.previousElementSibling && d.previousElementSibling.nodeName.toLowerCase() !== 'br' && d.previousElementSibling.textContent.trim() === '') && b.preventDefault()
      }
    }

    function d (b) {
      const c = a.selection.getSelectionStart(this.options.ownerDocument)
      const d = c && c.nodeName.toLowerCase()
      d === 'pre' && (b.preventDefault(), a.util.insertHTMLCommand(this.options.ownerDocument, '    ')), a.util.isListItem(c) && (b.preventDefault(), b.shiftKey ? this.options.ownerDocument.execCommand('outdent', !1, null) : this.options.ownerDocument.execCommand('indent', !1, null))
    }

    function e (b) {
      let c; const d = a.selection.getSelectionStart(this.options.ownerDocument)
      const e = d.nodeName.toLowerCase()
      const f = /^(\s+|<br\/?>)?$/i
      const g = /h\d/i
      a.util.isKey(b, [a.util.keyCode.BACKSPACE, a.util.keyCode.ENTER]) && d.previousElementSibling && g.test(e) && a.selection.getCaretOffsets(d).left === 0 ? a.util.isKey(b, a.util.keyCode.BACKSPACE) && f.test(d.previousElementSibling.innerHTML) ? (d.previousElementSibling.parentNode.removeChild(d.previousElementSibling), b.preventDefault()) : !this.options.disableDoubleReturn && a.util.isKey(b, a.util.keyCode.ENTER) && (c = this.options.ownerDocument.createElement('p'), c.innerHTML = '<br>', d.previousElementSibling.parentNode.insertBefore(c, d), b.preventDefault()) : a.util.isKey(b, a.util.keyCode.DELETE) && d.nextElementSibling && d.previousElementSibling && !g.test(e) && f.test(d.innerHTML) && g.test(d.nextElementSibling.nodeName.toLowerCase()) ? (a.selection.moveCursor(this.options.ownerDocument, d.nextElementSibling), d.previousElementSibling.parentNode.removeChild(d), b.preventDefault()) : a.util.isKey(b, a.util.keyCode.BACKSPACE) && e === 'li' && f.test(d.innerHTML) && !d.previousElementSibling && !d.parentElement.previousElementSibling && d.nextElementSibling && d.nextElementSibling.nodeName.toLowerCase() === 'li' ? (c = this.options.ownerDocument.createElement('p'), c.innerHTML = '<br>', d.parentElement.parentElement.insertBefore(c, d.parentElement), a.selection.moveCursor(this.options.ownerDocument, c), d.parentElement.removeChild(d), b.preventDefault()) : a.util.isKey(b, a.util.keyCode.BACKSPACE) && a.util.getClosestTag(d, 'blockquote') !== !1 && a.selection.getCaretOffsets(d).left === 0 ? (b.preventDefault(), a.util.execFormatBlock(this.options.ownerDocument, 'p')) : a.util.isKey(b, a.util.keyCode.ENTER) && a.util.getClosestTag(d, 'blockquote') !== !1 && a.selection.getCaretOffsets(d).right === 0 ? (c = this.options.ownerDocument.createElement('p'), c.innerHTML = '<br>', d.parentElement.insertBefore(c, d.nextSibling), a.selection.moveCursor(this.options.ownerDocument, c), b.preventDefault()) : a.util.isKey(b, a.util.keyCode.BACKSPACE) && a.util.isMediumEditorElement(d.parentElement) && !d.previousElementSibling && d.nextElementSibling && f.test(d.innerHTML) && (b.preventDefault(), a.selection.moveCursor(this.options.ownerDocument, d.nextSibling), d.parentElement.removeChild(d))
    }

    function f (b) {
      let c; const d = a.selection.getSelectionStart(this.options.ownerDocument)
      d && (a.util.isMediumEditorElement(d) && d.children.length === 0 && !a.util.isBlockContainer(d) && this.options.ownerDocument.execCommand('formatBlock', !1, 'p'), !a.util.isKey(b, a.util.keyCode.ENTER) || a.util.isListItem(d) || a.util.isBlockContainer(d) || (c = d.nodeName.toLowerCase(), c === 'a' ? this.options.ownerDocument.execCommand('unlink', !1, null) : b.shiftKey || b.ctrlKey || this.options.ownerDocument.execCommand('formatBlock', !1, 'p')))
    }

    function g (a, b) {
      const c = b.parentNode.querySelector('textarea[medium-editor-textarea-id="' + b.getAttribute('medium-editor-textarea-id') + '"]')
      c && (c.value = b.innerHTML.trim())
    }

    function h (a) {
      a._mediumEditors || (a._mediumEditors = [null]), this.id || (this.id = a._mediumEditors.length), a._mediumEditors[this.id] = this
    }

    function i (a) {
      a._mediumEditors && a._mediumEditors[this.id] && (a._mediumEditors[this.id] = null)
    }

    function j (b, c, d) {
      let e = []
      if (b || (b = []), typeof b === 'string' && (b = c.querySelectorAll(b)), a.util.isElement(b) && (b = [b]), d) {
        for (let f = 0; f < b.length; f++) {
          const g = b[f]
          !a.util.isElement(g) || g.getAttribute('data-medium-editor-element') || g.getAttribute('medium-editor-textarea-id') || e.push(g)
        }
      } else e = Array.prototype.slice.apply(b)
      return e
    }

    function k (a) {
      const b = a.parentNode.querySelector('textarea[medium-editor-textarea-id="' + a.getAttribute('medium-editor-textarea-id') + '"]')
      b && (b.classList.remove('medium-editor-hidden'), b.removeAttribute('medium-editor-textarea-id')), a.parentNode && a.parentNode.removeChild(a)
    }

    function l (a, b) {
      return Object.keys(b).forEach(function (c) {
        void 0 === a[c] && (a[c] = b[c])
      }), a
    }

    function m (a, b, c) {
      const d = {
        window: c.options.contentWindow,
        document: c.options.ownerDocument,
        base: c
      }
      return a = l(a, d), typeof a.init === 'function' && a.init(), a.name || (a.name = b), a
    }

    function n () {
      return this.elements.every(function (a) {
        return !!a.getAttribute('data-disable-toolbar')
      }) ? !1 : this.options.toolbar !== !1
    }

    function o () {
      return n.call(this) ? this.options.anchorPreview !== !1 : !1
    }

    function p () {
      return this.options.placeholder !== !1
    }

    function q () {
      return this.options.autoLink !== !1
    }

    function r () {
      return this.options.imageDragging !== !1
    }

    function s () {
      return this.options.keyboardCommands !== !1
    }

    function t () {
      return !this.options.extensions.imageDragging
    }

    function u (a) {
      for (var b = this.options.ownerDocument.createElement('div'), c = Date.now(), d = 'medium-editor-' + c, e = a.attributes; this.options.ownerDocument.getElementById(d);) c++, d = 'medium-editor-' + c
      b.className = a.className, b.id = d, b.innerHTML = a.value, a.setAttribute('medium-editor-textarea-id', d)
      for (let f = 0, g = e.length; g > f; f++) b.hasAttribute(e[f].nodeName) || b.setAttribute(e[f].nodeName, e[f].value)
      return a.form && this.on(a.form, 'reset', function (a) {
        a.defaultPrevented || this.resetContent(this.options.ownerDocument.getElementById(d))
      }.bind(this)), a.classList.add('medium-editor-hidden'), a.parentNode.insertBefore(b, a), b
    }

    function v (b, d) {
      if (!b.getAttribute('data-medium-editor-element')) {
        b.nodeName.toLowerCase() === 'textarea' && (b = u.call(this, b), this.instanceHandleEditableInput || (this.instanceHandleEditableInput = g.bind(this), this.subscribe('editableInput', this.instanceHandleEditableInput))), this.options.disableEditing || b.getAttribute('data-disable-editing') || (b.setAttribute('contentEditable', !0), b.setAttribute('spellcheck', this.options.spellcheck)), this.instanceHandleEditableKeydownEnter || (b.getAttribute('data-disable-return') || b.getAttribute('data-disable-double-return')) && (this.instanceHandleEditableKeydownEnter = c.bind(this), this.subscribe('editableKeydownEnter', this.instanceHandleEditableKeydownEnter)), this.options.disableReturn || b.getAttribute('data-disable-return') || this.on(b, 'keyup', f.bind(this))
        const e = a.util.guid()
        b.setAttribute('data-medium-editor-element', !0), b.classList.add('medium-editor-element'), b.setAttribute('role', 'textbox'), b.setAttribute('aria-multiline', !0), b.setAttribute('data-medium-editor-editor-index', d), b.setAttribute('medium-editor-index', e), B[e] = b.innerHTML, this.events.attachAllEventsToElement(b)
      }
      return b
    }

    function w () {
      this.subscribe('editableKeydownTab', d.bind(this)), this.subscribe('editableKeydownDelete', e.bind(this)), this.subscribe('editableKeydownEnter', e.bind(this)), this.options.disableExtraSpaces && this.subscribe('editableKeydownSpace', b.bind(this)), this.instanceHandleEditableKeydownEnter || (this.options.disableReturn || this.options.disableDoubleReturn) && (this.instanceHandleEditableKeydownEnter = c.bind(this), this.subscribe('editableKeydownEnter', this.instanceHandleEditableKeydownEnter))
    }

    function x () {
      if (this.extensions = [], Object.keys(this.options.extensions).forEach(function (a) {
        a !== 'toolbar' && this.options.extensions[a] && this.extensions.push(m(this.options.extensions[a], a, this))
      }, this), t.call(this)) {
        let b = this.options.fileDragging
        b || (b = {}, r.call(this) || (b.allowedTypes = [])), this.addBuiltInExtension('fileDragging', b)
      }
      const c = {
        paste: !0,
        'anchor-preview': o.call(this),
        autoLink: q.call(this),
        keyboardCommands: s.call(this),
        placeholder: p.call(this)
      }
      Object.keys(c).forEach(function (a) {
        c[a] && this.addBuiltInExtension(a)
      }, this)
      let d = this.options.extensions.toolbar
      if (!d && n.call(this)) {
        const e = a.util.extend({}, this.options.toolbar, {
          allowMultiParagraphSelection: this.options.allowMultiParagraphSelection
        })
        d = new a.extensions.toolbar(e)
      }
      d && this.extensions.push(m(d, 'toolbar', this))
    }

    function y (b, c) {
      const d = [
        ['allowMultiParagraphSelection', 'toolbar.allowMultiParagraphSelection']
      ]
      return c && d.forEach(function (b) {
        c.hasOwnProperty(b[0]) && void 0 !== c[b[0]] && a.util.deprecated(b[0], b[1], 'v6.0.0')
      }), a.util.defaults({}, c, b)
    }

    function z (b, c) {
      let d; let e; const f = /^append-(.+)$/gi
      const g = /justify([A-Za-z]*)$/g
      if (d = f.exec(b)) return a.util.execFormatBlock(this.options.ownerDocument, d[1])
      if (b === 'fontSize') return c.size && a.util.deprecated('.size option for fontSize command', '.value', '6.0.0'), e = c.value || c.size, this.options.ownerDocument.execCommand('fontSize', !1, e)
      if (b === 'fontName') return c.name && a.util.deprecated('.name option for fontName command', '.value', '6.0.0'), e = c.value || c.name, this.options.ownerDocument.execCommand('fontName', !1, e)
      if (b === 'createLink') return this.createLink(c)
      if (b === 'image') {
        const h = this.options.contentWindow.getSelection().toString().trim()
        return this.options.ownerDocument.execCommand('insertImage', !1, h)
      }
      if (b === 'html') {
        const i = this.options.contentWindow.getSelection().toString().trim()
        return a.util.insertHTMLCommand(this.options.ownerDocument, i)
      }
      if (g.exec(b)) {
        const j = this.options.ownerDocument.execCommand(b, !1, null)
        const k = a.selection.getSelectedParentElement(a.selection.getSelectionRange(this.options.ownerDocument))
        return k && A.call(this, a.util.getTopBlockContainer(k)), j
      }
      return e = c && c.value, this.options.ownerDocument.execCommand(b, !1, e)
    }

    function A (b) {
      if (b) {
        let c; const d = Array.prototype.slice.call(b.childNodes).filter(function (a) {
          const b = a.nodeName.toLowerCase() === 'div'
          return b && !c && (c = a.style.textAlign), b
        })
        d.length && (this.saveSelection(), d.forEach(function (b) {
          if (b.style.textAlign === c) {
            const d = b.lastChild
            if (d) {
              a.util.unwrap(b, this.options.ownerDocument)
              const e = this.options.ownerDocument.createElement('BR')
              d.parentNode.insertBefore(e, d.nextSibling)
            }
          }
        }, this), b.style.textAlign = c, this.restoreSelection())
      }
    }
    var B = {}
    a.prototype = {
      init: function (a, b) {
        return this.options = y.call(this, this.defaults, b), this.origElements = a, this.options.elementsContainer || (this.options.elementsContainer = this.options.ownerDocument.body), this.setup()
      },
      setup: function () {
        this.isActive || (h.call(this, this.options.contentWindow), this.events = new a.Events(this), this.elements = [], this.addElements(this.origElements), this.elements.length !== 0 && (this.isActive = !0, x.call(this), w.call(this)))
      },
      destroy: function () {
        this.isActive && (this.isActive = !1, this.extensions.forEach(function (a) {
          typeof a.destroy === 'function' && a.destroy()
        }, this), this.events.destroy(), this.elements.forEach(function (a) {
          this.options.spellcheck && (a.innerHTML = a.innerHTML), a.removeAttribute('contentEditable'), a.removeAttribute('spellcheck'), a.removeAttribute('data-medium-editor-element'), a.classList.remove('medium-editor-element'), a.removeAttribute('role'), a.removeAttribute('aria-multiline'), a.removeAttribute('medium-editor-index'), a.removeAttribute('data-medium-editor-editor-index'), a.getAttribute('medium-editor-textarea-id') && k(a)
        }, this), this.elements = [], this.instanceHandleEditableKeydownEnter = null, this.instanceHandleEditableInput = null, i.call(this, this.options.contentWindow))
      },
      on: function (a, b, c, d) {
        return this.events.attachDOMEvent(a, b, c, d), this
      },
      off: function (a, b, c, d) {
        return this.events.detachDOMEvent(a, b, c, d), this
      },
      subscribe: function (a, b) {
        return this.events.attachCustomEvent(a, b), this
      },
      unsubscribe: function (a, b) {
        return this.events.detachCustomEvent(a, b), this
      },
      trigger: function (a, b, c) {
        return this.events.triggerCustomEvent(a, b, c), this
      },
      delay: function (a) {
        const b = this
        return setTimeout(function () {
          b.isActive && a()
        }, this.options.delay)
      },
      serialize: function () {
        let a; let b; const c = {}
        const d = this.elements.length
        for (a = 0; d > a; a += 1) {
          b = this.elements[a].id !== '' ? this.elements[a].id : 'element-' + a, c[b] = {
            value: this.elements[a].innerHTML.trim()
          }
        }
        return c
      },
      getExtensionByName: function (a) {
        let b
        return this.extensions && this.extensions.length && this.extensions.some(function (c) {
          return c.name === a ? (b = c, !0) : !1
        }), b
      },
      addBuiltInExtension: function (b, c) {
        let d; let e = this.getExtensionByName(b)
        if (e) return e
        switch (b) {
          case 'anchor':
            d = a.util.extend({}, this.options.anchor, c), e = new a.extensions.anchor(d)
            break
          case 'anchor-preview':
            e = new a.extensions.anchorPreview(this.options.anchorPreview)
            break
          case 'autoLink':
            e = new a.extensions.autoLink()
            break
          case 'fileDragging':
            e = new a.extensions.fileDragging(c)
            break
          case 'fontname':
            e = new a.extensions.fontName(this.options.fontName)
            break
          case 'fontsize':
            e = new a.extensions.fontSize(c)
            break
          case 'keyboardCommands':
            e = new a.extensions.keyboardCommands(this.options.keyboardCommands)
            break
          case 'paste':
            e = new a.extensions.paste(this.options.paste)
            break
          case 'placeholder':
            e = new a.extensions.placeholder(this.options.placeholder)
            break
          default:
            a.extensions.button.isBuiltInButton(b) && (c ? (d = a.util.defaults({}, c, a.extensions.button.prototype.defaults[b]), e = new a.extensions.button(d)) : e = new a.extensions.button(b))
        }
        return e && this.extensions.push(m(e, b, this)), e
      },
      stopSelectionUpdates: function () {
        this.preventSelectionUpdates = !0
      },
      startSelectionUpdates: function () {
        this.preventSelectionUpdates = !1
      },
      checkSelection: function () {
        const a = this.getExtensionByName('toolbar')
        return a && a.checkState(), this
      },
      queryCommandState: function (a) {
        let b; const c = /^full-(.+)$/gi
        let d = null
        b = c.exec(a), b && (a = b[1])
        try {
          d = this.options.ownerDocument.queryCommandState(a)
        } catch (e) {
          d = null
        }
        return d
      },
      execAction: function (b, c) {
        let d; let e; const f = /^full-(.+)$/gi
        return d = f.exec(b), d ? (this.saveSelection(), this.selectAllContents(), e = z.call(this, d[1], c), this.restoreSelection()) : e = z.call(this, b, c), b !== 'insertunorderedlist' && b !== 'insertorderedlist' || a.util.cleanListDOM(this.options.ownerDocument, this.getSelectedParentElement()), this.checkSelection(), e
      },
      getSelectedParentElement: function (b) {
        return void 0 === b && (b = this.options.contentWindow.getSelection().getRangeAt(0)), a.selection.getSelectedParentElement(b)
      },
      selectAllContents: function () {
        let b = a.selection.getSelectionElement(this.options.contentWindow)
        if (b) {
          for (; b.children.length === 1;) b = b.children[0]
          this.selectElement(b)
        }
      },
      selectElement: function (b) {
        a.selection.selectNode(b, this.options.ownerDocument)
        const c = a.selection.getSelectionElement(this.options.contentWindow)
        c && this.events.focusElement(c)
      },
      getFocusedElement: function () {
        let a
        return this.elements.some(function (b) {
          return !a && b.getAttribute('data-medium-focused') && (a = b), !!a
        }, this), a
      },
      exportSelection: function () {
        const b = a.selection.getSelectionElement(this.options.contentWindow)
        const c = this.elements.indexOf(b)
        let d = null
        return c >= 0 && (d = a.selection.exportSelection(b, this.options.ownerDocument)), d !== null && c !== 0 && (d.editableElementIndex = c), d
      },
      saveSelection: function () {
        this.selectionState = this.exportSelection()
      },
      importSelection: function (b, c) {
        if (b) {
          const d = this.elements[b.editableElementIndex || 0]
          a.selection.importSelection(b, d, this.options.ownerDocument, c)
        }
      },
      restoreSelection: function () {
        this.importSelection(this.selectionState)
      },
      createLink: function (b) {
        let c; const d = a.selection.getSelectionElement(this.options.contentWindow)
        let e = {}
        if (this.elements.indexOf(d) !== -1) {
          try {
            if (this.events.disableCustomEvent('editableInput'), b.url && a.util.deprecated('.url option for createLink', '.value', '6.0.0'), c = b.url || b.value, c && c.trim().length > 0) {
              const f = this.options.contentWindow.getSelection()
              if (f) {
                let g; let h; let i; let j; const k = f.getRangeAt(0)
                let l = k.commonAncestorContainer
                if (k.endContainer.nodeType === 3 && k.startContainer.nodeType !== 3 && k.startOffset === 0 && k.startContainer.firstChild === k.endContainer && (l = k.endContainer), h = a.util.getClosestBlockContainer(k.startContainer), i = a.util.getClosestBlockContainer(k.endContainer), l.nodeType !== 3 && l.textContent.length !== 0 && h === i) {
                  const m = h || d
                  let n = this.options.ownerDocument.createDocumentFragment()
                  this.execAction('unlink'), g = this.exportSelection(), n.appendChild(m.cloneNode(!0)), d === m ? a.selection.select(this.options.ownerDocument, m.firstChild, 0, m.lastChild, m.lastChild.nodeType === 3 ? m.lastChild.nodeValue.length : m.lastChild.childNodes.length) : a.selection.select(this.options.ownerDocument, m, 0, m, m.childNodes.length)
                  const o = this.exportSelection()
                  j = a.util.findOrCreateMatchingTextNodes(this.options.ownerDocument, n, {
                    start: g.start - o.start,
                    end: g.end - o.start,
                    editableElementIndex: g.editableElementIndex
                  }), j.length === 0 && (n = this.options.ownerDocument.createDocumentFragment(), n.appendChild(l.cloneNode(!0)), j = [n.firstChild.firstChild, n.firstChild.lastChild]), a.util.createLink(this.options.ownerDocument, j, c.trim())
                  const p = (n.firstChild.innerHTML.match(/^\s+/) || [''])[0].length
                  a.util.insertHTMLCommand(this.options.ownerDocument, n.firstChild.innerHTML.replace(/^\s+/, '')), g.start -= p, g.end -= p, this.importSelection(g)
                } else this.options.ownerDocument.execCommand('createLink', !1, c)
                this.options.targetBlank || b.target === '_blank' ? a.util.setTargetBlank(a.selection.getSelectionStart(this.options.ownerDocument), c) : a.util.removeTargetBlank(a.selection.getSelectionStart(this.options.ownerDocument), c), b.buttonClass && a.util.addClassToAnchors(a.selection.getSelectionStart(this.options.ownerDocument), b.buttonClass)
              }
            }
            if (this.options.targetBlank || b.target === '_blank' || b.buttonClass) {
              e = this.options.ownerDocument.createEvent('HTMLEvents'), e.initEvent('input', !0, !0, this.options.contentWindow)
              for (let q = 0, r = this.elements.length; r > q; q += 1) this.elements[q].dispatchEvent(e)
            }
          } finally {
            this.events.enableCustomEvent('editableInput')
          }
          this.events.triggerCustomEvent('editableInput', e, d)
        }
      },
      cleanPaste: function (a) {
        this.getExtensionByName('paste').cleanPaste(a)
      },
      pasteHTML: function (a, b) {
        this.getExtensionByName('paste').pasteHTML(a, b)
      },
      setContent: function (a, b) {
        if (b = b || 0, this.elements[b]) {
          const c = this.elements[b]
          c.innerHTML = a, this.checkContentChanged(c)
        }
      },
      getContent: function (a) {
        return a = a || 0, this.elements[a] ? this.elements[a].innerHTML.trim() : null
      },
      checkContentChanged: function (b) {
        b = b || a.selection.getSelectionElement(this.options.contentWindow), this.events.updateInput(b, {
          target: b,
          currentTarget: b
        })
      },
      resetContent: function (a) {
        if (a) {
          const b = this.elements.indexOf(a)
          return void (b !== -1 && this.setContent(B[a.getAttribute('medium-editor-index')], b))
        }
        this.elements.forEach(function (a, b) {
          this.setContent(B[a.getAttribute('medium-editor-index')], b)
        }, this)
      },
      addElements: function (a) {
        const b = j(a, this.options.ownerDocument, !0)
        return b.length === 0 ? !1 : void b.forEach(function (a) {
          a = v.call(this, a, this.id), this.elements.push(a), this.trigger('addElement', {
            target: a,
            currentTarget: a
          }, a)
        }, this)
      },
      removeElements: function (a) {
        const b = j(a, this.options.ownerDocument)
        const c = b.map(function (a) {
          return a.getAttribute('medium-editor-textarea-id') && a.parentNode ? a.parentNode.querySelector('div[medium-editor-textarea-id="' + a.getAttribute('medium-editor-textarea-id') + '"]') : a
        })
        this.elements = this.elements.filter(function (a) {
          return c.indexOf(a) !== -1 ? (this.events.cleanupElement(a), a.getAttribute('medium-editor-textarea-id') && k(a), this.trigger('removeElement', {
            target: a,
            currentTarget: a
          }, a), !1) : !0
        }, this)
      }
    }, a.getEditorFromElement = function (a) {
      const b = a.getAttribute('data-medium-editor-editor-index')
      const c = a && a.ownerDocument && (a.ownerDocument.defaultView || a.ownerDocument.parentWindow)
      return c && c._mediumEditors && c._mediumEditors[b] ? c._mediumEditors[b] : null
    }
  }()),
  (function () {
    a.prototype.defaults = {
      activeButtonClass: 'medium-editor-button-active',
      buttonLabels: !1,
      delay: 0,
      disableReturn: !1,
      disableDoubleReturn: !1,
      disableExtraSpaces: !1,
      disableEditing: !1,
      autoLink: !1,
      elementsContainer: !1,
      contentWindow: window,
      ownerDocument: document,
      targetBlank: !1,
      extensions: {},
      spellcheck: !0
    }
  }()), a.parseVersionString = function (a) {
    const b = a.split('-')
    const c = b[0].split('.')
    const d = b.length > 1 ? b[1] : ''
    return {
      major: parseInt(c[0], 10),
      minor: parseInt(c[1], 10),
      revision: parseInt(c[2], 10),
      preRelease: d,
      toString: function () {
        return [c[0], c[1], c[2]].join('.') + (d ? '-' + d : '')
      }
    }
  }, a.version = a.parseVersionString.call(this, {
    version: '5.23.3'
  }.version), a
}())))
