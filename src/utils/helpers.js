export const isEmpty = (obj) => {
	if (obj && Object.entries(obj).length === 0) return true;
	return false;
};
