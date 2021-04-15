What is actually happening?
1. Cloud sql proxy opens up a socket at 127.0.0.1:3306 (for us to connect to the DB through),
2. Then we connect to the cloud sql instance through that 127.0.0.1:3306 socket connection
    2a) For the cloud sql proxy, TCP and UNIX sockets are available, but we'll use tcp to prevent issues with windows (no unix sockets on windows :())

The only time you need to use the actual IP of the database are when you're setting up the proxy


Tutorial link: https://cloud.google.com/sql/docs/mysql/connect-admin-proxy
You must have the cloud SDK and the cloud proxy installed, with the proxy in the same directory as the project, else provide the absolute path


The "instance of google cloud sql" we're using is named cscerestaurantapp
but the actual database name we're using is restaurantapp <= SO YOU HAVE TO USE THAT NAME WHEN CONNECTING IN JS


Command run in powershell (or terminal) to create OS environment variables:

This variable is the path to your TLS key you received from google cloud services

$env:GOOGLE_APPLICATION_CREDENTIALS="<artful-oxygen-306721-2dab23816e59.json>"

Host and port number
$env:DB_HOST="127.0.0.1:3306"

Your IAM account username (IAM access level account )
$env:DB_USER="<admin>"

Password to the database
$env:DB_PASS="<calculatedchaoticcode61320!!!>"

Name of the database to connect to
$env:DB_NAME="<restaurantapp>"

To authorize/authenticate(?) other users we need to include the credential file (associated TLS key):

This can be done several ways, easiest are:
1:Setting the global environment variable (in powershell/terminal) to the path to the credential file
Another option (but it's virtually equivalent to option 1) is passing the file path with the -credential_file argument (this is done automatically if your environment variable is set)

2:If you've installed the google cloud CLI and authenticated your account there, the proxy will autodetect it


Last powershell command to start proxy and forward to localhost:
NOTE: Make sure you're in the directory with the proxy file in it before running the command
./cloud_sql_proxy -instances=artful-oxygen-306721:us-central1:cscerestaurantapp=tcp:3306 -host= 127.0.0.1

Mysql library for JS documentation:
https://www.npmjs.com/package/mysql#performing-queries

^^ You can just install the package for JS with npm install mysql