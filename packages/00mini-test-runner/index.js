import { glob } from 'glob';
import fs, { write } from 'fs';
import { build } from 'esbuild';

const files = glob.sync('*.spec.js');

for (const file of files) {
	const fileContent = fs.readFileSync(file, { encoding: 'utf-8' });
	loadModule(fileContent + `import {run} from './core.js';run();`);
}

async function loadModule(contents) {
	const result = await build({
		stdin: {
			contents,
			resolveDir: process.cwd(),
		},
		bundle: true,
		write: false,
	});
	new Function(result.outputFiles[0].text)();
}
