const baseUrl = import.meta.env.MODE === 'development' ?
	"http://172.16.0.90/api"
	// "http://192.168.137.139:8000/api"
	:
	"http://172.16.0.90/api";

export default baseUrl;