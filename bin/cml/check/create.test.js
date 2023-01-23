const { exec } = require('../../../src/utils');

describe('CML e2e', () => {
  test('cml send-github-check --help', async () => {
    const output = await exec(
      'node',
      './bin/cml.js',
      'send-github-check',
      '--help'
    );

    expect(output).toMatchInlineSnapshot(`
      "cml.js send-github-check <markdown file>

      Global Options:
        --log                    Logging verbosity
        [cadena de caracteres] [selección: \\"error\\", \\"warn\\", \\"info\\", \\"debug\\"] [defecto:
                                                                               \\"info\\"]
        --driver                 Git provider where the repository is hosted
         [cadena de caracteres] [selección: \\"github\\", \\"gitlab\\", \\"bitbucket\\"] [defecto:
                                                           infer from the environment]
        --repo                   Repository URL or slug
                          [cadena de caracteres] [defecto: infer from the environment]
        --driver-token, --token  GITHUB_TOKEN or Github App token. Personal access
                                 token won't work
                          [cadena de caracteres] [defecto: infer from the environment]
        --help                   Muestra ayuda                              [booleano]

      Opciones:
        --commit-sha, --head-sha  Commit SHA linked to this comment
                                                [cadena de caracteres] [defecto: HEAD]
        --conclusion              Conclusion status of the check
                   [cadena de caracteres] [selección: \\"success\\", \\"failure\\", \\"neutral\\",
                             \\"cancelled\\", \\"skipped\\", \\"timed_out\\"] [defecto: \\"success\\"]
        --status                  Status of the check
              [cadena de caracteres] [selección: \\"queued\\", \\"in_progress\\", \\"completed\\"]
                                                                [defecto: \\"completed\\"]
        --title                   Title of the check
                                        [cadena de caracteres] [defecto: \\"CML Report\\"]"
    `);
  });
});
