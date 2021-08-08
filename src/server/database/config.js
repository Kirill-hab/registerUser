import * as dotenv from 'dotenv';

export function loadConfig() {
    const envMap = {
        local: '.env',
        development: '.env.dev',
    };

    let env = process.env.NODE_ENV;

    if (!env) {
        env = 'local';
    }

    dotenv.config({ path: envMap[env] || envMap.local });
}