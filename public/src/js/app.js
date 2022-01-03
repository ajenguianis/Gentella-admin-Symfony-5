/**
 Core script to handle the entire theme and core functions
 **/
var App = function () {
    var configData =  {};
    return {
        /**
         * Humanize a string
         * etc product_show =>  productShow
         * @param str
         * @returns {string}
         */
        humanize: function (str) {
            var frags = str.split('_');
            for (i = 0; i < frags.length; i++) {
                frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
            }
            return frags.join('');
        },
        /**
         * Get current page config
         * @param configName
         * @returns {*}
         */
        getPageConfig: function (configName = null) {
            if (null === configName) {
                return configData[this.getCurrentPage()]
            }
            return configData[this.getCurrentPage()][configName];
        },
        /**
         * Set current page config
         * @param configName
         * @param configValue
         */
        setPageConfig:  function (configName, configValue) {
            configData[this.getCurrentPage()][configName] = configValue;
        },
        // showSuccess: function (message, type = 'success', position = 'center', width = 600, timeout = 2000) {
        //     return Swal.fire({
        //         position: 'center',
        //         showCloseButton: true,
        //         type: type,
        //         width: width,
        //         title: message
        //     }, timeout);
        // }

    };

}();