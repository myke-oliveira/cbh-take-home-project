const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (!event) return TRIVIAL_PARTITION_KEY;

  if (event.partitionKey) return event.partitionKey;

  const jsonEvent = JSON.stringify(event);
  const key = crypto.createHash("sha3-512").update(jsonEvent).digest("hex");

  if (!key) return TRIVIAL_PARTITION_KEY;

  if (key.length > MAX_PARTITION_KEY_LENGTH)
    return crypto.createHash("sha3-512").update(key).digest("hex");

  return key;
};