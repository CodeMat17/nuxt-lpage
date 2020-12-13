export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'codeMat Landing Page',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    loading: {
        color: 'green',
        height: '3px'
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    pwa: {
        icon: {
            iconSrc: './static/icon.png'
        },
        meta: {
            title: 'CodeMat Landing Page',
            author: 'CodeMat',
        },
        manifest: {
            name: 'CodeMat',
            short_name: 'CodeMat',
            lang: 'en',
            description: 'CodeMat Landing Page',
            start_url: '/',
            display: 'standalone',
            theme_color: '#F1F3F1',
            background_color: '#000',
            orientation: 'portrait',
            icons: ['./static/icon.png'],
            useWebmanifestExtension: false
        },
        // workbox: {
        //     /* workbox options */
        //     dev: false,
        //     offlineStrategy: 'StaleWhileRevalidate',
        //     runtimeCaching: [{
        //         urlPattern: 'https://matthewchukwu.netlify.app',
        //         handler: 'cacheFirst',

        //         strategyOptions: {
        //             cacheName: 'mattcache',
        //             cacheExpiration: {
        //                 maxEntries: 10,
        //                 maxAgeSeconds: 60
        //             }
        //         }
        //     }]
        // }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}