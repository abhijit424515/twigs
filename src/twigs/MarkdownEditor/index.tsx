import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SampleMD from "./assets/sample.mdx?raw";
import hljs from "highlight.js";
import toast from "react-hot-toast";

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

	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text);
		toast.success("Copied to Clipboard");
	}

	useEffect(() => {});

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
					remarkPlugins={[remarkGfm]} // for text, links, table, checklists
					// rehypePlugins={[/* Add any required rehype plugins here */]}
					// transformImageUri={(uri) => uri} // Optional: Customize image URIs
					components={{
						pre({ children }) {
							const main = (<pre>{children}</pre>).props.children[0].props;
							const language: string = (main.className || "").split("-")[1];

							const html = main.children[0]
								.split("\n")
								.map(
									(x: string) =>
										hljs.highlight(x, {
											language,
										}).value
								)
								.reduce((x: string, y: string) => x + "<br />" + y);

							return (
								<div className="bg-black relative text-white rounded-lg my-4 border-2 border-black overflow-hidden">
									<div
										className="codeblock p-2"
										style={{ fontFamily: "monospace, sans-serif" }}
										dangerouslySetInnerHTML={{ __html: html }}
									/>
									<div className="w-full flex justify-end">
										<div className="font-semibold w-max bg-white text-black rounded-tl-lg text-xs py-1 px-2 z-10 translate-x-[2px] border-2 border-l-black border-t-black border-b-0 border-r-0">
											{language}
										</div>
										<div
											onClick={() => copyToClipboard(main.children[0])}
											className="w-max bg-white text-black rounded-tl-lg text-xs py-1 px-2 z-20 border-2 border-l-black border-t-black border-b-0 border-r-0 cursor-pointer"
										>
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Bw_copy_icon_320x320.svg"
												className="h-4 w-4"
											/>
										</div>
									</div>
								</div>
							);
						},
						code({ node, inline, className, children, ...props }) {
							return Boolean(inline) ? (
								<code
									className="bg-gray-200 p-1 rounded-lg break-keep"
									{...props}
								>
									{children}
								</code>
							) : (
								<></>
							);
						},
					}}
				>
					{text}
				</ReactMarkdown>
			</div>
		</div>
	);
}
