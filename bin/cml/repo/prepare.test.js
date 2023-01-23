const { exec } = require('../../../src/utils');

describe('CML e2e', () => {
  test('cml-ci --help', async () => {
    const output = await exec('node', './bin/cml.js', 'ci', '--help');

    expect(output).toMatchInlineSnapshot(`
      "cml.js ci

      Prepare Git repository for CML operations

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
        --fetch-depth  Number of commits to fetch (use \`0\` for all branches & tags)
                                                                              [número]
        --user-email   Git user email
                               [cadena de caracteres] [defecto: \\"olivaw@iterative.ai\\"]
        --user-name    Git user name   [cadena de caracteres] [defecto: \\"Olivaw[bot]\\"]"
    `);
  });
});
