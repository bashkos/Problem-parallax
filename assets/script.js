function initParallax (parallax) {
  var background = parallax.querySelector('.parallax__background')
  var time = Date.now()

  var update = function (force) {
    if (Date.now() - time >= 10 || force) {
      time = Date.now()

      var clientHeight = document.documentElement.clientHeight
      var bounds = parallax.getBoundingClientRect()
      if (bounds.top < clientHeight && bounds.bottom > 0) {
        console.log('parallax')

        var delta = Math.max((bounds.height - clientHeight) / 2, 0)
        var offset = 0

        if (bounds.top < -delta) {
          offset = -bounds.top - delta
        } else if (bounds.bottom > clientHeight + delta) {
          offset = clientHeight + delta - bounds.bottom
        }

        window.requestAnimationFrame(function () {
          background.style.transform = 'translate3d(0, ' + (offset * .7) + 'px, 0)'
        });
      } else {
        console.log('sleep')
      }
    }
  }

  window.addEventListener('scroll', update)
  window.addEventListener('resize', update.bind(null, true))
}

document.addEventListener('DOMContentLoaded', function () {
  var parallaxSet = document.querySelectorAll('.parallax')
  for (var i = 0; i < parallaxSet.length; i += 1) {
    initParallax(parallaxSet[i])
  }
})
