import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import sortMediaQueries from 'postcss-sort-media-queries';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(() => {
	return {
		assetsInclude: ['**/*.svg'],
		base: '/MetaV',
		css: {
			devSourcemap: true,
			postcss: {
				plugins: [
					autoprefixer(),
					sortMediaQueries(),
				],
				sourceMap: true,
			},
			preprocessorOptions: {
				scss: {
					sourceMap: true,
				},
			},
		},
		build: {
			sourcemap: true,
		},
		plugins: [
			ViteImageOptimizer({
				test: /\.(jpe?g|png|webp|avif)$/i,
				webp: {
					quality: 75,
					effort: 4,
				},
				exclude: /node_modules/,
				verbose: true
			})
		],
	};
});
