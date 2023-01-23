'use strict';

const getRule = (a) => ({
    [a]: require(`./${a}`),
});

module.exports.rules = {
    ...getRule('remove-value-from-control'),
    ...getRule('apply-clear-errors'),
};
