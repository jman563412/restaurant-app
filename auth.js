//Steps in the Oauth2 process:
//1: Registering OAuth app, done once in cloud console
//2: Authenticating to get auth code
//3: Exchange auth code for AuthToken and refresh token
//4: Call proper API with access token
//5: Handle token expiration

//WE NEED TO JUST MAKE THE FUNCTION PUBLIC AND DO AUTHENTICATION FOR EACH REQUEST
//https://cloud.google.com/functions/docs/writing/http#limitations

//On how to use google OAuth with node to get token that we set as Authorization:[token] in headers section of http request
//https://github.com/googleapis/google-api-nodejs-client/blob/master/README.md#oauth2-client


CLIENT_ID = '752522303631-12hja7brh0d0epu0j1o7g7m8klvoqejk.apps.googleusercontent.com';
CLIENT_SECRET = '1mFzkYOqMIPNJIgHbMNIyaFT';
REDIRECT_URL = 'https://localhost:8080';
CLIENT_NAME = 'customer';

const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);

// generate a url that asks permissions for cloud-platform
//Endpoints for specific permissions at this link: https://developers.google.com/identity/protocols/oauth2/scopes
const scopes = [
  'https://www.googleapis.com/auth/cloud-platform'
];


auth_url = 'https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform&response_type=code&client_id=752522303631-12hja7brh0d0epu0j1o7g7m8klvoqejk.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Flocalhost%3A8080';


//Inside the redirect url there will be a parameter containing the authorization CODE (NOT TOKEN IT'S A DIFFERENT THING)
//Will look like: GET https://localhost:8080?code=[authorizationCode]

auth_code = '4/0AY0e-g7hczKc6b1UVvs66pHwikhYLBffbw3BD0Y5DYUohMOwkV-qGISj5C336xCCDPu9Ew';

//We use the authorization code passed as a param in the returned ^ url as parameter for fetching actual token/tokens

// Need to save these into a restricted directory and pull from files to use the same token for any future requests
//TODO: Catch error if token is expired, use refresh token to get new access token

//Then google will do a page redirect to the page we set it to
//Currently set to https://localhost:8080 but we may change it later



function getGoogleAuthURL() {
    /*
     * Generate a url that asks permissions to the user's email and profile
     */
    const scopes = [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ];

    return oauth2Client.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent',
      scope: scopes, // If you only need one scope you can pass it as string
    });
  }

  async function getGoogleUser({ code }) {
    const { tokens } = await oauth2Client.getToken(code);
  
    // Fetch the user's profile with the access token and bearer
    const googleUser = await axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokens.id_token}`,
          },
        },
      )
      .then(res => res.data)
      .catch(error => {
        throw new Error(error.message);
      });
  
    return googleUser;
  }

  async function googleAuth(input, context) {
    const googleUser = await getGoogleUser({ code: input.code });

    let user = await this.userModel
      .findOne({ githubId: String(googleUser.id) })
      .exec();

    if (user) {
      // Update their profile

    }

    if (!user) {
      // Create the user in the database
      user = new User()
    }

    // Generate a JWT, add it as a cookie

    return user;
  }


  