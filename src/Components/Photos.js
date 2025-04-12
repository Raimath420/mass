import React from 'react'
import allPhotos from "../Json/allphotos"

export const Photos = () => {
    return (
        <div className='section'>
            <div className='container photo-container'>
                <div className='image-box'>
                    {allPhotos.map((photo) => (
                        <>
                        <div className='img-content'>
                            <img
                                key={photo.id}
                                src={photo.url}
                                alt={`Photo ${photo.id}`}
                                loading="lazy"
                            />
                            <div className='og-en'>
                                Original
                            </div>
                        </div>
                        <div className='img-content'>
                            <img
                                key={photo.id}
                                src={photo.enhanced}
                                alt={`Photo ${photo.id}`}
                                loading="lazy"
                            />
                            <div className='og-en'>
                                Enhanced
                            </div>
                        </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
