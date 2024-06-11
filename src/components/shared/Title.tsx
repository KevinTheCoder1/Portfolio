interface TitleProps {
  title: string
}

function Title({title}: TitleProps): JSX.Element {
  return (
   <div className="title text-5xl center">
      {title}
   </div>
  )
}

export default Title
