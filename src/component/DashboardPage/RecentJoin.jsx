import React, { useState } from "react";
import { Table, Modal, Button } from "antd";
import { UserOutlined } from '@ant-design/icons';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import idCard from '../../assets/idcard.jpg'

// Sample user data
const userData = [
  {
    id: 1,
    name: "Jacob",
    role: "Owner",
    date: "20/07/2025 - 5:15 PM",
    phone: "01840560614",
    email: "jacob@gmail.com",
    address: "Dhaka, Mohakhali",
    status: "Accept",
    avatar: user1,
        experience: "3 years",
    about:
      "Hello! I'm a dedicated property owner with a passion for creating comfortable and welcoming spaces for tenants.",
    referredBy: "Michael",
    idCard:idCard,
    
  },
  {
    id: 2,
    name: "Michal",
    role: "Service Provider",
    date: "20/07/2025 - 5:15 PM",
    phone: "01840560614",
    email: "jacob@gmail.com",
    address: "Dhaka, Mohakhali",
    status: "Accept",
    avatar: user2,
        experience: "3 years",
    about:
      "Hello! I'm a dedicated property owner with a passion for creating comfortable and welcoming spaces for tenants.",
    referredBy: "Michael",
    idCard:idCard,
  },
  {
    id: 3,
    name: "Joshua",
    role: "Owner",
    date: "20/07/2025 - 5:15 PM",
    phone: "01840560614",
    email: "jacob@gmail.com",
    address: "Dhaka, Mohakhali",
    status: "Reject",
    avatar: user3,
        experience: "3 years",
    about:
      "Hello! I'm a dedicated property owner with a passion for creating comfortable and welcoming spaces for tenants.",
    referredBy: "Michael",
    idCard:idCard,

  },
  {
    id: 4,
    name: "Matthew",
    role: "Service Provider",
    date: "20/07/2025 - 5:15 PM",
    phone: "01840560614",
    email: "jacob@gmail.com",
    address: "Dhaka, Mohakhali",
    status: "Accept",
    avatar: user1,
        experience: "3 years",
    about:
      "Hello! I'm a dedicated property owner with a passion for creating comfortable and welcoming spaces for tenants.",
    referredBy: "Michael",
    idCard:idCard,
  
  },
  {
    id: 5,
    name: "Daniel",
    role: "Owner",
    date: "20/07/2025 - 5:15 PM",
    phone: "01840560614",
    email: "jacob@gmail.com",
    address: "Dhaka, Mohakhali",
    status: "Reject",
    avatar: user2,
        experience: "3 years",
    about:
      "Hello! I'm a dedicated property owner with a passion for creating comfortable and welcoming spaces for tenants.",
    referredBy: "Michael",
    idCard:idCard,

  },
  {
    id: 6,
    name: "Benjamin",
    role: "Service Provider",
    date: "20/07/2025 - 5:15 PM",
    phone: "01840560614",
    email: "jacob@gmail.com",
    address: "Dhaka, Mohakhali",
    status: "Reject",
    avatar: user3,
        experience: "3 years",
    about:
      "Hello! I'm a dedicated property owner with a passion for creating comfortable and welcoming spaces for tenants.",
    referredBy: "Michael",
    idCard:idCard,
 
  },
];

export default function RecentJoin() {
  const [users, setUsers] = useState(userData);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleStatusChange = (userId, newStatus) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, status: newStatus } : user)));
  };

  const handleOverviewClick = (user) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedUser(null);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.avatar || "/placeholder.svg"}
            alt={record.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Phone No",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <select
          value={text}
          onChange={(e) => handleStatusChange(record.id, e.target.value)}
          className={`px-3 py-1 rounded text-sm font-medium border-none outline-none cursor-pointer ${
            text === "Accept" ? "bg-orange-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          <option value="Accept">Accept</option>
          <option value="Reject">Reject</option>
        </select>
      ),
    },
    {
      title: "Overview",
      key: "overview",
      render: (text, record) => (
     
              <button onClick={() => handleOverviewClick(record)} className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                          />
                        </svg>
                      </button>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto font-title">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900">Recent Join Owner & Service Provider</h1>
        </div>

        <Table
          dataSource={users}
          columns={columns}
          rowKey="id"
          pagination={false}
          className="overflow-x-auto"
        />

        <Modal
          title="User Overview"
          visible={modalVisible}
          onCancel={handleCloseModal}
          footer={[
            <Button key="back" onClick={handleCloseModal}>
              Close
            </Button>,
          ]}
        >
          {selectedUser && (
            <div className=" pb-6">
          {/* Profile picture */}
          <div className="flex justify-center py-5 shadow-2xl">
            <img
              src={selectedUser.avatar || "/placeholder.svg"}
              alt={selectedUser.name}
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>

          {/* User details */}
          <div className=" bg-gray-100 w-[100%] ">

          <div className="space-y-4  px-5 py-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <div className="text-gray-900">{selectedUser.name}</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <div className="text-gray-900">{selectedUser.role}</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <div className="text-gray-900">{selectedUser.date}</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="text-gray-900">{selectedUser.phone}</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="text-gray-900">{selectedUser.email}</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <div className="text-gray-900">{selectedUser.address}</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
              <div className="text-gray-900">{selectedUser.experience}</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">About me</label>
              <div className="text-gray-900 text-sm leading-relaxed">{selectedUser.about}</div>
              <button className="text-blue-600 text-sm mt-1 hover:underline">Read More</button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Referred by</label>
              <div className="text-gray-900">{selectedUser.referredBy}</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Id card</label>
              <img
                src={selectedUser.idCard}
                alt="ID Card"
                className="w-full max-w-xs h-24 object-cover rounded border"
              />
            </div>
          </div>
          </div>
        </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
