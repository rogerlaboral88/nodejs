"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function test(req, res) {
    var structureResponse;
    var dataResponse;
    try {
        const dataRequest = req.body;
        console.log(dataRequest);
        if (validation(dataRequest.array)) {
            let data;
            data =
                {
                    suma: dataRequest.array.reduce((accumulator, currentValue) => accumulator + currentValue),
                    resta: dataRequest.array.reduce((accumulator, currentValue) => accumulator - currentValue),
                    multiplicacion: dataRequest.array.reduce((accumulator, currentValue) => accumulator * currentValue),
                    division: dataRequest.array.reduce((accumulator, currentValue) => accumulator / currentValue),
                };
            dataResponse = { data: data, errors: [] };
            structureResponse = { response: dataResponse };
            res.status(200);
            res.json(structureResponse);
        }
        else {
            let arr = ['invalid_data_format'];
            dataResponse = { data: '', errors: arr };
            structureResponse = { response: dataResponse };
            res.status(422);
            res.json(structureResponse);
        }
    }
    catch (_a) {
        let arr = ['internal_server_error’'];
        dataResponse = { data: '', errors: arr };
        structureResponse = { response: dataResponse };
        res.status(500);
        res.json(structureResponse);
    }
    return res;
}
exports.test = test;
function validation(array) {
    var correct = true;
    if (Array.isArray(array)) {
        if (array.length > 0) {
            array.forEach(function (element) {
                if (typeof element != 'number') {
                    correct = false;
                    return;
                }
            });
        }
        else {
            correct = false;
        }
    }
    else {
        correct = false;
    }
    return correct;
}
