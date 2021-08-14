import core = require('@actions/core');

export function getShouldFailWhenValueIsMissing()
{
    var shouldFailWhenValueIsMissing = core.getInput("shouldFailWhenValueIsMissing", { required: false });
    if (shouldFailWhenValueIsMissing === null || shouldFailWhenValueIsMissing === "" || shouldFailWhenValueIsMissing === undefined)
    {
        return null;
    }
    if (shouldFailWhenValueIsMissing.toLowerCase() !== "false" && shouldFailWhenValueIsMissing.toLowerCase() !== "true")
    {
        throw "Invalid parameter type shouldFailWhenValueIsMissing. Supply either 'true' or 'false'"
    }
    var shouldFailWhenValueIsMissingBoolean = (shouldFailWhenValueIsMissing.toLowerCase() === 'true');
    return shouldFailWhenValueIsMissingBoolean;
}