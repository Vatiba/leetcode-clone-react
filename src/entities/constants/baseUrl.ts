const baseUrl = import.meta.env.MODE === 'development' ?
	// "http://172.16.0.90/api"
	"http://172.16.0.90/api"
	:
	// "http://172.16.0.90/api";
	"http://217.174.233.210:1580/api";

export default baseUrl;