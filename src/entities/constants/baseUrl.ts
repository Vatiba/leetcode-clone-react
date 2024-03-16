const baseUrl = import.meta.env.MODE === 'development' ?
	"http://192.168.12.95:8000/api"
	:
	"http://192.168.12.95:8000/api";

export default baseUrl;