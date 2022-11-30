import fs = require('fs')
import { MatchResult } from './MatchResult'


export abstract class CSVFileReader<T>{
    public data:T[] = []

    constructor(private filename:string){}
    
    abstract mapRow(row: string[]):T

    read():void{
        this.data = fs
        .readFileSync(this.filename,{
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row:string):string[]=>{
            return row.split(',')
        })
        .map(this.mapRow)
    }
}