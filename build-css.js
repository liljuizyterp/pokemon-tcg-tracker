const fs = require('fs');
const postcss = require('postcss');
const tailwind = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

async function build() {
  const inputPath = 'src/index.css';
  const outDir = 'dist';
  const outPath = `${outDir}/styles.css`;

  const css = fs.readFileSync(inputPath, 'utf8');

  const result = await postcss([tailwind, autoprefixer]).process(css, {
    from: inputPath,
    map: false,
  });

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, result.css, 'utf8');
  console.log('Built', outPath);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
