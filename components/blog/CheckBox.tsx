type Props = {
  checked?: boolean
  name: string
}

const CheckBox = ({ checked = false, name }: Props) => {
  return (
    <div className="my-2">
      <input
        readOnly
        type="checkbox"
        checked={checked}
        className="mr-3 align-middle checkbox"
      />
      <span>{name}</span>
    </div>
  )
}

export default CheckBox
