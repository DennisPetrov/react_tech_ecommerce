export function checkIfNumber(value){
    const val=parseInt(value);
    if((val!==0 && !val) || isNaN(val)){
        return false;
    }else{
        return true;
    }
}
export function validate(val,pattern) {
    var value=val.trim();
    var result={
        valid:true,
        message:""
    }
    if(!value){
        result.valid=false;
        result.message = "Field should not be empty";
    }else if (pattern) {
        if (typeof pattern === "function") {
            if (!pattern(value)) {
                result.message = "Field value is incorrect";
                result.valid = false;
            }
        } else {
            if (!pattern.test(value)) {
                result.message = "Field value is incorrect";
                result.valid = false;
            }
        }
    }else if(value && value.length<3){
        result.valid=false;
        result.message = "Field should contain at least 3 characters";
    }
    return result;
}