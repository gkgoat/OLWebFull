import './l10n.js/l10n.js'
export * from './loc.default.js'
export let l = function (string) {
    return string.toLocaleString();
};