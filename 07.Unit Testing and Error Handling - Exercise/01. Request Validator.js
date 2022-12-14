function requestValidator(obj){
    let pattern = new RegExp(/^(?:\*|[A-Za-z\.\d]+)$/gm);
    let messagePattern = /^[^\<\>\\\&\'\"]*$/gm;
    let validMethods = ['POST', 'GET', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (obj.method == undefined | !validMethods.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`)
    }
    if (obj.uri == undefined | !pattern.test(obj.uri)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }
    if (obj.version == undefined | !validVersions.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }
    if (obj.message == undefined | !messagePattern.test(obj.message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }
    let match = messagePattern.test(obj.message);
    console.log(match);
    return obj;
}