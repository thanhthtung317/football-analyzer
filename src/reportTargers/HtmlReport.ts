import fs from "fs";
import { OutputTarget } from "../Summary";

class HtmlReport implements OutputTarget{
    print(report: string): void {
        const html = `
                        <main>
                            <h1>Analysis Report</h1>
                            <p>${report}</p>
                        </main>
        `
        fs.writeFileSync('report.html', html)       
    }
}

export {
    HtmlReport
}