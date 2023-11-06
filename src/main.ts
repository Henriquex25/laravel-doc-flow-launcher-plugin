import open from "open";
import { Flow } from "./lib/flow";
import { z } from "zod";

import { getDoc } from "./api.js";

// The events are the custom events that you define in the flow.on() method.
const events = ["search"] as const;
type Events = (typeof events)[number];

const flow = new Flow<Events>("assets/npm.png");

flow.on("query", (params) => {
	// const [query] = z.array(z.string()).parse(params);

	// const qp = new URLSearchParams({
	// 	q: query,
	// });

	// const url = `https://www.npmjs.com/search?${qp}`;

	// flow.showResult({
	// 	title: `Search NPM package: ${query}`,
	// 	subtitle: url,
	// 	method: "search",
	// 	parameters: [url, "hello"],
	// 	dontHideAfterAction: true,
	// });
    if (params.join(" ") === "") {
        return flow.showResult({
            title: "Waiting for query...",
            subtitle: "open Laravel docs",
            method: "search",
            parameters: ["https://laravel.com/docs/10.x"],
            iconPath: "assets/laravel.png",
        });
    }

    try {
        const docs :{url: string, selector: string}[] = getDoc(params.join(" "));

        const results: {
					title: string;
					subtitle: string;
					method: any;
					parameters: string[];
					iconPath: string;
				}[] = docs.map((doc) => {
					return {
						title: doc.selector,
						subtitle: doc.url,
						method: "search",
						parameters: [doc.url],
						iconPath: "assets/laravel.png",
					};
				});


        return flow.showResult(...results);

    } catch (err) {
        return flow.showResult({
            title: "Error",
            subtitle: "Not found",
        });
    }

});

flow.on("search", (params) => {
	const [url] = z.array(z.string().url()).parse(params);

	open(url);
});

flow.run();
