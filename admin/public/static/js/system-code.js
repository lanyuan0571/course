SYSTEM_MANAGE="01";
USER_MANAGE="0101";
RESOURCE_MANAGE="0102";
ROLE_MANAGE="0103";
SYSTEM_SAVE="010101";
SYSTEM_DELETE="010102";
RESET_PASSWORD="010103";
SystemCode = {
    get: function (key) {
        let v = SystemCode.getItem(key);
        if (v && typeof(v) !== "undefined" && v !== "undefined") {
            return JSON.parse(v);
        }
    },
    set: function (key, data) {
        SystemCode.setItem(key, JSON.stringify(data));
    },
    remove: function (key) {
        SystemCode.removeItem(key);
    },
    clearAll: function () {
        SystemCode.clear();
    }
};