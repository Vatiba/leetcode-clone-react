
type TableWidgetProps = {
	data: {
		avatar: string
		name: string
		location: string
		score: string | number
	}[]
}

const TableWidget = (props: TableWidgetProps) => {
	const {
		data
	} = props;

	return (
		<div className="overflow-x-auto w-full">
			<table className="table w-full">
				{/* head */}
				<thead>
					<tr>
						<th>Name</th>
						<th>Score</th>
					</tr>
				</thead>
				<tbody>
					{/* row 1 */}
					{
						data.map(item => {
							return (
								<tr>
									<td>
										<div className="flex items-center gap-3">
											<div className="avatar">
												<div className="mask mask-squircle w-12 h-12">
													<img src={item.avatar} alt="Avatar Tailwind CSS Component" />
												</div>
											</div>
											<div>
												<div className="font-bold">{item.name}</div>
												<div className="text-sm opacity-50">{item.location}</div>
											</div>
										</div>
									</td>
									<td>🔥 {item.score}</td>
								</tr>
							)
						})
					}
				</tbody>
				{/* foot */}
				{/* <tfoot>
					<tr>
						<th>Name</th>
						<th>Score</th>
						<th></th>
					</tr>
				</tfoot> */}

			</table>
		</div>
	)
}

export default TableWidget;