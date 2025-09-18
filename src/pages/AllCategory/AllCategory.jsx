import React, { useState } from "react";
import { Modal, Button, Input, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

// Dummy images (replace with your own assets)
import cleaningImg from "../../assets/cleaning.jpg";
import laundryImg from "../../assets/laundry.jpg";
import handymanImg from "../../assets/handyman.jpg";
import electricalImg from "../../assets/electrician.jpg";

const AllCategory = () => {
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
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-3 text-center font-medium text-[#0F0B18]">{cat.name}</div>
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
  <div className="space-y-6">
    {/* Category Name */}
    <div>
      <label className="block mb-2 text-lg font-medium text-gray-700">Category Name</label>
      <Input
        placeholder="Enter category name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        className="w-full shadow-md rounded-lg border-2 border-gray-300 p-3 focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Upload Image */}
    <div> 
      <label className="block mb-2 text-lg font-medium text-gray-700">Upload Image</label>
      <Upload
        accept="image/*"
        showUploadList={false}
        beforeUpload={() => false}
        customRequest={handleUpload}
      >
        <div className="w-full border-dashed border-2 border-gray-300 rounded-lg p-6 flex  cursor-pointer hover:border-blue-500 transition-all">
          {image ? (
            <img
              src={image}
              alt="preview"
              className="w-full h-40 object-cover rounded-lg shadow-lg"
            />
          ) : (
            <div className="flex flex-col items-center text-gray-500">
              <PlusOutlined className="text-3xl mb-2" />
              <span className="text-sm">Upload Image</span>
            </div>
          )}
        </div>
      </Upload>
    </div>

    {/* Action Buttons */}
    <div className="flex justify-center gap-3">

      <Button
        type="primary"
        onClick={handleSave}
        className="bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 text-white"
      >
        Confirm
      </Button>
    </div>
  </div>
</Modal>

    </div>
  );
};

export default AllCategory;
