import '../server.js';
import {userDb} from '../db/connection.js';

export default function (server) {
    server.auth.strategy('user', 'bearer-access-token', {
        allowQueryToken: true,
        allowChaining: true,     // optional, false by default
        validate: async (request, token, h) => {
                const user = await userDb.findOne({token});
                if (user) {
                    return {
                        isValid: true,
                        credentials: user,
                        artifacts: {}
                    }
                }
                return {
                    isValid: false,
                    credentials: {},
                    artifacts: {}
                }
        }
    })
};