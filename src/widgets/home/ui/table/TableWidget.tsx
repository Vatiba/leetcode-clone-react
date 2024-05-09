import Img4 from '../../../../shared/assets/trash/azat.png';
import Img2 from '../../../../shared/assets/trash/dowran.png';
import Img3 from '../../../../shared/assets/trash/eziz.png';
import Img1 from '../../../../shared/assets/trash/jasur.png';


const TableWidget = () => {
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
					<tr>
						<td>
							<div className="flex items-center gap-3">
								<div className="avatar">
									<div className="mask mask-squircle w-12 h-12">
										<img src={Img1} alt="Avatar Tailwind CSS Component" />
									</div>
								</div>
								<div>
									<div className="font-bold">Jasurbek Aşyrbaýew</div>
									<div className="text-sm opacity-50">Türmenistan, Aşgabat</div>
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
										<img src={Img2} alt="Avatar Tailwind CSS Component" />
									</div>
								</div>
								<div>
									<div className="font-bold">Döwran Myradow</div>
									<div className="text-sm opacity-50">Türmenistan, Aşgabat</div>
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
										<img src={Img3} alt="Avatar Tailwind CSS Component" />
									</div>
								</div>
								<div>
									<div className="font-bold">Eziz Kakyşow</div>
									<div className="text-sm opacity-50">Türmenistan, Aşgabat</div>
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
										<img src={Img4} alt="Avatar Tailwind CSS Component" />
									</div>
								</div>
								<div>
									<div className="font-bold">Azat Jumanazarow</div>
									<div className="text-sm opacity-50">Türmenistan, Aşgabat</div>
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