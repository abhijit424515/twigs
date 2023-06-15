const Hamburger = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-5 w-5 bg-transparent"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M4 6h16M4 12h16M4 18h7"
		/>
	</svg>
);

const GithubIcon = () => (
	<svg
		onClick={() => (window as Window).open("http://www.google.com", "_blank")}
		viewBox="0 0 16 16"
		className="w-8 h-8 hover:text-blue-600 cursor-pointer duration-200"
		fill="currentColor"
		aria-hidden="true"
	>
		<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
	</svg>
);

const SearchIcon = () => (
	<svg
		className="bg-transparent"
		stroke="currentColor"
		fill="currentColor"
		strokeWidth="0"
		version="1"
		viewBox="0 0 48 48"
		enableBackground="new 0 0 48 48"
		height={20}
		width={20}
		xmlns="http://www.w3.org/2000/svg"
	>
		<g fill="#616161">
			<rect
				x="34.6"
				y="28.1"
				transform="matrix(.707 -.707 .707 .707 -15.154 36.586)"
				width="4"
				height="17"
			></rect>
			<circle cx="20" cy="20" r="16"></circle>
		</g>
		<rect
			x="36.2"
			y="32.1"
			transform="matrix(.707 -.707 .707 .707 -15.839 38.239)"
			fill="#37474F"
			width="4"
			height="12.3"
		></rect>
		<circle fill="#64B5F6" cx="20" cy="20" r="13"></circle>
		<path
			fill="#BBDEFB"
			d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1 C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"
		></path>
	</svg>
);

function AppIcon({ dark }: { dark: boolean }) {
	return dark ? (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 448 512"
			height={20}
			width={20}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M192 64v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32zM82.7 207c-15.3 8.8-20.5 28.4-11.7 43.7l32 55.4c8.8 15.3 28.4 20.5 43.7 11.7l55.4-32c15.3-8.8 20.5-28.4 11.7-43.7l-32-55.4c-8.8-15.3-28.4-20.5-43.7-11.7L82.7 207zM288 192c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H288zm64 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H352zM160 384v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zM32 352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H32z"></path>
		</svg>
	) : (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 448 512"
			height={20}
			width={20}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M192 64v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32zM82.7 207c-15.3 8.8-20.5 28.4-11.7 43.7l32 55.4c8.8 15.3 28.4 20.5 43.7 11.7l55.4-32c15.3-8.8 20.5-28.4 11.7-43.7l-32-55.4c-8.8-15.3-28.4-20.5-43.7-11.7L82.7 207zM288 192c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H288zm64 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H352zM160 384v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zM32 352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H32z"></path>
		</svg>
	);
}

export default function Header() {
	return (
		<div className="w-full md:px-4 pl-2 pr-4 py-4 h-14 border-b-2 flex justify-between items-center gap-x-4">
			<div className="flex items-center gap-x-2">
				<button className="h-10 w-10 aspect-square flex md:hidden justify-center items-center bg-white border-none text-blue-700 hover:bg-slate-200 rounded-full duration-200">
					<Hamburger />
				</button>
				<div className="text-xl md:flex hidden gap-x-2 items-center">
					<AppIcon dark={true} />
					<div className="gradient-text font-semibold">twigs</div>
				</div>
			</div>
			<div className="w-full flex bg-slate-200 gap-x-2 py-2 px-3 h-10 rounded-lg border-2 outline-none border-slate-200 focus:border-slate-200 duration-100 focus-within:shadow-md max-w-xl">
				<SearchIcon />
				<input
					type="text"
					placeholder="Search"
					className="w-full border-none outline-none bg-slate-200 text-black"
				/>
				<div className="md:flex hidden gap-x-1">
					<kbd className="rounded-md bg-white p-1 flex items-center shadow-md">
						ctrl
					</kbd>
					<kbd className="rounded-md bg-white p-1 flex items-center shadow-md">
						K
					</kbd>
				</div>
			</div>
			<div className="aspect-square h-8 w-8">
				<GithubIcon />
			</div>
		</div>
	);
}
