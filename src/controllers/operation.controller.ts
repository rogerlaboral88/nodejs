import { Request, Response } from "express";
import { DataRequest } from "../interface/DataRequest.interface";
import { StructureResponse } from "../interface/StructureResponse.interface";
import { DataResponse } from "../interface/DataResponse.interface";
import { Data } from "../interface/Data.interface";

export function test(req: Request, res: Response): Response {
    var structureResponse: StructureResponse;
    var dataResponse: DataResponse;

    try {
        const dataRequest: DataRequest = req.body;
        console.log(dataRequest);

        if (validation(dataRequest.array)) {
            let data: Data;
            data = 
            { 
                suma: dataRequest.array.reduce((accumulator: number, currentValue: number) => accumulator + currentValue), 
                resta: dataRequest.array.reduce((accumulator: number, currentValue: number) => accumulator - currentValue), 
                multiplicacion: dataRequest.array.reduce((accumulator: number, currentValue: number) => accumulator * currentValue), 
                division: dataRequest.array.reduce((accumulator: number, currentValue: number) => accumulator / currentValue), 
            };
            dataResponse = {data: data, errors: []};
            structureResponse = {response: dataResponse}
            res.status(200);
            res.json(structureResponse);
        } else {
            let arr = ['invalid_data_format'];
            dataResponse = {data:'', errors: arr};
            structureResponse = {response: dataResponse}
            res.status(422);
            res.json(structureResponse);
        }

    } catch {
        let arr = ['internal_server_error’'];
        dataResponse = {data:'', errors: arr};
        structureResponse = {response: dataResponse}
        res.status(500);
        res.json(structureResponse);
    }
    return res;
}

function validation(array: any) {
    var correct = true;
    if (Array.isArray(array)) {
        if(array.length > 0) {
            array.forEach(function(element) {
                if(typeof element != 'number') {
                    correct = false;
                    return;
                }
            });
        } else {
            correct = false;
        }
    } else {
        correct = false;
    }
    return correct;
}