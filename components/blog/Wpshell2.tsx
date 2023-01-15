import { useStore } from 'store'

const Wpshell2 = () => {
  const { dnsName } = useStore()
  return (
    <a href={`https://${dnsName}.neec-ss14.click`} target="_blank" className="">
      {dnsName}.neec-ss14.click
    </a>
  )
}

export default Wpshell2
