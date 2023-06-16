import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
	const largeScreen = window.matchMedia("(min-width: 768px)").matches;
	const [drawer, setDrawer] = useState(largeScreen);

	return (
		<div className="min-h-screen">
			<Navbar sidebarToggle={setDrawer} />
			<div className="flex">
				<Sidebar open={drawer} largeScreen={largeScreen} />
				<div
					className="h-[calc(100vh-3.5rem)] ml-auto px-2"
					style={{
						filter: drawer && !largeScreen ? "blur(2px)" : "blur(0)",
						width: largeScreen ? "calc(100vw - 16rem)" : "100vw",
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
					exercitationem dolor enim iste, at voluptatibus incidunt placeat
					libero hic natus dolorem commodi facere, delectus culpa magni quia
					consectetur. Ipsum quaerat corrupti provident. Doloremque quaerat
					illum veniam molestias quia totam est culpa quidem repellat minima.
					Ratione dicta corrupti dolore repellat qui repellendus sunt rem,
					adipisci earum quas provident laudantium dolorem cum. Maxime quia
					labore officiis provident rerum? Provident ea ab tenetur adipisci
					laudantium! Minus vel laboriosam fugit culpa inventore ullam
					quibusdam, voluptatem non cupiditate cumque numquam accusantium odio
					nisi. Unde consequuntur maiores labore voluptatum mollitia magnam.
					Maiores numquam fuga optio beatae.
				</div>
			</div>
		</div>
	);
}
