type Props = {
    title:string;
}

const Title = ({title}:Props) => {
  return (
    <div><p className="text-center mt-10 font-semibold text-xl underline underline-offset-4 decoration-[1px]">{title}</p></div>
  )
}

export default Title