"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
function getShouldFailWhenValueIsMissing() {
    var shouldFailWhenValueIsMissing = core.getInput("shouldFailWhenValueIsMissing", { required: false });
    console.log(shouldFailWhenValueIsMissing);
    if (shouldFailWhenValueIsMissing === null || shouldFailWhenValueIsMissing === "" || shouldFailWhenValueIsMissing === undefined) {
        return null;
    }
    if (shouldFailWhenValueIsMissing.toLowerCase() !== "false" && shouldFailWhenValueIsMissing.toLowerCase() !== "true") {
        throw "Invalid parameter type shouldFailWhenValueIsMissing. Supply either 'true' or 'false'";
    }
    var shouldFailWhenValueIsMissingBoolean = (shouldFailWhenValueIsMissing === 'true');
    return shouldFailWhenValueIsMissingBoolean;
}
exports.getShouldFailWhenValueIsMissing = getShouldFailWhenValueIsMissing;
