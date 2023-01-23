const { exec } = require('../src/utils');
const fetch = require('node-fetch');

describe('command-line interface tests', () => {
  test('cml --help', async () => {
    const output = await exec('node', './bin/cml.js', '--help');

    expect(output).toMatchInlineSnapshot(`
      "cml.js <command>

      Comandos:
        cml.js check              Manage CI checks
        cml.js comment            Manage comments
        cml.js pr <glob path...>  Manage pull requests
        cml.js runner             Manage self-hosted (cloud & on-premise) CI runners
        cml.js tensorboard        Manage tensorboard.dev connections
        cml.js workflow           Manage CI workflows
        cml.js ci                 Prepare Git repository for CML operations

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
        --version  Muestra número de versión                                [booleano]"
    `);
  });
});

describe('Valid Docs URLs', () => {
  test.each([
    'workflow/rerun',
    'tensorboard/connect',
    'runner/launch',
    'repo/prepare',
    'pr/create',
    'comment/create',
    'comment/update',
    'check/create',
    'asset/publish'
  ])('Check Docs Link', async (cmd) => {
    const { DOCSURL } = require(`./cml/${cmd}`);
    const { status } = await fetch(DOCSURL);
    expect(status).toBe(200);
  });
});
