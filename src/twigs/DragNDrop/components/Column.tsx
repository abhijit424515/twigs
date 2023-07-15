import { Droppable } from "react-beautiful-dnd";

interface ColumnProps {
	column: {
		id: string;
		title: string;
		taskIds: string[];
	};
	tasks: {
		id: string;
		content: string;
	}[];
}

export default function Column({ column, tasks }: ColumnProps) {
	return (
		<div>
			<div>{column.title}</div>
			<Droppable droppableId={column.id}>
				{(provided) => (
					<TaskList innerRef={provided.innerRef} {...provided.droppableProps}>
						{tasks.map((task) => (
							<Task key={task.id} task={task} />
						))}
						{provided.placeholder}
					</TaskList>
				)}
			</Droppable>
		</div>
	);
}
