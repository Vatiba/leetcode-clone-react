import { Link } from 'react-router-dom';
import AvatarPlaceholder from 'shared/assets/img/default_avatar.jpg';

type ContestantTableProps = {
   data: {
      id: number | string
      avatar?: string | null
      name: string
      userId: string | number
      // location: string
      score: string | number
   }[]
}

const ContestantTable = (props: ContestantTableProps) => {
   const {
      data
   } = props;

   return (
      <div className="overflow-x-auto w-full">
         <table className="table w-full">
            {/* head */}
            <thead>
               <tr>
                  <th style={{ width: '100px' }}>Ranking</th>
                  <th>Name</th>
                  <th>Score</th>
               </tr>
            </thead>
            <tbody>
               {
                  data.map((item, i) => {
                     return (
                        <tr key={item.id}>
                           <td style={{ width: '100px' }}>{i + 1}</td>
                           <td>
                              <div className="flex items-center gap-3">
                                 <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                       {
                                          item.avatar ?
                                             <img src={item.avatar} alt="Avatar Tailwind CSS Component" />
                                             :
                                             <img src={AvatarPlaceholder} alt="Avatar Tailwind CSS Component" />
                                       }
                                    </div>
                                 </div>
                                 <div>
                                    <Link className="font-bold" to={`/profile/${item.userId}`}>{item.name}</Link>
                                    {/* <div className="text-sm opacity-50">{item.location}</div> */}
                                 </div>
                              </div>
                           </td>
                           <td>🔥 {item.score}</td>
                        </tr>
                     )
                  })
               }
            </tbody>
         </table>
      </div>
   )
}

export default ContestantTable;