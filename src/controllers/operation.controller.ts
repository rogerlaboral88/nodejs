import { Request, Response } from "express";
import { Data } from "../interface/Data.interface";
import { CustomResponse } from "../interface/CustomResponse.interface";
import { ErrorResponse } from "../interface/ErrorResponse.interface";

export function test(req: Request, res: Response): Response {
    const data: Data = req.body;
    console.log(data);

    let customResponse: CustomResponse;
    let errorResponse: ErrorResponse;

    let arr = ['invalid_data_format'];
    errorResponse = {data:'', errors: arr};
    customResponse = {response: errorResponse}

    res.status(422);
    res.json(customResponse);
    return res;
}