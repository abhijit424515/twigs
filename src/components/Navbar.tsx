import { AppIcon, GithubIcon, Hamburger, SearchIcon } from "../global/Icons";

interface Props {
	sidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ sidebarToggle }: Props) {
	return (
		<div className="w-full md:px-4 pl-2 pr-4 py-4 h-14 border-b-2 flex justify-between items-center gap-x-4">
			<div className="flex items-center gap-x-2">
				<button
					className="h-10 w-10 aspect-square flex md:hidden justify-center items-center bg-white border-none text-blue-700 hover:bg-slate-200 rounded-full duration-200"
					onClick={() => sidebarToggle((x) => !x)}
				>
					<Hamburger />
				</button>
				<div className="text-xl md:flex hidden gap-x-2 items-center">
					<AppIcon />
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
