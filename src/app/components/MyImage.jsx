import Image from "next/image"

function MyImage() {
  return (
    <div className="h-[500px] w-[100vw] overflow-hidden relative">
      
      {/* <img src='/images/tree1.jpg' /> */}
     <Image className="relative object-cover object-center" src="/images/tree.jpg" alt="" fill/>
    </div>
  )
}

export default MyImage
