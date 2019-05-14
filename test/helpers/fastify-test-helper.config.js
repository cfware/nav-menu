import path from 'path';
import {globToCustomGetters} from '@cfware/fastify-test-helper';

const cwd = path.resolve(__dirname, '..', '..');

export default {
	demoPage: '/nav-menu.html',
	customGetters: globToCustomGetters('nav-*.js', {cwd})
};
