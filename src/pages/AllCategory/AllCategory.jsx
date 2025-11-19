import React, { useState } from "react";
import { Modal, Button, Input, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

// Dummy images (replace with your own assets)
import cleaningImg from "../../assets/cleaning.jpg";
import laundryImg from "../../assets/laundry.jpg";
import handymanImg from "../../assets/handyman.jpg";
import electricalImg from "../../assets/electrician.jpg";
import { useAllCategoryQuery } from "../../redux/feature/others/othersApi";
import AddCategory from "./AddCategory";

const AllCategory = () => {
  const [page,setPage]=useState(1)
  const limit=10
  const {data:allCategory,refetch}=useAllCategoryQuery({limit,page})

  console.log("all category--------->",allCategory);
  const [categories, setCategories] = useState([
    { id: 1, name: "Cleaning", image: cleaningImg },
    { id: 2, name: "Laundry", image: laundryImg },
    { id: 3, name: "Handyman", image: handymanImg },
    { id: 4, name: "Electrical", image: electricalImg },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState(null);

  // Handle image upload
  const handleUpload = ({ file }) => {
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target.result);
    reader.readAsDataURL(file);
  };

  // Handle save new category
  const handleSave = () => {
    if (!categoryName || !image) return;
    const newCategory = {
      id: categories.length + 1,
      name: categoryName,
      image,
    };
    setCategories([...categories, newCategory]);
    setCategoryName("");
    setImage(null);
    setModalOpen(false);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-[#0F0B18]">All Category</h2>
        <Button
          type="primary"
          onClick={() => setModalOpen(true)}
          className="bg-blue-900"
        >
          Add
        </Button>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {allCategory?.data?.map((cat) => (
          <div
            key={cat?._id}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={cat?.image}
              alt={cat?.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-3 text-center font-medium text-[#0F0B18]">{cat?.name}</div>
          </div>
        ))}
      </div>

      {/* Add Category Modal */}

<Modal
  title="Add Category"
  open={modalOpen}
  onCancel={() => setModalOpen(false)}
  footer={null}
  centered
  width={500}
>
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg ">
          <AddCategory setModalOpen={setModalOpen}  refetch={refetch} />
        </div>
</Modal>

    </div>
  );
};

export default AllCategory;
