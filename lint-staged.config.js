module.exports = {
  '**/*.ts': (filenames) => [
    'npx tsc --noEmit',
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],
  '**/*.(md|json)': 'npx prettier --write',
};