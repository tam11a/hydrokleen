import { Collapse } from "antd";
import React, { CSSProperties } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Faq: React.FC<{
	faqs: IFaq[];
}> = ({ faqs }) => {
	console.log(faqs);

	const getItems = (panelStyle: CSSProperties) => {
		return faqs.map((faq: IFaq, index: number) => {
			return {
				key: index,
				label: <b className="text-slate-700 text-lg">{faq.title}</b>,
				children: <span className="text-slate-700">{faq.description}</span>,
				style: panelStyle,
			};
		});
	};

	const panelStyle: React.CSSProperties = {
		marginBottom: 10,
		border: "none",
		background: "white",
		boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
		borderRadius: 4,
	};

	return (
		<div>
			<h2 className="text-4xl text-center text-slate-700 font-bold mt-9 mb-9">
				FAQ
			</h2>
			<Collapse
				bordered={false}
				defaultActiveKey={["0"]}
				expandIcon={({ isActive }) => (
					<div
						style={{
							transform: `rotate(${isActive ? 90 : 0}deg)`,
							transition: "all 0.2s ease-in-out",
							fontSize: "1rem",
						}}
						className="text-slate-700"
					>
						<RiArrowRightSLine />
					</div>
				)}
				className="max-w-5xl mx-auto"
				expandIconPosition="right"
				style={{ background: "transparent" }}
				items={getItems(panelStyle)}
			/>
		</div>
	);
};

export default Faq;
