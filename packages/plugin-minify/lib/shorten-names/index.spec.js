'use strict';

const {createTest} = require('@putout/test');
const plugin = require('.');

const test = createTest(__dirname, {
    printer: 'putout',
    plugins: [
        ['shorten-names', plugin],
    ],
});

test('plugin-minify: shorten-names: report', (t) => {
    t.report('shorten-names', 'Shorten name');
    t.end();
});

test('plugin-minify: shorten-names: transform', (t) => {
    t.transform('shorten-names');
    t.end();
});

test('plugin-minify: shorten-names: transform: declared', (t) => {
    t.transform('declared');
    t.end();
});

test('plugin-minify: shorten-names: transform: var', (t) => {
    t.transform('var');
    t.end();
});

test('plugin-minify: shorten-names: transform: freeze', (t) => {
    t.transform('freeze');
    t.end();
});

test('plugin-minify: shorten-names: transform: is-array', (t) => {
    t.transform('is-array');
    t.end();
});
