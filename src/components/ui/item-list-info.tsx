type Item_List_Info = {
  description: string
  text: string
}

const ItemListInfo = ({ description, text }: Item_List_Info) => {
  return (
    <li className='font-bold capitalize'>
      {description} : <span className='font-normal text-primary'>{text}</span>
    </li>
  )
}

export default ItemListInfo
