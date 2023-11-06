import { JSONRPCResponse } from "./lib/flow";

export const sort = (items: JSONRPCResponse<"search">[]) => {
	const docs = items.sort((a, b) => {
		const titleA = a.title.toUpperCase();
		const titleB = b.title.toUpperCase();

		if (titleA < titleB) {
			return -1;
		}

		if (titleA > titleB) {
			return 1;
		}

		return 0;
	});

	return docs;
};
