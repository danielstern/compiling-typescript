
export function validateTitle({text, allowTrailingSpaces, minimumLength}) {

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