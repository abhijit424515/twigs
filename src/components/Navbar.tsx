import { Fragment, useState } from "react";
import {
	AppIcon,
	GithubIcon,
	Hamburger,
	SearchIcon,
	DonateIcon,
} from "../global/Icons";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";

const Input = tw.input`py-2 px-2 outline-none rounded-lg bg-gray-200 text-black text-sm`;
const Textarea = tw.textarea`py-2 px-2 outline-none rounded-lg bg-gray-200 text-black text-sm`;
const Label = tw.label`font-semibold text-normal`;

interface Props {
	sidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ sidebarToggle }: Props) {
	const navigate = useNavigate();
	const [donationPopup, setDonationPopup] = useState(0);
	const [form, setForm] = useState({
		amount: "50",
		note: "Thank you so much for your awesome work",
	});

	return (
		<>
			<div
				className="absolute px-4 top-0 w-full h-screen bg-[#00000066] z-[100] backdrop-blur-sm duration-200 justify-center items-center"
				style={{ display: donationPopup > 0 ? "flex" : "none" }}
			>
				<div className="flex w-full max-w-xs flex-col gap-y-2 bg-white py-6 px-6 rounded-2xl">
					<div className="flex justify-between items-center mb-4">
						<p className="text-2xl font-bold">Buy Me a Coffee</p>
						<button onClick={() => setDonationPopup(0)}>
							<svg
								stroke="currentColor"
								fill="red"
								strokeWidth="0"
								viewBox="0 0 512 512"
								height="1.5rem"
								width="1.5rem"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
							</svg>
						</button>
					</div>
					{donationPopup == 1 && (
						<Fragment>
							<Label htmlFor="amount">Amount (in ₹)</Label>
							<Input
								id="amount"
								value={form.amount}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									/^[0-9]*$/.test(e.target.value)
										? setForm({ ...form, amount: e.target.value })
										: null
								}
							/>
							<Label htmlFor="note">Note (optional)</Label>
							<Textarea
								id="note"
								value={form.note}
								onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
									setForm({ ...form, note: e.target.value })
								}
							/>
							<button
								onClick={() => {
									setDonationPopup(2);
								}}
								style={{ display: form.amount ? "" : "none" }}
								className="w-full flex gap-x-2 text-normal justify-center items-center border-2 duration-200 border-black hover:bg-black hover:text-white mt-4 py-3 px-2 rounded-lg"
							>
								Pay ₹{form.amount}
								<img
									className="h-4 pt-[2px]"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/695px-UPI-Logo-vector.svg.png?20200901100648"
								/>
							</button>
						</Fragment>
					)}
					{donationPopup == 2 && (
						<div className="flex flex-col gap-y-2 justify-center items-center">
							<QRCode
								className="w-2/3 h-2/3 mb-6"
								value={
									`upi://pay?pa=abhijit.amrendra.kumar@oksbi&pn=Abhijit%20A%20Kumar&cu=INR&am=${form.amount}` +
									(form.note.length > 0 ? `&tn=${form.note}` : "")
								}
							/>
							<p className="w-full text-sm font-semibold">
								Use any UPI app to scan above QR code and complete the payment.
							</p>
							<div className="w-full flex justify-center items-center gap-x-4 mt-2">
								<img
									className="h-4"
									src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg"
								/>
								<img
									className="h-6"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/768px-Google_Pay_Logo.svg.png?20221017164555"
								/>
								<img
									className="h-4"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/695px-UPI-Logo-vector.svg.png?20200901100648"
								/>
								<img
									className="h-6"
									src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg"
								/>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="w-full md:px-4 pl-2 pr-4 py-4 h-14 border-b-2 flex justify-between items-center gap-x-4">
				<div className="flex items-center gap-x-2">
					<button
						className="h-10 w-10 aspect-square flex md:hidden justify-center items-center bg-white border-none text-blue-700 hover:bg-slate-200 rounded-full duration-200"
						onClick={() => sidebarToggle((x) => !x)}
					>
						<Hamburger />
					</button>
					<div
						className="text-xl md:flex hidden gap-x-2 items-center cursor-pointer hover:text-blue-600 duration-200"
						onClick={() => navigate("/")}
					>
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
				<div className="flex gap-x-3 items-center">
					<button
						className="flex gap-x-2 items-center font-semibold px-2 py-1 rounded-lg duration-200 hover:text-blue-600"
						onClick={() => setDonationPopup(1)}
					>
						<DonateIcon />
					</button>
					<div className="aspect-square h-8 w-8">
						<GithubIcon />
					</div>
				</div>
			</div>
		</>
	);
}
