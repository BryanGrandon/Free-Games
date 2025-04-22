type Title = {
  text: string
}

const Title = ({ text }: Title) => {
  return <h2 className='text-3xl font-force capitalize tracking-wider'>{text}</h2>
}

export default Title
