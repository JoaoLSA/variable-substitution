import core = require('@actions/core');

export function getShouldFailWhenValueIsMissing()
{
    var shouldFailWhenValueIsMissing = core.getInput("shouldFailWhenValueIsMissing", { required: false });
    console.log(shouldFailWhenValueIsMissing);
    if (shouldFailWhenValueIsMissing.toLowerCase() !== "false" && shouldFailWhenValueIsMissing.toLowerCase() !== "true")
    {
        throw "Invalid parameter type shouldFailWhenValueIsMissing. Supply either 'true' or 'false'"
    }
    var shouldFailWhenValueIsMissingBoolean = (shouldFailWhenValueIsMissing === 'true');
    return shouldFailWhenValueIsMissingBoolean;
}