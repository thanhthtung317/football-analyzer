import { WinsAnalyzer } from "./analyzer/WinsAnalyzer";
import { MatchData } from "./MatchData";
import { HtmlReport } from "./reportTargers/HtmlReport";


interface Analyzer  {
    run(matches:MatchData[]):string
}

interface OutputTarget {
    print(report:string):void
}

class Summary {
    static analyticWinsAndPrintHtmlReport(team:string):Summary{
        return new Summary(new WinsAnalyzer(team), new HtmlReport())
    }

    constructor(private analyser:Analyzer, private outputTarget:OutputTarget){}
    buildAndPrintReport(matches:MatchData[]){
        this.outputTarget.print(this.analyser.run(matches))
    }
}

export {
    Analyzer,
    OutputTarget,
    Summary
}