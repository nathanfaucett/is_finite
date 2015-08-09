var tape = require("tape"),
    isFinite = require("..");


tape("isFinite(value) should return true when the value is finite", function(assert) {
    assert.equal(isFinite(null), false);
    assert.equal(isFinite(undefined), false);
    assert.equal(isFinite({}), false);
    assert.equal(isFinite([]), false);
    assert.equal(isFinite(""), false);
    assert.equal(isFinite(/./), false);
    assert.equal(isFinite(function noop() {}), false);
    assert.equal(isFinite(Infinity), false);
    assert.equal(isFinite(-Infinity), false);

    assert.equal(isFinite(0), true);

    assert.end();
});
