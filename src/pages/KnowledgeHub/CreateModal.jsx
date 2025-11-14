import { Button, Input } from 'antd';
import JoditEditor from 'jodit-react';

import  { useEffect, useRef, useState } from 'react';

const CreateModal = () => {
       const editor = useRef(null);
          const [content, setContent] = useState("");
        
          const config = {
            readonly: false,
            placeholder: "Start typing...",
            height: 600,
            iframe: false,
          };
        
          // On component mount, load the content from localStorage
          useEffect(() => {
            const savedContent = localStorage.getItem("termsContent");
            if (savedContent) {
              setContent(savedContent);
            }
          }, []);
        
          // Function to handle saving the content to localStorage
          const handleSave = () => {
            localStorage.setItem("termsContent", content);
            alert("Changes saved!");
          };
    return (
        <div>
           <h2 className="text-2xl font-semibold text-center mb-6">Create Knowledge</h2>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <Input
          value={""}

          className="h-12 mb-6"
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <div className='mb-3'>

         <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
            onChange={() => {}}
          />
        </div>

        <Button
          type="primary"
          block
            onClick={handleSave}
          className="h-12 bg-blue-900 text-white hover:bg-blue-800"
   
        >
          Save
        </Button>
        </div>
    );
};

export default CreateModal;