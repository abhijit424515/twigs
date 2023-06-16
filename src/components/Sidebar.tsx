import { sidebarItems } from "../global/Data";

interface Props {
	open: boolean;
	largeScreen: boolean;
}

const Button = ({ title }: { title: string }) => (
	<button className="w-full py-2 px-4 rounded-lg text-left hover:bg-gray-200 duration-200">
		{title}
	</button>
);

export default function Sidebar({ open, largeScreen }: Props) {
	return (
		<div
			className="md:w-64 w-72 h-[calc(100vh-3.5rem)] duration-200 z-10 absolute p-2 flex flex-col gap-y-1"
			style={{
				transform: open
					? "translate(0)"
					: largeScreen
					? "translate(-16rem)"
					: "translate(-18rem)",
			}}
		>
			{sidebarItems.map((x) => (
				<Button title={x} />
			))}
		</div>
	);
}
