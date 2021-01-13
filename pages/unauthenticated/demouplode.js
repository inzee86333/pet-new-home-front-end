import React from 'react';
import ImageUploading from 'react-images-uploading';

export default function App() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className="App">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                    errors,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">

                        <button
                            style={isDragging ? { color: 'black' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Click or Drop here
                         </button>
                         &nbsp;
                        <button onClick={onImageRemoveAll}>Remove all images</button>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image['data_url']} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                    <button onClick={() => onImageUpdate(index)}>Update</button>
                                    <button onClick={() => onImageRemove(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                        {errors && <div>
                            {errors.maxNumber && <span>Number of selected images exceed maxNumber</span>}
                            {errors.acceptType && <span>Your selected file type is not allow</span>}
                            {errors.maxFileSize && <span>Selected file size exceed maxFileSize</span>}
                            {errors.resolution && <span>Selected file is not match your desired resolution</span>}
                        </div>}
                    </div>
                )}

            </ImageUploading>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url">
                {({ imageList, dragProps, isDragging }) => (
                    <div {...dragProps}>
                        {isDragging ? "Drop here please" : "Upload space"}
                        {imageList.map((image, index) => (
                            <img key={index} src={image.data_url} />
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}