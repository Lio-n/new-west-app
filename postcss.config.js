export default {
  plugins: {
    tailwindcss: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          cssnano: {
            discardComments: { removeAll: true },
            normalizeWhitespace: true,
          },
        }
      : {}),
  },
};
