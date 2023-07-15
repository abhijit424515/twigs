import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import SampleMD from "./assets/sample.mdx?raw";

export default function MarkdownEditor() {
	const [text, setText] = useState(SampleMD);
	const topRef = useRef<HTMLTextAreaElement>(null);
	const bottomRef = useRef<HTMLDivElement>(null);

	const handleScroll = (
		event: React.UIEvent<HTMLDivElement | HTMLTextAreaElement>
	) => {
		const { scrollTop } = event.currentTarget;
		if (event.currentTarget === topRef.current && bottomRef.current) {
			bottomRef.current.scrollTop = scrollTop;
		} else if (event.currentTarget === bottomRef.current && topRef.current) {
			topRef.current.scrollTop = scrollTop;
		}
	};

	return (
		<div
			className="flex md:flex-row flex-col w-full h-full p-2 md:gap-x-2 gap-y-2"
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
				id="markdown"
				ref={bottomRef}
				onScroll={handleScroll}
			>
				<ReactMarkdown
					children={text}
					// remarkPlugins={[/* Add any required remark plugins here */]}
					// rehypePlugins={[/* Add any required rehype plugins here */]}
					// transformImageUri={(uri) => uri} // Optional: Customize image URIs
				/>
			</div>
		</div>
	);
}
