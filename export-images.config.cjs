/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  // filenameGenerator: ({ name, width, extension }) => {
  //   const unixTimestamp = Math.floor(Date.now() / 1000);

  //   return `${name}-${width}-${unixTimestamp}.${extension}`;
  // },
  generateFormats: ['avif', 'webp'],

};

module.exports = config;
