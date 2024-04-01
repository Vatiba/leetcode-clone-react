import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

type PaginationProps = ReactPaginateProps & {

}

function Pagination(props: PaginationProps) {
   const {

   } = props;

   return (
      <ReactPaginate
         breakLabel="..."
         nextLabel=">"
         pageRangeDisplayed={2}
         previousLabel="<"
         renderOnZeroPageCount={null}
         className='flex items-center justify-end select-none text-lg'
         nextClassName='h-10 w-10 rounded-md bg-white flex justify-center items-center transition-colors hover:bg-green-500 hover:text-white font-bold text-xl cursor-pointer'
         previousClassName='h-10 w-10 rounded-md bg-white flex justify-center items-center transition-colors hover:bg-green-500 hover:text-white font-bold text-xl cursor-pointer'
         pageClassName='h-10 w-10 rounded-md bg-white flex justify-center items-center transition-colors hover:bg-green-500 hover:text-white font-bold cursor-pointer mx-1'
         activeClassName='text-white bg-green-500'
         {...props}
      />
   )
}

export default Pagination