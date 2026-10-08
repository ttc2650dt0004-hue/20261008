particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50, // 初期表示の泡の数
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 12,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 2,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "top", // 下から上へ昇る
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "push" // マウスを動かす（重ねる）と泡が噴き出る設定
      },
      "onclick": {
        "enable": true,
        "mode": "push" // クリックした時も泡を増やす
      },
      "resize": true
    },
    "modes": {
      "push": {
        "particles_nb": 3 // マウスが動くたびに生成される泡の個数（増やしすぎると重くなるので2〜5程度がおすすめ）
      }
    }
  },
  "retina_detect": true
});