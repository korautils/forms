import classNames from 'classnames';
import { useEffect, useState } from 'react';

interface Props {
  className?: string;
  src?: string;
  alt?: string;
  loadtype?: 'blob' | 'normal';
}

const Img: React.FC<Props> = ({
  className,
  src,
  alt,
  loadtype = 'normal',
  ...props
}) => {
  const [imageBlob, setImageBlob] = useState<any>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(`/api/image?imageId=${src!}`);
        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([new Uint8Array(arrayBuffer)]);
        const objectURL = URL.createObjectURL(blob);
        setImageBlob(objectURL);
        setTimeout(() => {
          URL.revokeObjectURL(objectURL);
        }, 1000);
      } catch (error) {
        console.error('Error loading image: ', error);
      }
    };

    if (loadtype === 'blob') {
      loadImage();
    }
  }, [src, loadtype]);

  return (
    <>
      {loadtype === 'blob' && imageBlob && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageBlob}
            alt={alt}
            className={classNames(className)}
            {...props}
          />
        </>
      )}

      {loadtype === 'normal' && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className={classNames(className)}
            {...props}
          />
        </>
      )}
    </>
  );
};

export default Img;
