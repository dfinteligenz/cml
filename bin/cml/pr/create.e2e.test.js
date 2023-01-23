const { exec } = require('../../../src/utils');

describe('CML e2e', () => {
  test('cml-pr --help', async () => {
    const output = await exec('node', './bin/cml.js', 'pr', '--help');

    expect(output).toMatchInlineSnapshot(`
      "cml.js pr <glob path...>

      Manage pull requests

      Comandos:
        cml.js pr create [glob path...]  Create a pull request (committing any given
                                         paths first)
                                         https://cml.dev/doc/ref/pr

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
        --help                   Muestra ayuda                              [booleano]"
    `);
  });
});
