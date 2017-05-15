import { apiUrl } from '~/config';
import Request from '~/core/Request';

export function register (data) {
	Request.post(`${apiUrl}/cook/user/register`, data);
}
