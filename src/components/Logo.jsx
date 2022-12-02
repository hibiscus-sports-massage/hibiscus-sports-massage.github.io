import Image from 'next/image'
import HibiscusFlower from 'src/images/logos/hibiscusflower.png'
export function Logo(props) {
  const { className } = props
  return (
    <Image
      className={className}
      src={HibiscusFlower}
      alt="Picture of the author"
      width={128}
      height={128}
    />
  )
}
