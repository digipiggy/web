
const coalesce = (total, value) => total > 0 ? (value / total).toFixed(2) : '0.00';

module.exports = {

    toggles: (jsonObj) => jsonObj.map(t => t ? 1 : 0).join('|'),
    colors: (jsonObj) => jsonObj.join('|'),
    values: (jsonObj) => jsonObj.map(v => `${coalesce(v.total, v.current)},${coalesce(v.total, v.promise)}`).join('|'),
    piggySleep: (jsonObj) => {
        let piggySleepString = '0|00:00|00:00|0|0';
        if (jsonObj) {
            piggySleepString = `${device.piggySleep.enabled ? 1 : 0}|${device.piggySleep.wakeupTime || '00:00'}|${device.piggySleep.sleepTime || '00:00'}|${device.piggySleep.timezone || 0}|${device.piggySleep.observeDaylightSavings ? 1 : 0}`
        }

        return piggySleepString;
    }
}


;
