import { Link } from "react-router-dom"

type ContestantTableProps = {
   data: {
      id: number | string
      name: string
      score: string | number
      slug: string
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
                  <th>Problem list</th>
                  <th>Score</th>
               </tr>
            </thead>
            <tbody>
               {
                  data.map((item, i) => {
                     return (
                        <tr key={item.id}>
                           <td>
                              <Link to={`/problems/${item.slug}`}>
                                 {item.name}
                              </Link>
                           </td>
                           <td>
                              <Link to={`/problems/${item.slug}`}>
                                 🔥 {item.score}
                              </Link>
                           </td>
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