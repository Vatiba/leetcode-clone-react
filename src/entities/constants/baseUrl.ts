const baseUrl = import.meta.env.MODE === 'development' ?
	"http://217.174.233.210/api"
	:
	"/api";

export default baseUrl;