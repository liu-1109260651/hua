// module.exports={
//   chainWebpack: config => { //移除Proload和Prefetch来实现懒加载 
    
//     config.plugins.delete('prefetch') },

//   devServer:{
//     proxy:{
//       '/api':{//为所有服务器端接口起一个别名前缀，伪类和vue脚手架中的其他页面的路由地址区分
//         target:'http://localhost:8081',//写真实的服务器端接口地址统一前缀
//         changeOrigin:true,//跨域
//         ws:true,
//         pathRewrite:{'^/api':""}//因为真实的服务器中是不包含/api的所有应将/api替换为空字符串
//       }
//     }
//   }
// }