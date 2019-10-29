console.log("Referenced project has been compiled.");

export interface TitleValidationInfo {

    text : string;
    allowTrailingSpaces : boolean;
    minimumLength : number

}

export interface TitleValidationReport {

    isValid : boolean;
    error? : string;

}

export function validateTitle({text, allowTrailingSpaces, minimumLength} : TitleValidationInfo) : TitleValidationReport {

    if (text.length < minimumLength) {

        return {

            isValid: false,
            error: "Title is too short"

        }

    }

    if (allowTrailingSpaces === false && text.endsWith(` `)) {

        return {

            isValid: false,
            error: "Contains trailing spaces"

        }
    }

    return {

        isValid : true

    }

}