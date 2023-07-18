import { useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { sidebarItems } from "./global/Data";
import Main from "./pages/Main";
import { Toaster } from "react-hot-toast";

const LazyComponent = (componentName: string) => {
	const LazyLoadedComponent = lazy(
		() => import(/* @vite-ignore */ `./twigs/${componentName}/index.tsx`)
	);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<LazyLoadedComponent />
		</Suspense>
	);
};

export default function App() {
	const largeScreen = window.matchMedia("(min-width: 768px)").matches;
	const [drawer, setDrawer] = useState(largeScreen);

	return (
		<BrowserRouter basename="/">
			<Toaster />
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
						<Routes>
							<Route path="/" element={<Main />} />
							{sidebarItems.map((x) => (
								<Route
									key={x}
									path={x.replace(/ /g, "")}
									element={LazyComponent(x.replace(/ /g, ""))}
								/>
							))}
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}
