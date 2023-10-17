import path from 'node:path';
import {writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';

import t from 'libtap';
import {testBrowser, grabImage} from '@cfware/tap-selenium-manager';
import {FastifyTestHelper, globToCustomGetters} from '@cfware/fastify-test-helper';

const cwd = path.resolve(path.dirname(fileURLToPath(import.meta.url)));

const imageFile = fullname => path.join(
    cwd,
    'tap-snapshots',
    fullname.replaceAll(/[^\w.-]+/gu, '-')
);

const processImage = async (t, element, imageID) => {
    const image64 = await grabImage(element);
    t.matchSnapshot(image64, imageID);
    await writeFile(imageFile(`${t.fullname}-${imageID}.png`), image64);
};

const pages = {
    async 'nav-menu.html'(t, selenium) {
        const element = await selenium.findElement({id: 'test'});

        await processImage(t, element, 'initial');

        await selenium.executeScript(element => element.update(), element);
        await processImage(t, element, 'updated');

        const section1 = await selenium.findElement({id: 'section1'});
        await section1.click();
        await processImage(t, element, 'clicked');

        await selenium.executeScript(() => {
            document.querySelector('#item1a').hidden = true;
        });
        await processImage(t, element, 'hidden-1');

        await selenium.executeScript(() => {
            document.querySelector('#item1a').hidden = false;
            document.querySelector('#item2a').hidden = true;
        });
        await processImage(t, element, 'hidden-2');
    },

    async 'nav-empty.html'(t, selenium) {
        /* Cannot screen capture a completely empty nav-menu. */
        const container = await selenium.findElement({id: 'container'});
        const element = await selenium.findElement({id: 'test'});

        await processImage(t, container, 'initial');

        await selenium.executeScript(element => element.update(), element);
        await processImage(t, container, 'updated');
    },

    async 'nav-no-hrefs.html'(t, selenium) {
        const element = await selenium.findElement({id: 'test'});
        await processImage(t, element, 'initial');

        await selenium.executeScript(element => element.update(), element);
        await processImage(t, element, 'updated');

        await selenium.executeScript(element => element.update(), element);
        await processImage(t, element, 'updated2');
    }
};

const daemon = new FastifyTestHelper({
    customGetters: globToCustomGetters('nav-*.js', {cwd})
});

t.test('browsers', async t => {
    await testBrowser(t, 'firefox', daemon, pages);
    await testBrowser(t, 'chrome', daemon, pages);
});
