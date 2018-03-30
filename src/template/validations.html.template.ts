import { Validation } from '../model/validation.model';

export const validationTemplate = (validations: Validation[]) => {
  let content: string = '';
  for (const validation of validations) {
    content += `<tr><td>${validation.rule}</td><td>${validation.className}</td><td>${validation.error}</td></tr>`;
  }
  return `<!DOCTYPE html>
        <html>
            <head>
                <link href="style.css" rel="stylesheet">
            </head>            
          <body>
            <div class="toolbar">
                <div class="toolbar-row">
                    <div class="toolbar-menu">
                        <ul class="menu-elements">
                            <li class="menu-element"><a class="menu-link" href="index.html">graph</a></li>
                            <li class="menu-element"><a class="menu-link" href="validations.html">validations</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <h4>Analysis result for validations : ${validations.length} modules identified with errors</h4>
            <table>
                <tr>
                    <th>Type</th>
                    <th>moduleName</th>
                    <th>error</th>
                </tr>
                ${content}
            </table>
          </body>
        </html>`;
};