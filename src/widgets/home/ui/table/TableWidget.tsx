const TableWidget = () => {
	return (
		<div className="overflow-x-auto w-full">
			<table className="table w-full">
				{/* head */}
				<thead>
					<tr>
						<th>Name</th>
						<th>Score</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{/* row 1 */}
					<tr>
						<td>
							<div className="flex items-center gap-3">
								<div className="avatar">
									<div className="mask mask-squircle w-12 h-12">
										<img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
									</div>
								</div>
								<div>
									<div className="font-bold">Hart Hagerty</div>
									<div className="text-sm opacity-50">United States</div>
								</div>
							</div>
						</td>
						<td>🔥 6776453</td>
					</tr>
					{/* row 2 */}
					<tr>
						<td>
							<div className="flex items-center gap-3">
								<div className="avatar">
									<div className="mask mask-squircle w-12 h-12">
										<img src="https://daisyui.com/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
									</div>
								</div>
								<div>
									<div className="font-bold">Brice Swyre</div>
									<div className="text-sm opacity-50">China</div>
								</div>
							</div>
						</td>
						<td>🔥 762323</td>
					</tr>
					{/* row 3 */}
					<tr>
						<td>
							<div className="flex items-center gap-3">
								<div className="avatar">
									<div className="mask mask-squircle w-12 h-12">
										<img src="https://daisyui.com/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
									</div>
								</div>
								<div>
									<div className="font-bold">Marjy Ferencz</div>
									<div className="text-sm opacity-50">Russia</div>
								</div>
							</div>
						</td>
						<td>🔥 12323</td>
					</tr>
					{/* row 4 */}
					<tr>
						<td>
							<div className="flex items-center gap-3">
								<div className="avatar">
									<div className="mask mask-squircle w-12 h-12">
										<img src="https://daisyui.com/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
									</div>
								</div>
								<div>
									<div className="font-bold">Yancy Tear</div>
									<div className="text-sm opacity-50">Brazil</div>
								</div>
							</div>
						</td>
						<td>🔥 2423</td>
					</tr>
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