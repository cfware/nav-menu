/* global document */
import {setup, page} from '@cfware/ava-selenium-manager';
import {FastifyTestHelper} from '@cfware/fastify-test-helper';
import fastifyTestHelperConfig from './_fastify-test-helper.config';

page('nav-menu.html', async t => {
	const {selenium, snapshotImage, grabImage} = t.context;
	const ele = await selenium.findElement({id: 'test'});

	await snapshotImage(ele, 'initial');
	await grabImage(ele, 'initial');

	await selenium.executeScript(ele => ele.update(), ele);
	await snapshotImage(ele, 'updated');
	await grabImage(ele, 'updated');

	const section1 = await selenium.findElement({id: 'section1'});
	await section1.click();
	await snapshotImage(ele, 'clicked');
	await grabImage(ele, 'clicked');

	await selenium.executeScript(() => {
		document.querySelector('#item1a').hidden = true;
	});
	await snapshotImage(ele, 'hidden-1');
	await grabImage(ele, 'hidden-1');

	await selenium.executeScript(() => {
		document.querySelector('#item1a').hidden = false;
		document.querySelector('#item2a').hidden = true;
	});
	await snapshotImage(ele, 'hidden-2');
	await grabImage(ele, 'hidden-2');
});

page('nav-empty.html', async t => {
	const {selenium, snapshotImage, grabImage} = t.context;
	/* Cannot screen capture a completely empty nav-menu. */
	const container = await selenium.findElement({id: 'container'});
	const ele = await selenium.findElement({id: 'test'});

	await snapshotImage(container, 'initial');
	await grabImage(container, 'initial');

	await selenium.executeScript(ele => ele.update(), ele);
	await snapshotImage(container, 'updated');
	await grabImage(container, 'updated');
});

page('nav-no-hrefs.html', async t => {
	const {selenium, snapshotImage, grabImage} = t.context;
	const ele = await selenium.findElement({id: 'test'});

	await snapshotImage(ele, 'initial');
	await grabImage(ele, 'initial');

	await selenium.executeScript(ele => ele.update(), ele);
	await snapshotImage(ele, 'updated');
	await grabImage(ele, 'updated');

	await selenium.executeScript(ele => ele.update(), ele);
	await snapshotImage(ele, 'updated2');
	await grabImage(ele, 'updated2');
});

export function setupTesting(browserBuilder) {
	setup(new FastifyTestHelper(browserBuilder, fastifyTestHelperConfig));
}
