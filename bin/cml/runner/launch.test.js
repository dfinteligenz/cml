const { exec } = require('../../../src/utils');

describe('CML e2e', () => {
  test('cml-runner --help', async () => {
    const output = await exec('node', './bin/cml.js', 'runner', '--help');

    expect(output).toMatchInlineSnapshot(`
      "cml.js runner

      Manage self-hosted (cloud & on-premise) CI runners

      Comandos:
        cml.js runner launch  Launch and register a self-hosted runner
                              https://cml.dev/doc/ref/runner

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
