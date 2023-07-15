import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./components/Column";
import { initialData } from "./assets/sample";

export default function DragNDrop() {
	const [state, setState] = useState(initialData);

	function onDragEnd() {
		// TODO
	}

	return (
		<div></div>
		// <DragDropContext onDragEnd={onDragEnd}>
		// 	<div>
		// 		{state.columnOrder.map((columnId) => {
		// 			const column = state.columns[columnId as keyof typeof state.columns];
		// 			const tasks = column.taskIds.map(
		// 				(taskId) => state.tasks[taskId as keyof typeof state.tasks]
		// 			);

		// 			return <Column key={column.id} column={column} tasks={tasks} />;
		// 		})}
		// 	</div>
		// </DragDropContext>
	);
}
