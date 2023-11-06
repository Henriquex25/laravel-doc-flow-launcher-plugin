import open from "open";
import { Flow, JSONRPCResponse } from "./lib/flow";

import { getDocs } from "./docs.js";

// The events are the custom events that you define in the flow.on() method.
const events = ["search"] as const;
type Events = (typeof events)[number];

const flow = new Flow<Events>("assets/laravel.png");

flow.on("query", (params) => {
    const query = params.join(" ");

    if (!query) {
        return flow.showResult({
					title: "Waiting for query...",
					subtitle: "open Laravel docs",
					method: "search",
					parameters: ["https://laravel.com/docs/10.x"],
					iconPath: "assets/laravel.png",
				});
    }

	const results: JSONRPCResponse<"search">[] = [];
    const docs = getDocs(query);

    docs.forEach(doc => {
        results.push({
            title: doc.title,
            subtitle: doc.url,
            method: "search",
            parameters: [doc.url],
            iconPath: "assets/laravel.png",
        });
    });

    return flow.showResult(...results);

});

flow.on("search", (params) => {
	const url = params[0].toString();

	open(url);
});

flow.run();
