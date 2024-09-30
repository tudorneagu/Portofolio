import { strict as assert } from "assert";
import phoneNumberFormat from "../../../src/components/utils/PhoneNumber.js";

describe("PhoneNumber", function () {
  it("should return the format +33 X XX XX XX XX", function () {
    assert.equal(phoneNumberFormat("660388641"), "+33 6 60 38 86 41");
  });
});
