var tape = require("tape"),
    values = require("..");


tape("values(value: object)", function(assert) {
    assert.deepEqual(values({
        0: 0,
        1: 1,
        2: 2
    }), [0, 1, 2], "should return object's values");
    assert.end();
});
