import { Listbox } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "../../../global/Icons";

interface SelectProps {
	state: {
		option: String;
		setOption: React.Dispatch<React.SetStateAction<string>>;
		options: String[];
	};
}

export default function Select({ state }: SelectProps) {
	return (
		<Listbox
			value={state.option}
			onChange={state.setOption as (value: String) => void}
		>
			<div className="relative">
				<Listbox.Button className="flex py-2 pl-4 pr-2 justify-between items-center w-full rounded-lg border-2 border-gray-300 hover:border-blue-600 duration-200">
					<span>{state.option}</span>
					<ChevronDownIcon />
				</Listbox.Button>
				<Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-lg bg-white border-2 border-gray-300">
					{state.options.map((x: String, i: Number) => (
						<Listbox.Option
							key={i as React.Key}
							className="hover:bg-blue-600 hover:text-white duration-200 py-3"
							value={x}
						>
							{({ selected }) => (
								<div
									className="flex justify-between items-center px-4"
									style={{ fontWeight: selected ? "600" : "400" }}
								>
									{x}
									{selected ? <CheckIcon /> : null}
								</div>
							)}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</div>
		</Listbox>
	);
}
