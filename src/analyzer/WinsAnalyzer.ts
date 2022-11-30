import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { Analyzer } from '../Summary';

class WinsAnalyzer implements Analyzer {
  constructor(private teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (
        match[1] === this.teamName &&
        match[5] === MatchResult.HomeWin
      ) {
        wins++;
      } else if (
        match[2] === this.teamName &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }

    return `${this.teamName} wins ${wins} times`;
  }
}

export {
    WinsAnalyzer
}