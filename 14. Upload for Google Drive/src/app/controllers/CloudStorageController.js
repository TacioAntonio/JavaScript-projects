const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/drive'];

const TOKEN_PATH = 'token.json';

class CloudStorageController {
    sendFile(req, res) {
        fs.readFile('credentials.json', (err, content) => {
            if (err) return log(chalk.red('Error loading client secret file:'), chalk.red(err));

            authorize(JSON.parse(content), storeFiles);
        });

        function authorize(credentials, callback) {
            const { client_secret, client_id, redirect_uris } = credentials.installed;

            const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

            fs.readFile(TOKEN_PATH, (err, token) => {
                if (err) {
                    return getAccessToken(oAuth2Client, callback);
                }

                oAuth2Client.setCredentials(JSON.parse(token));

                callback(oAuth2Client);
            });
        }

        function getAccessToken(oAuth2Client, callback) {
            const authUrl = oAuth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: SCOPES,
            });

            log(chalk.blue('Authorize this app by visiting this url:'), chalk.blue(authUrl));

            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });

            rl.question('Enter the code from that page here: ', (code) => {
                rl.close();

                oAuth2Client.getToken(code, (err, token) => {
                    if (err) return log(chalk.red('Error retrieving access token'), chalk.red(err));

                    oAuth2Client.setCredentials(token);

                    fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                        if (err) return log(chalk.red(err));
                    });

                    callback(oAuth2Client);
                });
            });
        }

        function storeFiles(auth) {
            log(chalk.blue("auth"), chalk.blue(JSON.stringify(auth)));

            const drive = google.drive({ version: 'v3', auth });

            var fileMetadata = {
                'name': localStorage.getItem('archive')
            };

            var media = {
                mimeType: `image/${localStorage.getItem('extension')}`,
                body: fs.createReadStream(`${process.cwd()}/uploads/${localStorage.getItem('archive')}`)
            };

            drive.files.create({
                resource: fileMetadata,
                media: media,
                fields: 'id'
            }, function (err, file) {
                if (err) {
                    log(chalk.red(err));
                } else {
                    log(chalk.blue('File Id: '), chalk.blue(file.data.id));
                }
            });
        }

        return res.redirect('/');
    }
}

module.exports = new CloudStorageController();