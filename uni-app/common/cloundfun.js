// class 面向对象
// promise 封装
const db =wx.cloud.database() //指定要操作数据库

// 请求轮播 ，tab数据
var home =function(){
	// console.log("123")
	return new Promise((resolve,reject)=>{
		let a =2+3
		resolve(a)
		reject('出现错误')
	})
}
export {home}