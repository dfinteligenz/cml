const { exec } = require('../../../src/utils');

describe('CML e2e', () => {
  test('cml tensorboard-dev --help', async () => {
    const output = await exec(
      'node',
      './bin/cml.js',
      'tensorboard-dev',
      '--help'
    );

    expect(output).toMatchInlineSnapshot(`
      "cml.js tensorboard-dev

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
            --help                   Muestra ayuda                          [booleano]

      Opciones:
        -c, --credentials  TensorBoard credentials as JSON, usually found at
                           ~/.config/tensorboard/credentials/uploader-creds.json
                                                    [cadena de caracteres] [requerido]
            --logdir       Directory containing the logs to process
                                                                [cadena de caracteres]
            --name         Tensorboard experiment title; max 100 characters
                                                                [cadena de caracteres]
            --description  Tensorboard experiment description in Markdown format; max
                           600 characters                       [cadena de caracteres]
            --md           Output as markdown [title || name](url)          [booleano]
        -t, --title        Markdown title, if not specified, param name will be used
                                                                [cadena de caracteres]"
    `);
  });
});
