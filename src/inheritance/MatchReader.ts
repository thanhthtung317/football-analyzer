import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";
import {CSVFileReader} from './CSVFileReader'

type MatchData = [Date, string, string, number, number, MatchResult, string]

class MatchReader extends CSVFileReader<MatchData>{
    mapRow(row:string[]):MatchData{
        return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                +row[3],
                +row[4],
                row[5] as MatchResult,
                row[6]
            ]
    }
}

export {
    MatchReader
}