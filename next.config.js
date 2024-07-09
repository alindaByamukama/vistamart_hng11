const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    assetPrefix: isProd ? '/vistamart_hgn11' : '',
    basePath: isProd ? '/vistamart_hng11' : '',
    images: {
        loader: 'imgix',
        path: '',
    },
};