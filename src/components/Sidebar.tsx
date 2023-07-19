import { sidebarItems } from "../global/Data";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {
	open: boolean;
	largeScreen: boolean;
}

export default function Sidebar({ open, largeScreen }: Props) {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const Button = ({ title, active }: { title: string; active: Boolean }) => (
		<button
			className={`w-full py-2 px-4 rounded-lg text-left hover:bg-gray-200 bg-${
				active ? "gray-200" : "white"
			} duration-200`}
			onClick={() => navigate(title.replace(/ /g, ""))}
		>
			{title}
		</button>
	);

	return (
		<div
			className="md:w-64 w-72 h-[calc(100vh-3.5rem)] bg-white duration-200 z-10 absolute p-2 flex flex-col gap-y-1 border-r-2 border-slate-200"
			style={{
				transform: open
					? "translate(0)"
					: largeScreen
					? "translate(-16rem)"
					: "translate(-18rem)",
			}}
		>
			{sidebarItems.map((x) => (
				<Button
					key={x}
					title={x}
					active={pathname.substring(1) == x.replace(/ /g, "")}
				/>
			))}
		</div>
	);
}
