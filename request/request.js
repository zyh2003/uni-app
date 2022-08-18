const baseUrl = 'http://demonuxtapi.dishait.cn/mobile'
const appId='bd9d01ecc75dbbaaefce'
const request = (url = '', date = {}, type = 'GET', header = {}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: baseUrl + url,
			data: date,
			header: {
				appId
			},
			dataType: 'json',
		}).then((response) => {
			setTimeout(function() {
				uni.hideLoading();
			}, 200);
			let [error, res] = response;
			resolve(res.data);
		}).catch(error => {
			let [err, res] = error;
			reject(err)
		})
	});
}
export default request
