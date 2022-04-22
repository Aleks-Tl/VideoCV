function generateBarGraph(r) {
  if (function () {
      var r = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
      window.requestAnimationFrame = r
    }(), null == r.barData || null == r.barData || !Array.isArray(r.barData)) return !1;
  for (var a = r.hasOwnProperty("barId") ? r.barId : "rbar", e = r.hasOwnProperty("barStroke") ? r.barStroke : 50, i = r.hasOwnProperty("barSpaces") ? r.barSpaces : 80, n = r.hasOwnProperty("barDivision") ? r.barDivision : 5, t = r.hasOwnProperty("barColour") ? r.barColour : "#020202", o = r.hasOwnProperty("barInnerPadding") ? r.barInnerPadding : 80, s = r.hasOwnProperty("barDivisionPositionFromLineX") ? r.barDivisionPositionFromLineX : 20, l = r.hasOwnProperty("barDivisionPositionFromLineY") ? r.barDivisionPositionFromLineY : 20, h = !r.hasOwnProperty("barAnimation") || r.barAnimation, b = r.hasOwnProperty("barAnimationSpeed") ? r.barAnimationSpeed : 1, u = r.hasOwnProperty("barTextFont") ? r.barTextFont : "14px Arial", y = !r.hasOwnProperty("barScaleDivisionReqX") || r.barScaleDivisionReqX, v = !r.hasOwnProperty("barScaleDivisionReqY") || r.barScaleDivisionReqY, d = r.hasOwnProperty("barScaleDivisionY") ? r.barScaleDivisionY : null, m = r.hasOwnProperty("barScaleDivisionStroke") ? r.barScaleDivisionStroke : 1, w = r.hasOwnProperty("barScaleDivisionColour") ? r.barScaleDivisionColour : "#333", p = r.hasOwnProperty("barAxisLineStroke") ? r.barAxisLineStroke : 1, P = r.hasOwnProperty("barScaleDivisionColour") ? r.barAxisLineColour : "#333", c = r.hasOwnProperty("barMaxHeight") ? r.barMaxHeight : null, S = document.getElementById(a), A = S.getContext("2d"), O = S.width, D = S.height, f = [], g = [], x = function (r) {
      for (var a = [], e = [], i = [], n = [], t = 0; t < r.length; t++) e.push(Object.values(r[t])[0]), i.push(Object.keys(r[t])[0]), n.push(Object.values(r[t])[0]);
      return a.highest = Math.max(...e), a.xdata = n, a.ydata = i, a
    }(r.barData), k = D - o, F = null == c ? x.highest : c, T = ((k - o) / F).toFixed(1), q = o + i - e / 2, C = 0; C < x.ydata.length; C++) {
    var I = x.xdata[C] * T,
      L = k - I;
    f.push(q), g.push(Math.round(L)), 0 == h && (Array.isArray(t) ? B(A, t[C], e, q, k, L) : B(A, t, e, q, k, L)), q += i
  }
  for (var M = 0; M < x.ydata.length; M++) A.font = u, A.textAlign = "center", A.fillText(x.ydata[M], f[M], D - o + s), y && z(A, m, w, f[M], k - 2, f[M], k + 2);
  var R = null == c ? x.highest : c,
    Y = 0,
    W = 0,
    X = 0;
  null != d ? (W = Math.round(R / d), Y = d) : (W = n, Y = Math.round(R / n));
  for (M = 0; M < W; M++) {
    X = (X += Y) <= R ? X : R;
    var j = Math.round(X * T);
    A.font = u, A.textBaseline = "middle", A.fillText(X, o - l, k - j), v && H(A, m, w, o - 2, k - j, o + 2, k - j)
  }

  function B(r, a, e, i, n, t) {
    r.beginPath(), r.strokeStyle = a, r.lineWidth = e, r.moveTo(i, n), r.lineTo(i, t), r.stroke()
  }

  function H(r, a, e, i, n, t, o) {
    r.strokeStyle = e, r.lineWidth = a, r.beginPath(), r.moveTo(i, n), r.lineTo(t, o), r.stroke()
  }

  function z(r, a, e, i, n, t, o) {
    r.strokeStyle = e, r.lineWidth = a, r.beginPath(), r.moveTo(i, n), r.lineTo(t, o), r.stroke()
  }! function () {
    var r = k;
    if (0 == b) {
      var a = 0;
      ! function i() {
        null != g[a] && (Array.isArray(t) ? B(A, t[a], e, f[a], k, r) : B(A, t, e, f[a], k, r), r > g[a] ? requestAnimationFrame(i) : r <= g[a] && (r = k, a++, requestAnimationFrame(i)), r -= 1)
      }()
    } else var a = 0,
      i = setInterval(function () {
        null == f[a] && clearInterval(i), Array.isArray(t) ? B(A, t[a], e, f[a], k, r) : B(A, t, e, f[a], k, r), r <= g[a] && (r = k, a++), r -= 1
      }, b)
  }(), A.strokeStyle = P, A.lineWidth = p, A.beginPath(), A.moveTo(o, D - o), A.lineTo(O - o, D - o), A.moveTo(o, o - 10), A.lineTo(o, D - o), A.stroke()
}
