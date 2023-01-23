const { exec } = require('../../../src/utils');

describe('CML cli test', () => {
  test('cml publish --help', async () => {
    const output = await exec('node', './bin/cml.js', 'publish', '--help');

    expect(output).toMatchInlineSnapshot(`
      "cml.js publish <asset>

      Global Options:
            --log                    Logging verbosity
        [cadena de caracteres] [selección: \\"error\\", \\"warn\\", \\"info\\", \\"debug\\"] [defecto:
                                                                               \\"info\\"]
            --driver                 Git provider where the repository is hosted
         [cadena de caracteres] [selección: \\"github\\", \\"gitlab\\", \\"bitbucket\\"] [defecto:
                                                           infer from the environment]
            --repo                   Specifies the repo to be used. If not specified
                                     is extracted from the CI ENV.
                          [cadena de caracteres] [defecto: infer from the environment]
            --driver-token, --token  CI driver personal/project access token (PAT)
                          [cadena de caracteres] [defecto: infer from the environment]
            --help                   Muestra ayuda                          [booleano]

      Opciones:
            --md         Output in markdown format [title || name](url)     [booleano]
        -t, --title      Markdown title [title](url) or ![](url title)
                                                                [cadena de caracteres]
            --native     Uses driver's native capabilities to upload assets instead of
                         CML's storage; not available on GitHub             [booleano]
            --mime-type  MIME type
                        [cadena de caracteres] [defecto: infer from the file contents]"
    `);
  });
});
