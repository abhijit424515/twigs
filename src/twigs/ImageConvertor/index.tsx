import { useRef, useState } from "react";
import Select from "./components/Select";

const options: string[] = ["WEBP", "PNG", "JPEG"];

export default function ImageConvertor() {
	const cRef = useRef(null);
	const dropRef = useRef(null);
	const [file, setFile] = useState<string | {}>("");
	const [link, setLink] = useState("");
	const [animate, setAnimate] = useState(false);
	const [format, setFormat] = useState("WEBP");
	const [compression, setCompression] = useState("90");

	async function onSubmit() {
		const canvas = cRef.current as unknown as HTMLCanvasElement;
		const ctx = canvas.getContext("2d");
		const img = new Image();

		img.onload = () => {
			if (ctx) {
				canvas.width = img.width;
				canvas.height = img.height;
				ctx.drawImage(img, 0, 0);

				canvas.toBlob(
					(blob) => setLink(window.URL.createObjectURL(blob as Blob)),
					`image/${format.toLowerCase()}`,
					parseInt(compression) / 100
				);
			}
		};

		const reader = new FileReader();
		reader.onload = (event) => {
			img.src = (event.target as FileReader).result as string;
		};
		reader.readAsDataURL(file as unknown as Blob);
	}

	function newFileName() {
		if (file) {
			const oldName = (file as unknown as File).name;
			const l = oldName.split(".");
			const oldXLen = l[l.length - 1].length;
			return (
				oldName.substring(0, oldName.length - oldXLen - 1) +
				"." +
				format.toLowerCase()
			);
		}
		return "";
	}

	function handleDrop(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault();
		e.stopPropagation();
		setAnimate(false);

		const { files } = e.dataTransfer;
		if (files && files.length) {
			setFile(files[0]);
		}
	}

	return (
		<div className="h-full w-full flex justify-center items-center">
			<div className="flex flex-col gap-y-4 max-w-full p-4">
				<div
					className="border-2 border-gray-300 rounded-lg max-w-full w-[20rem] h-[16rem] relative"
					ref={dropRef}
					onDragOver={(e) => {
						setAnimate(true);
						e.preventDefault();
						e.stopPropagation();
					}}
					onDrop={handleDrop}
					onDragLeave={() => setAnimate(false)}
				>
					<div
						className="w-full h-full bg-blue-500 text-white rounded-lg flex justify-center items-center duration-200"
						style={{
							color: file || animate ? "white" : "#9ca3af",
							backgroundColor: file ? "#ef4444" : animate ? "#3b82f6" : "white",
						}}
					>
						{file ? "File Selected" : "Drop Here"}
					</div>
					<input
						type="file"
						className="absolute w-full h-full opacity-0 top-0 cursor-pointer"
						onChange={(e) => {
							console.log((e.target as HTMLInputElement).files);
							setFile((e.target as HTMLInputElement).files![0]);
						}}
					/>
				</div>
				{!link && (
					<>
						<div className="flex flex-col">
							<label htmlFor="rangeSlider" className="text-sm mb-2">
								Select output format
							</label>
							<Select
								state={{ option: format, setOption: setFormat, options }}
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="rangeSlider" className="text-sm mb-1">
								Quality -{" "}
								<span className="font-semibold text-sm text-blue-600">
									{compression} %
								</span>
							</label>
							<input
								id="rangeSlider"
								type="range"
								className="w-full"
								min={0}
								max={100}
								value={compression}
								onChange={(e) => setCompression(e.target.value)}
							/>
						</div>

						<a
							className="py-2 px-2 text-green-500 border-2 border-green-500 duration-200 hover:bg-green-500 hover:text-white rounded-lg text-center cursor-pointer"
							onClick={onSubmit}
						>
							Convert
						</a>
					</>
				)}
				{link && (
					<>
						<a
							className="py-2 px-2 text-blue-500 border-2 border-blue-500 duration-200 hover:bg-blue-500 hover:text-white rounded-lg text-center cursor-pointer"
							href={link}
							target="_blank"
							download={newFileName()}
						>
							Download
						</a>
						<button
							onClick={() => {
								setFile("");
								setLink("");
							}}
							className="py-2 px-2 text-green-500 border-2 border-green-500 duration-200 hover:bg-green-500 hover:text-white rounded-lg text-center cursor-pointer"
						>
							Convert again
						</button>
					</>
				)}
				<p className="text-xs text-gray-400 break-words max-w-[20rem]">
					Note: For PNG output format, quality modification is currently not
					working.
				</p>
				<canvas ref={cRef} className="hidden" />
			</div>
		</div>
	);
}
