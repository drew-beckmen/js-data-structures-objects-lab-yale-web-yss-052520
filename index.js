// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(obj, k, v) {
    return Object.assign({}, obj, {[k]: v})
}

function destructivelyUpdateDriverWithKeyAndValue(obj, k, v) {
    obj[k] = v 
    return obj
}
//using bracket notation because we want the VALUE of the parameter variable
function deleteFromDriverByKey(obj, k) {
    let copy_obj = {...obj}
    delete copy_obj[k] 
    return copy_obj
}

function destructivelyDeleteFromDriverByKey(obj, k) {
    delete obj[k] 
    return obj 
}

