import { Data } from "./Data.interface";

export interface DataResponse {
    data: Data | string;
    errors: string[];
}