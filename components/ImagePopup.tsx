import { FC, useEffect, useRef } from "react";
import Modal from "react-modal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";

interface ImagePopupProps {
  isOpen: boolean;
  onRequestClose: () => void;
  currentImageIndex: number;
  imageFilenames: string[];
  onNext: () => void;
  onPrev: () => void;
}

const ImagePopup: FC<ImagePopupProps> = ({
  isOpen,
  onRequestClose,
  currentImageIndex,
  imageFilenames,
  onNext,
  onPrev,
}) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      imageRef.current &&
      !imageRef.current.contains(e.target as Node) &&
      buttonsRef.current &&
      !buttonsRef.current.contains(e.target as Node)
    ) {
      onRequestClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Popup"
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80"
      overlayClassName="fixed inset-0 bg-black bg-opacity-80 z-50"
      ariaHideApp={false}
    >
      <div
        className="fixed inset-0 flex items-center justify-center"
        onClick={handleOverlayClick}
      >
        <div
          ref={buttonsRef}
          className="flex items-center justify-center gap-4"
        >
          <button
            className="text-black p-2 bg-white shadow-lg shadow-black/20 text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            <FaChevronLeft />
          </button>

          <button
            className="absolute top-8 right-8 md:top-12 z-10 md:right-12 text-white text-5xl"
            onClick={onRequestClose}
          >
            <IoCloseOutline />
          </button>

          <motion.div
            ref={imageRef}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative rounded-lg max-w-3xl"
          >
            <Image
              src={`/images/galerija/${imageFilenames[currentImageIndex]}`}
              alt={imageFilenames[currentImageIndex]}
              width={800}
              height={600}
              objectFit="contain"
            />
          </motion.div>

          <button
            className="text-black p-2 bg-white shadow-lg shadow-black/20 text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ImagePopup;
