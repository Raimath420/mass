import React, { useState } from 'react'
import allPhotos from "../Json/allphotos"

export const Photos = () => {


    const [photovisible, setphotovisible] = useState(false)
    const [ogPhoto, setogPhoto] = useState("")
    const viewPhoto = (ogurl) => {
        setogPhoto(ogurl)
        setphotovisible(true)
    }
    return (
        <div className='section'>
            <div className='container photo-container'>
                <div className='image-box'>
                    {allPhotos.map((photo) => (
                        <>

                            <div className='img-content'>
                                <img
                                    key={photo.id}
                                    src={photo.enhanced}
                                    alt={` ${photo.id}`}
                                    loading="lazy"
                                    onClick={() => viewPhoto(photo.url)}
                                />
                               
                            </div>


                        </>
                    ))}
                    {photovisible && (
                        <>
                            <div className='og-backdrop' onClick={() => setphotovisible(false)} />
                            <div className='og-photo'>
                                <button className='close-btn' onClick={() => setphotovisible(false)}>×</button>
                                <img src={ogPhoto} alt="Original" loading="lazy" />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
