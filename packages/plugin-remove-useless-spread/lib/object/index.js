'use strict';

module.exports.report = () => `Avoid useless spread '...'`;

module.exports.filter = (path) => {
    const {comments} = path.node.properties[0];
    return !comments?.length;
};

module.exports.exclude = () => [
    '({...__b && {__c: __d}})',
    '__a = {...__a}',
];

module.exports.replace = () => ({
    '({...__a})': '__a',
});
