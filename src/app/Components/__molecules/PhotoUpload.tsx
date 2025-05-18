import { useProfileStore } from '../../Common/Store/store'
import ImagesSvg from '../../Common/Images/imagesSvg/imagesSvg'
import Image from 'next/image';


export default function PhotoUpload() {
  const photo = useProfileStore((s) => s.photo)
  const setPhoto = useProfileStore((s) => s.setPhoto)

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64 = reader.result as string
        setPhoto(base64)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex  items-center justify-between   pr-7 pl-7 space-y-4 bg-[#FAFAFA] text-[#737373]">
<h1  className=' text-[16px]'>Profile picture</h1>
     <div className=' bg-[#EFEBFF] flex flex-col items-center'>
     {photo ? (
        <Image
          src={photo}
          alt="Profile"
          width={112}
          height={112}
          className="w-28 h-28  object-cover border-4  shadow-lg"
        />
      ) : (
        <div className="w-28 h-28 rounded-full  flex items-center justify-center text-gray-500 text-sm">
         <ImagesSvg />
        </div>
      )}
      <label className="cursor-pointer px-4 py-2 text-[#633CFF] transition">
        
      + Upload Image
        <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
      </label>
     </div>
     <h1 className=' text-[12px]'>Image must be below 1024x1024px. <br />
       Use PNG or JPG format.</h1>
      
    </div>
  )
}
