/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { getDocument } from 'pdfjs-dist'
import 'pdfjs-dist/build/pdf.worker.entry'
import {
  IconButton,
  Box,
  styled,
  Paper,
  Tooltip
} from '@mui/material'
import {
  CloudDownload,
  ZoomIn,
  VolumeUp,
  Close,
  ZoomOut
} from '@mui/icons-material'

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: '#000',
  padding: '8px',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}))

const BookWrapper = styled(Paper)(({
  position: 'relative',
  backgroundColor: '#fff',
  borderRadius: 0,
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
  padding: '20px',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: '2px',
    background: 'rgba(0, 0, 0, 0.08)',
    zIndex: 1
  }
}))

interface PdfFlipBookProps {
  pdfUrl: string
  onClose: () => void
}

const PdfFlipBook: React.FC<PdfFlipBookProps> = ({ pdfUrl, onClose }) => {
  const [pages, setPages] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [zoom, setZoom] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      const container = document.querySelector('.pdf-container')
      if (container) {
        const { clientWidth, clientHeight } = container
        // Calculate dimensions to maintain aspect ratio and fit within container
        const aspectRatio = 1.3 // Adjusted for better book-like appearance
        const maxWidth = clientWidth * 0.95 // Use more width
        const maxHeight = clientHeight * 0.9 // Use more height

        let width = maxWidth
        let height = width / aspectRatio

        if (height > maxHeight) {
          height = maxHeight
          width = height * aspectRatio
        }

        setDimensions({
          width: width / 2, // Divide by 2 since we show two pages
          height: height
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    const loadPdf = async () => {
      try {
        setLoading(true)
        const loadingTask = getDocument(pdfUrl)
        const pdf = await loadingTask.promise
        setTotalPages(pdf.numPages)
        const loadedPages: string[] = []

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i)
          const viewport = page.getViewport({ scale: 2 })
          const canvas = document.createElement('canvas')
          const context = canvas.getContext('2d')

          canvas.width = viewport.width
          canvas.height = viewport.height

          await page.render({ canvasContext: context!, viewport }).promise
          loadedPages.push(canvas.toDataURL())
        }

        setPages(loadedPages)
      } catch (e) {
        console.error('Error loading PDF:', e)
        setError('Failed to load PDF')
      } finally {
        setLoading(false)
      }
    }

    loadPdf()
  }, [pdfUrl])

  const handleDownload = () => {
    window.open(pdfUrl, '_blank')
  }

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 2))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5))
  }

  return (
    <Box
      className="pdf-container"
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: '#fff',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2
      }}
    >
      {/* Controls */}
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          display: 'flex',
          gap: 1,
          zIndex: 1000,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '4px',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <Tooltip title="Download">
          <StyledIconButton onClick={handleDownload}>
            <CloudDownload />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Zoom Out">
          <StyledIconButton onClick={handleZoomOut}>
            <ZoomOut />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Zoom In">
          <StyledIconButton onClick={handleZoomIn}>
            <ZoomIn />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Audio">
          <StyledIconButton>
            <VolumeUp />
          </StyledIconButton>
        </Tooltip>
      </Box>

      <Tooltip title="Close">
        <StyledIconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            zIndex: 1000,
          }}
        >
          <Close />
        </StyledIconButton>
      </Tooltip>

      {/* Book Container */}
      <Box
        sx={{
          flex: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `scale(${zoom})`,
          transition: 'transform 0.3s ease',
          transformOrigin: 'center center',
        }}
      >
        {pages.length > 0 && dimensions.width > 0 && (
          <BookWrapper elevation={0}>
            <HTMLFlipBook
              width={dimensions.width}
              height={dimensions.height}
              size="stretch"
              minWidth={dimensions.width * 0.6}
              maxWidth={dimensions.width * 1.4}
              minHeight={dimensions.height * 0.6}
              maxHeight={dimensions.height * 1.4}
              drawShadow={true}
              flippingTime={800}
              className="book-render"
              showCover={true}
              mobileScrollSupport={true}
              onFlip={(e) => setCurrentPage(e.data + 1)}
              maxShadowOpacity={0.2}
              showPageCorners={true}
              usePortrait={false}
              startPage={0}
              style={{}}
              startZIndex={1} 
              autoSize={true} 
              clickEventForward={true} 
              useMouseEvents={true}
              swipeDistance={50} 
              disableFlipByClick={false} 
            >
              {pages.map((pageSrc, index) => (
                <div key={index} className="page">
                  <img
                    src={pageSrc}
                    alt={`Page ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '2px',
                    }}
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </BookWrapper>
        )}
      </Box>
    </Box>
  )
}

export default PdfFlipBook
