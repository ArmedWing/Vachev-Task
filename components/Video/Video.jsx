import Image from "next/image";


export const Video = ({image}) => {
    return(
    <div>
        <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
    </div>
    )
}