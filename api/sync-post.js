const shared = require('./shared');
const parseBody = require('co-body');

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
            return res.end(JSON.stringify(device));
        }
    } catch (err) {
        console.error(err);
        res.statusCode = 500;
        return res.end('Unexpected Error');
    }
};
