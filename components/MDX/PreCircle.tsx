type Props = {
  color: string
}

const PreCircle = ({ color }: Props) => {
  let c = ''
  switch (color) {
    case 'r':
      c = '#FF605C'
      break
    case 'y':
      c = '#FFBD44'
      break
    case 'g':
      c = '#00CA4E'
      break
    default:
      break
  }
  return (
    <>
      <svg
        width="15"
        viewBox="0 0 2 2"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <circle fill={c} cx="1" cy="1" r="1"></circle>
      </svg>
    </>
  )
}

export default PreCircle
