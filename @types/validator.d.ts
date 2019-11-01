declare module 'validator' {

    export interface TitleValidationInfo {

        text : string;
        allowTrailingSpaces : boolean;
        minimumLength : number
    
    }
    
    export interface TitleValidationReport {
    
        isValid : boolean;
        error? : string;
    
    }

    export function validateTitle({text, allowTrailingSpaces, minimumLength} : TitleValidationInfo) : TitleValidationReport;

}