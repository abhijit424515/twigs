import { useState, useRef, useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { parse, HtmlGenerator } from "latex.js";
import SampleTex from "./assets/sample.tex?raw";

export default function LaTeXEditor() {
	const [text, setText] = useState(SampleTex);
	const topRef = useRef<HTMLTextAreaElement>(null);
	const bottomRef = useRef<HTMLDivElement>(null);

	const handleScroll = (
		event: React.UIEvent<HTMLDivElement | HTMLTextAreaElement>
	) => {
		const { scrollTop } = event.currentTarget;
		if (
			bottomRef &&
			event.currentTarget === topRef.current &&
			bottomRef.current
		) {
			bottomRef.current.scrollTop = scrollTop;
		} else if (
			topRef &&
			event.currentTarget === bottomRef.current &&
			topRef.current
		) {
			topRef.current.scrollTop = scrollTop;
		}
	};

	useEffect(() => {
		const generator = new HtmlGenerator({ hyphenate: false });
		const doc = parse(text, { generator: generator }).htmlDocument()
			.documentElement.outerHTML;
		if (bottomRef && doc) {
			(bottomRef.current as HTMLDivElement).innerHTML = doc;
		}
	}, [text]);

	return (
		<div
			className="flex md:flex-row flex-col w-full md:h-full h-[150vh] p-2 gap-x-2"
			id="mdpage"
		>
			<textarea
				ref={topRef}
				onScroll={handleScroll}
				spellCheck={false}
				value={text}
				onChange={(e) => setText(e.target.value)}
				className="w-full h-full outline-none border-2 border-slate-300 rounded-md p-2 overflow-y-scroll overflow-hidden"
				style={{ resize: "none" }}
			/>
			<div
				className="w-full h-full outline-none border-2 border-slate-300 rounded-md p-2 overflow-y-scroll overflow-hidden"
				id="latex"
				ref={bottomRef}
				onScroll={handleScroll}
			/>
		</div>
	);
}
