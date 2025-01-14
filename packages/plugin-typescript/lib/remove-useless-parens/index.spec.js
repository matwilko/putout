'use strict';

const {createTest} = require('@putout/test');
const plugin = require('.');

const test = createTest(__dirname, {
    printer: 'putout',
    plugins: [
        ['typescript/remove-useless-parens', plugin],
    ],
});

test('plugin-typescript: remove-useless-parens: report', (t) => {
    t.report('remove-useless-parens', 'Avoid useless parens');
    t.end();
});

test('plugin-typescript: remove-useless-parens: transform', (t) => {
    t.transform('remove-useless-parens');
    t.end();
});

test('plugin-typescript: remove-useless-parens: transform: nested', (t) => {
    t.transform('nested');
    t.end();
});

test('plugin-typescript: remove-useless-parens: no transform: generic', (t) => {
    t.noTransform('generic');
    t.end();
});
