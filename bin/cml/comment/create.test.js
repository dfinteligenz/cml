const { exec } = require('../../../src/utils');

describe('Comment integration tests', () => {
  test('cml send-comment --help', async () => {
    const output = await exec('node', './bin/cml.js', 'send-comment', '--help');
    expect(output).toMatchInlineSnapshot(`
      "cml.js send-comment <markdown file>

      Global Options:
        --log                    Logging verbosity
        [cadena de caracteres] [selección: \\"error\\", \\"warn\\", \\"info\\", \\"debug\\"] [defecto:
                                                                               \\"info\\"]
        --driver                 Git provider where the repository is hosted
         [cadena de caracteres] [selección: \\"github\\", \\"gitlab\\", \\"bitbucket\\"] [defecto:
                                                           infer from the environment]
        --repo                   Repository URL or slug
                          [cadena de caracteres] [defecto: infer from the environment]
        --driver-token, --token  CI driver personal/project access token (PAT)
                          [cadena de caracteres] [defecto: infer from the environment]
        --help                   Muestra ayuda                              [booleano]

      Opciones:
        --target                    Comment type (\`commit\`, \`pr\`, \`commit/f00bar\`,
                                    \`pr/42\`, \`issue/1337\`),default is automatic (\`pr\`
                                    but fallback to \`commit\`).  [cadena de caracteres]
        --watch                     Watch for changes and automatically update the
                                    comment                                 [booleano]
        --publish                   Upload any local images found in the Markdown
                                    report                  [booleano] [defecto: true]
        --publish-url               Self-hosted image server URL
                             [cadena de caracteres] [defecto: \\"https://asset.cml.dev\\"]
        --publish-native, --native  Uses driver's native capabilities to upload assets
                                    instead of CML's storage; not available on GitHub
                                                                            [booleano]
        --watermark-title           Hidden comment marker (used for targeting in
                                    subsequent \`cml comment update\`); \\"{workflow}\\" &
                                    \\"{run}\\" are auto-replaced
                                                  [cadena de caracteres] [defecto: \\"\\"]"
    `);
  });
});
