fis.config.set('namespace', 'ns');

var postprocessor = require('../../../');

fis.config.set('modules.postprocessor.js', postprocessor);


fis.config.set('settings.postprocessor', [{
    // 用于定位模块文件用的.
    baseUrl: '.',
    wrapAll: true
}]);