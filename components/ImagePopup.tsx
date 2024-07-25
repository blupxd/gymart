// components/ImagePopup.tsx
import { FC } from "react";
import Modal from "react-modal";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
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
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Popup"
      className="fixed inset-0 flex gap-12 items-center justify-center z-50 bg-black bg-opacity-80"
      overlayClassName="fixed inset-0 bg-black bg-opacity-80 z-50"
      ariaHideApp={false}
    >
      <button
        className="text-black p-2 bg-white shadow-lg shadow-black/20 text-3xl"
        onClick={onPrev}
      >
        <FaChevronLeft />
      </button>

      <button
        className="absolute top-12 z-10 right-12 text-white text-5xl"
        onClick={onRequestClose}
      >
        <IoCloseOutline />
      </button>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative rounded-lg max-w-3xl "
      >
        <Image
          src={`/images/galerija/${imageFilenames[currentImageIndex]}`}
          alt={imageFilenames[currentImageIndex]}
          width={400}
          height={300}
        />
      </motion.div>
      <button
        className="text-black p-2 bg-white shadow-lg shadow-black/20 text-3xl"
        onClick={onNext}
      >
        <FaChevronRight />
      </button>
    </Modal>
  );
};

export default ImagePopup;
