import { Button, Input } from 'antd';
import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';
import { useCreateKnowledgeMutation } from '../../redux/feature/knowledgeHub/knowledgeApi';
import toast from 'react-hot-toast';

const CreateModal = ({refetch,setIsCreateModalOpen}) => {
  const [createKnowledge] = useCreateKnowledgeMutation(); // Hook for the mutation
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState(""); // State to store the title

  const config = {
    readonly: false,
    placeholder: "Start typing...",
    height: 600,
    iframe: false,
  };

  // Handle content changes
  const handleSave = async () => {
    if (!title || !content) {
      toast.warning("Title and Content are required.");
      return;
    }

    const data = {
      title,
      description: content, // Using the title and content from the state
    };

    try {
      const response = await createKnowledge(data).unwrap(); // Call the mutation and unwrap the result   
      if (response?.success) {
        toast.success("Knowledge Hub created successfully!");
        refetch()
        setIsCreateModalOpen(false)
      } else {
        toast.error("Failed to create Knowledge Hub. Please try again.");
        setIsCreateModalOpen(false)
      }
    } catch (error) {
      // console.error("Error creating knowledge hub:", error);
      toast.error(error?.data?.message);
      setIsCreateModalOpen(false)
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-6"> Create Knowledge Hub </h2>

      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update title state
        className="h-12 mb-6"
        placeholder="Enter the title"
      />

      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
      <div className='mb-3'>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1}
          onBlur={(newContent) => setContent(newContent)} // Update content state on blur
          onChange={() => {}}
        />
      </div>

      <Button
        type="primary"
        block
        onClick={handleSave} // Trigger the save function
        className="h-12 bg-blue-900 text-white hover:bg-blue-800"
      >
        Save
      </Button>
    </div>
  );
};

export default CreateModal;
