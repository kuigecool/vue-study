// 导入处理路径的模块
var path=require('path')
module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      }
  };