'use strict';

// import path from 'path';
import Hapi from '@hapi/hapi';
import routes from './routes.js';
import Inert from '@hapi/inert';
import AuthBearer from 'hapi-auth-bearer-token';
import makeAdminAuth from './auth/admin.js';
import makeUserAuth from './auth/user.js';

import dotenv from 'dotenv';
dotenv.config();

const init = async () => {

    const server = Hapi.server({
        port: parseInt(process.env.PORT || "3003"),
        host: 'localhost',
        routes: {
            cors: true,
            validate: {
                failAction: function(request, h, err) {
                    if (process.env.NODE_ENV === 'production') {
                        // In prod, log a limited error message and throw the default Bad Request error.
                        console.error('ValidationError:', err.message); // Better to use an actual logger here.
                        throw new Error(`Invalid request payload input`);
                    } else {
                        // During development, log and respond with the full error.
                        console.error(err);
                        throw err;
                    }
                }
            }
        }
    });

    await server.register([Inert, AuthBearer]);

    makeUserAuth(server);
    makeAdminAuth(server);

    server.route(routes);
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    process.exit(1);
});

init();

