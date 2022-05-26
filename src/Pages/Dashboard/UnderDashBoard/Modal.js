import React from 'react';

const Modal = (propss) => {
    // delete Item api call
    console.log(propss)
    const deleteItem = (props) => {
        console.log(props)
        // fetch(`https://murmuring-basin-10907.herokuapp.com/items/${props}`, {
        //     method: 'Delete',
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data.deletedCount > 0) {
        //             const remaing = items.filter(itme => itme._id !== props)
        //             setItems(remaing)
        //             toast('Product is deleted')
        //         }
        //     })
    }
    return (
        <div>
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box ">
                    <h3 class="font-bold text-lg text-center p-[10px]">Sir do you want to delete the Product</h3>
                    <div class="card-actions justify-center">
                        <button class="btn btn-outline" onClick={() => deleteItem(propss)}>Delete Product</button>
                        <label for="my-modal-6" class="btn">Clear</label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Modal;