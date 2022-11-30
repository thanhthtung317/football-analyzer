import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matches = MatchReader.fromCSV('football.csv')
matches.load(); 


const summary = Summary.analyticWinsAndPrintHtmlReport('Man United') 
summary.buildAndPrintReport(matches.matches);

