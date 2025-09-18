import React, { useState } from 'react';
import { Table, Button, Avatar, Modal, Tag, Pagination, Input, ConfigProvider, } from 'antd';
import { Expand, Search, UserX } from 'lucide-react'; 
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import idCard from '../../assets/idcard.jpg';

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
    idCard: idCard,
  },
  {
    id: 2,
    name: "Michal",
    role: "Owner",
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
    idCard: idCard,
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
    idCard: idCard,
  },
  {
    id: 4,
    name: "Matthew",
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
    idCard: idCard,
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
    idCard: idCard,
  },
  {
    id: 6,
    name: "Benjamin",
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
    idCard: idCard,
  },
];

const AllOwner = () => {
  const [users, setUsers] = useState(userData);
    const [searchText, setSearchText] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [blockModalVisible, setBlockModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleOverviewClick = (user) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const handleBlockClick = (user) => {
    setSelectedUser(user);
    setBlockModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedUser(null);
  };

  const handleBlockCloseModal = () => {
    setBlockModalVisible(false);
    setSelectedUser(null);
  };

  const handleBlockUser = () => {
    // Block user logic (just set the status to 'Blocked')
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id ? { ...user, status: 'Blocked' } : user
    );
    setUsers(updatedUsers);
    setBlockModalVisible(false);
  };

  const paginatedUsers = users.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <Avatar src={record.avatar} size={40} />
          <span className="font-medium text-gray-900">{text}</span>
        </div>
      ),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text) => <span className="text-gray-600">{text}</span>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <span className="text-gray-600">{text}</span>,
    },
    {
      title: "Phone No",
      dataIndex: "phone",
      key: "phone",
      render: (text) => <span className="text-gray-600">{text}</span>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <span className="text-gray-600">{text}</span>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (text) => <span className="text-gray-600">{text}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === 'Accept' ? "orange" : status === 'Reject' ? 'red' : 'gray'} className="px-3 py-1 rounded font-medium border-0">
          {status}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button
            type="text"
            icon={<Expand className="w-4 h-4" />}
            className="text-gray-400 hover:text-gray-600"
            onClick={() => handleOverviewClick(record)}
          />
          <Button
            type="text"
            icon={<UserX className="w-4 h-4 text-red-600" />}
            className="text-gray-400 hover:text-gray-600 ml-3"
            onClick={() => handleBlockClick(record)}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
           <div className="flex items-center justify-between py-5">
              <div className="flex items-center gap-6">
                <h1 className="text-2xl font-semibold text-gray-900">All Owner Details</h1>
            
              </div>
              <div className="relative">
                <Input
                  placeholder="Search"
                  prefix={<Search className="w-4 h-4 text-gray-400" />}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-64"
                />
              </div>
            </div>
                <ConfigProvider
        theme={{
          components: {
            InputNumber: {
              activeBorderColor: "#00c0b5",
            },
            Pagination: {
              colorPrimaryBorder: "#00c0b5",
              colorBorder: "#00c0b5",
              colorPrimaryHover: "#00c0b5",
              colorTextPlaceholder: "#00c0b5",
              itemActiveBgDisabled: "#00c0b5",
              colorPrimary: "#00c0b5",
            },
            Table: {
              headerBg: "#1B2D51",
              headerColor: "rgb(255,255,255)",
              cellFontSize: 16,
              headerSplitColor: "#1D4ED8",
            },
          },
        }}
      >

      <Table
        columns={columns}
        dataSource={paginatedUsers}
        pagination={false}
        rowClassName={(record, index) => (index % 2 === 0 ? "bg-white" : "bg-gray-50")}
      />
      </ConfigProvider>

      {/* Pagination */}
      <div className="flex justify-center items-center">
        <Pagination
          current={currentPage}
          total={users.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
          className="my-4 text-center"
        />
      </div>

      {/* User Overview Modal */}
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
          <div className="pb-6">
            <div className="flex justify-center py-5 shadow-2xl">
              <img
                src={selectedUser.avatar || "/placeholder.svg"}
                alt={selectedUser.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>

            <div className="bg-gray-100 w-full">
              <div className="space-y-4 px-5 py-5">
                {Object.keys(selectedUser).map((key) => {
                  if (key === "idCard") return null; // Skip rendering the ID card image
                  return (
                    <div key={key}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{key.replace(/([A-Z])/g, ' $1')}</label>
                      <div className="text-gray-900">
                        {typeof selectedUser[key] === "string" ? selectedUser[key] : JSON.stringify(selectedUser[key])}
                      </div>
                    </div>
                  );
                })}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Id Card</label>
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

      {/* Block User Modal */}
      <Modal
        title="Block User"
        visible={blockModalVisible}
        onCancel={handleBlockCloseModal}
        footer={[
          <Button key="back" onClick={handleBlockCloseModal}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleBlockUser}>
            Block User
          </Button>,
        ]}
      >
        Are you sure you want to block {selectedUser?.name}?
      </Modal>
    </div>
  );
};

export default AllOwner;
