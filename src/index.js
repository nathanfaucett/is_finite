module.exports = Number.isFinite || function isFinite(value) {
    return !(
        typeof(value) !== "number" ||
        (value !== value || value === Infinity || value === -Infinity) ||
        false
    );
};
