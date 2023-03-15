const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given falsy input", () => {
    const event = false;
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("0");
  });

  it("Returns the same value whenever same input is give", () => {
    const event = {
      anyKey: "any value",
      otherKey: 1000
    }
    const firstKey = deterministicPartitionKey(event);
    const secondKey = deterministicPartitionKey(event);
    expect(secondKey).toBe(firstKey);
  });

  it("Returns partitionKey value if input has partitionKey attribute", () => {
    const event = {
      partitionKey: 'my partition key value'
    };
    const key = deterministicPartitionKey(event);
    expect(key).toBe(event.partitionKey);
  })
});
