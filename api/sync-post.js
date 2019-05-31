const shared = require('./shared');

module.exports = async (req, res) => {
    try {
        shared.cors.setStandardHeaders(res);

        if (req.method === 'OPTIONS') {
            res.statusCode = 204;
            res.setHeader('Content-Length', '0');
            return res.end();
        } else if (req.method === 'PUT') {
            let payload = {
                temp: process.env.PIGGY_API_KEY
            };
//test
            return res.end(JSON.stringify(payload));
        }
    } catch (err) {
        console.error(err);
        res.statusCode = 500;
        return res.end('Unexpected Error');
    }
};
