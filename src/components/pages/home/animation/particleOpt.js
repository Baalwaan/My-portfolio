export default {
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: 'false',
        mode: 'repulse'
      }
    }
  },
  particles: {
    shape: {
      type: 'circle',
      stroke: {
        width: 1,
        color: 'white'
      }
    },
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
