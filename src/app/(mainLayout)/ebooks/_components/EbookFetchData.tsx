'use client'

import React, { useState } from 'react'
import { 
  Modal, 
  Box,
  styled
} from '@mui/material'
import Container from '@/components/share/Container'
import Image from 'next/image'
import { useEbookData } from '@/hooks/useEbookData'
import Ebook from './Ebook'
import dynamic from 'next/dynamic'
import { TEbook } from '@/types/type'
import PdfFlipBook from './PdfReader'

const StyledModal = styled(Modal)(({ theme }) => ({
  '.MuiBackdrop-root': {
    backdropFilter: 'blur(0px)',
  }
}))

const Loader = dynamic(() => import('@/components/Loading/Loading'), {
  ssr: false,
});

function EbookFetchData() {
  const { ebookData, loading, error } = useEbookData()
  const [openModal, setOpenModal] = useState(false)
  const [selectedPdf, setSelectedPdf] = useState('')

  if (loading) return <Loader />
  if (error) return <p>Oops Something Went Wrong!</p>

  const handleOpenPdf = (pdfUrl: string) => {
    setSelectedPdf(pdfUrl)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedPdf('')
  }

  return (
    <div>
      <Ebook />
      <Container>
        <div className="my-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {ebookData?.map((book: TEbook) => (
              <div key={book._id} className="bg-white p-5 shadow-lg border">
                <div
                  className="relative w-full h-[450px] overflow-hidden group cursor-pointer"
                  onClick={() => handleOpenPdf(book.ebook)}
                >
                  {book.images && book.images.length > 0 ? (
                    <Image
                      src={book.images[0]}
                      alt={book.title || 'E-Book'}
                      width={300}
                      height={450}
                      className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
                      No Image Available
                    </div>
                  )}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <StyledModal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="pdf-reader-modal"
        aria-describedby="modal-to-read-pdf-book"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '52%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80vw',
            height: '80vh',
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          {selectedPdf && (
            <PdfFlipBook 
              pdfUrl={selectedPdf} 
              onClose={handleCloseModal}
            />
          )}
        </Box>
      </StyledModal>
    </div>
  )
}

export default EbookFetchData

