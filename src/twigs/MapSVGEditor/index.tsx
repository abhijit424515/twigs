import { useLayoutEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

const ZOOM_LEVEL = 14;
const PRECISION = 15;
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
	iconUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
	shadowUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

export default function MapSVGEditor() {
	const ref = useRef<L.FeatureGroup<any>>(null);
	const [link, setLink] = useState("");

	const [unmountMap, setunmountMap] = useState(false);
	useLayoutEffect(() => {
		setunmountMap(false);
		return () => {
			setunmountMap(true);
		};
	}, []);

	function handleMapChange() {
		const geo = ref.current?.toGeoJSON(PRECISION);
		if (geo?.type === "FeatureCollection") {
			setLink(
				"data:text/json;charset=utf-8," +
					encodeURIComponent(JSON.stringify(geo))
			);
		}
	}

	if (!unmountMap)
		return (
			<div className="h-full w-full py-4 px-2">
				<div
					id="map"
					className="h-full w-full rounded-xl overflow-hidden relative"
				>
					<a
						className="absolute bottom-0 right-0 z-20 bg-white hover:bg-blue-600 text-blue-600 hover:text-white duration-200 px-4 py-2 rounded-tl-xl rounded-br-xl cursor-pointer border-2 border-blue-600"
						href={link}
						target="_blank"
						download="data.geojson"
					>
						Download
					</a>
					<MapContainer
						className="h-full w-full outline-none z-0"
						center={[51.505, -0.09]}
						zoom={ZOOM_LEVEL}
						scrollWheelZoom={false}
					>
						<FeatureGroup ref={ref}>
							<EditControl
								position="topright"
								onEdited={handleMapChange}
								onCreated={handleMapChange}
								onDeleted={handleMapChange}
								draw={{}}
							/>
						</FeatureGroup>
						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
					</MapContainer>
				</div>
			</div>
		);
	else return "Loading map...";
}
