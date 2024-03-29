import Swal from 'sweetalert2'

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const pName = form.pName.value;
        const bName = form.bName.value;
        const pType = form.pType.value;
        const pPrice = form.pPrice.value;
        const pDesc = form.pDesc.value;
        const pRating = form.pRating.value;
        const pImage = form.pImage.value;

        const newProduct = { pName, bName, pType, pPrice, pDesc, pRating, pImage };
        // send data to server 
        fetch('https://car-shop-server-pi.vercel.app/products', {
            method: "POST", 
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        }
        )
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product information saved successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            form.reset();
                        }
                    })
                }
            })
    }
    return (
        <div className="bg-slate-200">
            <h2 className="text-center font-bold text-3xl py-6">Add a new Product</h2>
            <form onSubmit={handleAddProduct} className="card-body ">
                <div className='flex justify-center gap-6'>
                    {/* Name */}
                    <div className="form-control w-full">
                        <label className="label ">
                            <span className="label-text ">Product Name</span>
                        </label>
                        <input type="text" name="pName" placeholder="Name" className="input input-bordered" />
                    </div>
                    {/* Brand Name */}
                    <div className="form-control w-full">
                        <label className="label ">
                            <span className="label-text">Brand</span>
                        </label>
                        <input type="text" name="bName" placeholder="Brand Name" className="input input-bordered" />
                    </div>
                </div>
                <div className='flex justify-center gap-6'>
                    {/* Types */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Types</span>
                        </label>
                        <input type="text" name="pType" placeholder="Product Type" className="input input-bordered" />
                    </div>
                    {/* Price */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="pPrice" placeholder="Product Price $" className="input input-bordered" />
                    </div>
                </div>
                <div className='flex justify-center gap-6'>
                    {/* Rating */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="pRating" placeholder="Product Rating (Out of 5)" className="input input-bordered" />
                    </div>
                    {/* Image */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" name="pImage" placeholder="Product Image URL" className="input input-bordered" />
                    </div>
                </div>
                {/* Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name="pDesc" placeholder="Short description or details" className="input input-bordered" />
                </div>
                {/* Submit Btn */}
                <div className="form-control mt-6">
                    <input type="submit" value="Add Product" name="" id="" className="btn btn-primary" />
                </div>
            </form>

        </div>
    );
};

export default AddProduct;