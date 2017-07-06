/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production. This will take a moment...');

webpack(webpackConfig).run((err, stats) => {
	if (err) {
		console.log(err);
		return 1;
	}

	const jsonStats = stats.toJson();

	if (jsonStats.hasErrors) {
		return jsonStats.errors.map(error => console.log(error));
	}

	if (jsonStats.hasWarnings) {
		console.log('Webpack generated the following warnings: ');
		jsonStats.warnings.map(warning => console.log(warning));
	}

	console.log(`Webpack stats: ${stats}`);

	console.log('Your app has been built for production and written to /dist!');

	return 0;
});