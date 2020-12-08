const BASE_URL = 'http://localhost:8088'
export const myRquest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method: options.method || 'GET' || 'POST' || 'PUT' || 'DELETE',
			data: options.data || {},
			success: (res)=>{
				// console.log(res)
				// if(res.data.status !== 0) {
				// 	return uni.showToast({
				// 		title: '获取数据失败'
				// 	})
				// }
				resolve(res)
			},
			fail: (err)=>{
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	})
}