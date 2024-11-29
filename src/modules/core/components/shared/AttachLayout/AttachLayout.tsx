import React, { useRef, useState } from 'react'
import { CallbackType } from '../Types/types'
import { ChildrenCallbackAttach } from '@/modules/builder/interfaces/general'

interface Props {
  actived?: boolean
  children?: ChildrenCallbackAttach
  onChange?: CallbackType<File>
}

const AttachLayout: React.FC<Props> = ({
  actived = true,
  children,
  onChange,
}) => {
  const image = useRef<HTMLInputElement>(null)
  const [imageSrc, setAvatarSrc] = useState<string | undefined>(undefined)

  const handleClickUpload = () => {
    if (image.current) {
      image.current.value = ''
      image.current.click()
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const url = URL.createObjectURL(file)
      setAvatarSrc(url)
      onChange && onChange(file)
    }
  }

  return (
    <>
      {actived && (
        <input
          type="file"
          className="hide"
          ref={image}
          onChange={handleImageChange}
        />
      )}

      {children && children({ imageSrc, handleClick: handleClickUpload })}
    </>
  )
}

export default AttachLayout
