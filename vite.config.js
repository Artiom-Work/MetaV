import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import sortMediaQueries from 'postcss-sort-media-queries';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(() => {
	return {
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
				webp: {
					quality: 80,
					lossless: true,
					effort: 6,
				},
				exclude: /node_modules/,
				verbose: true
			})
		],
	};
});
