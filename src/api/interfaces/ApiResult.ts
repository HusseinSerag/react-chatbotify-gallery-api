// standardized return format for api result
interface ApiResult {
	success: boolean;
	message: string;
	errors?: string[];
	data: object | unknown[] | null;
}

export {
	ApiResult
};
