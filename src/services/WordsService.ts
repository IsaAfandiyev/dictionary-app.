import axios from "axios";
import {BaseModel} from "../models/api/BaseModel";
import {IBaseService} from "./IBaseService";

export class WordsService implements IBaseService {
    async getAll(word:string):Promise<BaseModel[]>{
        let response = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        let res: BaseModel[] = response.data;

        return res;
    }
}