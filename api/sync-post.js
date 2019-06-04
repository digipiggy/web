const shared = require('./shared');
const parseBody = require('co-body');
const jsonToString = require('../shared/jsonToString');

module.exports = async (req, res) => {
    try {
        shared.cors.setStandardHeaders(res);
        if (req.method === 'OPTIONS') {
            res.statusCode = 204;
            res.setHeader('Content-Length', '0');
            return res.end();
        } else if (req.method === 'POST') {
            if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
                res.statusCode = 401;
                return res.end('Unauthorized');
            }
            const apiKey = req.headers.authorization.split(' ')[1];
            if (process.env.PIGGY_API_KEY !== apiKey) {
                res.statusCode = 401;
                return res.end('Unauthorized');
            }

            const requestBody = await parseBody.json(req);
            const device = await shared.device.getById(requestBody.coreid);


            const toggles = device.goals.map(g => g.enabled);
            const colors = device.goals.map(g => g.color);
            const values = device.goals.map(g => {
                return {
                    total: g.total,
                    current: g.current,
                    promise: g.promise
                };
            });

            return res.end(JSON.stringify({
                toggleString: jsonToString.toggles(toggles),
                colorString: jsonToString.colors(colors),
                valueString: jsonToString.values(values),
                piggySleepString: jsonToString.piggySleep(device.piggySleep)
            }));
        }
    } catch (err) {
        console.error(err);
        res.statusCode = 500;
        return res.end('Unexpected Error');
    }
};
