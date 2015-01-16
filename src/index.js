module.exports = Number.isFinite || function isFinite(obj) {
    return !(
        typeof(obj) !== "number" ||
        (obj !== obj || obj === Infinity || obj === -Infinity) ||
        false
    );
};
