export interface IBaseService{
    getAll(word:string):Promise<any[]>
}