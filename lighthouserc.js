module.exports = {
    ci: {
      collect: {
        staticDistDir: './public'
      },
      upload: {
        url: ['http://localhost:8666'],
        target: 'temporary-public-storage',
      },
    },
  };
  