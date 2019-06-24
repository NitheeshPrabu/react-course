import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 9894373ae9362e1d4d6e150517f496ece43902aecf9a343528326e9e91c25cd8'
	}
});