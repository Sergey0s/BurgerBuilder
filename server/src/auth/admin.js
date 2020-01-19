import '../server.js';

export default function (server) {
    server.auth.strategy('admin', 'bearer-access-token', {
        allowQueryToken: true,
        allowChaining: true,             // optional, false by default
        validate: async (request, AdminToken, h) => {
            const isValid = AdminToken === process.env.ADMIN_TOKEN;
            if (isValid) {
                return {
                    isValid:true,
                    credentials: {admin: {isAdmin: true}},
                    artifacts: {}
                }
            }
            return {
                isValid,
                credentials: {},
                artifacts: {}
            }
        }
    });
}