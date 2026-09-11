(function () {
  var canvas = document.getElementById('bento-bg');
  if (!canvas) return;

  var themeSource = canvas.parentElement;
  var ctx = canvas.getContext('2d');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var nodes = [];
  var width = 0;
  var height = 0;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var maxDist = 130;

  function accentColor() {
    var v = getComputedStyle(themeSource).getPropertyValue('--home-accent');
    return v.trim() || '#1f8a70';
  }

  function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var num = parseInt(hex, 16);
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var count = Math.max(30, Math.min(100, Math.round((width * height) / 16000)));
    nodes = [];
    for (var i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      });
    }
  }

  function step() {
    var rgb = hexToRgb(accentColor());
    ctx.clearRect(0, 0, width, height);

    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    }

    for (var a = 0; a < nodes.length; a++) {
      for (var b = a + 1; b < nodes.length; b++) {
        var dx = nodes[a].x - nodes[b].x;
        var dy = nodes[a].y - nodes[b].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          var alpha = (1 - dist / maxDist) * 0.22;
          ctx.strokeStyle = 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + alpha + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[a].x, nodes[a].y);
          ctx.lineTo(nodes[b].x, nodes[b].y);
          ctx.stroke();
        }
      }
    }

    for (var j = 0; j < nodes.length; j++) {
      ctx.fillStyle = 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',0.45)';
      ctx.beginPath();
      ctx.arc(nodes[j].x, nodes[j].y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }

    if (!reduceMotion) {
      window.requestAnimationFrame(step);
    }
  }

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      resize();
      if (reduceMotion) step();
    }, 150);
  });

  resize();
  step();

  // Compact nav identity chip: reveal once the page has scrolled a bit.
  var chip = document.getElementById('bento-nav-chip');
  if (chip) {
    var ticking = false;
    var revealAt = 80;
    var updateChip = function () {
      chip.classList.toggle('is-visible', window.scrollY > revealAt);
      ticking = false;
    };
    window.addEventListener(
      'scroll',
      function () {
        if (!ticking) {
          window.requestAnimationFrame(updateChip);
          ticking = true;
        }
      },
      { passive: true }
    );
    updateChip();
  }
})();
