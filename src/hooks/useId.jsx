import { useEffect, useMemo } from "react";

import { TAB_ID_KEY } from "../utils/constants";

const useId = () => {
	let id = useMemo(() => {
		return Math.floor(Math.random() * 1000000000);
	}, []);

	useEffect(() => {
		if (typeof Storage !== "undefined") {
			sessionStorage.setItem(TAB_ID_KEY, id);
		}
	}, [id]);

	return id;
};

export default useId;
