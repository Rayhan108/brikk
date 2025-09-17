import React, { useState } from "react";
import { Table, Button, Avatar, Modal, Tag, Pagination, Input } from "antd";
import { Expand, Search, UserX } from "lucide-react";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import idCard from "../../assets/idcard.jpg";

const bookingData = [
  {
    id: 1,
    owner: { name: "Jacob", avatar: user1 },
    provider: { name: "Michal", avatar: user2 },
    bookingDate: "20/07/2025 - 5:15 PM",
    category: "Cleaning",
    amount: "€50-2h",
    status: "Accept",
    phone: "01840560614",
    email: "jacob@gmail.com",
    address: "Dhaka, Mohakhali",
    about:
      "Hello! I'm a dedicated property owner with a passion for creating comfortable and welcoming spaces.",
    referredBy: "Admin",
    idCard: idCard,
  },
  {
    id: 2,
    owner: { name: "Joshua", avatar: user3 },
    provider: { name: "Michal", avatar: user2 },
    bookingDate: "20/07/2025 - 5:15 PM",
    category: "Cleaning",
    amount: "€50-2h",
    status: "Reject",
    phone: "01840560614",
    email: "joshua@gmail.com",
    address: "Dhaka, Banani",
    about:
      "I like maintaining properties and keeping them clean and welcoming.",
    referredBy: "Admin",
    idCard: idCard,
  },
  {
    id: 3,
    owner: { name: "Jacob", avatar: user1 },
    provider: { name: "Michal", avatar: user2 },
    bookingDate: "20/07/2025 - 5:15 PM",
    category: "Cleaning",
    amount: "€50-2h",
    status: "Accept",
    phone: "01840560614",
    email: "jacob@gmail.com",
    address: "Dhaka, Mohakhali",
    about:
      "Hello! I'm a dedicated property owner with a passion for creating comfortable and welcoming spaces.",
    referredBy: "Admin",
    idCard: idCard,
  },
];

const Request = () => {
  const [users, setUsers] = useState(bookingData);
  const [searchText, setSearchText] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [blockModalVisible, setBlockModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handlePageChange = (page) => setCurrentPage(page);

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
    const updatedUsers = users.map((u) =>
      u.id === selectedUser.id ? { ...u, status: "Blocked" } : u
    );
    setUsers(updatedUsers);
    setBlockModalVisible(false);
  };

  const paginatedUsers = users.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const filteredUsers = paginatedUsers.filter((u) =>
    u.owner.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) =>
        (currentPage - 1) * pageSize + index + 1,
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
      render: (owner) => (
        <div className="flex items-center gap-2">
          <Avatar src={owner.avatar} size={40} />
          <span>{owner.name}</span>
        </div>
      ),
    },
    {
      title: "Provider",
      dataIndex: "provider",
      key: "provider",
      render: (provider) => (
        <div className="flex items-center gap-2">
          <Avatar src={provider.avatar} size={40} />
          <span>{provider.name}</span>
        </div>
      ),
    },
    {
      title: "Booking Date",
      dataIndex: "bookingDate",
      key: "bookingDate",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <b>{text}</b>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          color={
            status === "Accept"
              ? "orange"
              : status === "Reject"
              ? "red"
              : "gray"
          }
          className="px-3 py-1 rounded font-medium border-0"
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Overview",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button
            type="text"
            icon={<Expand className="w-4 h-4" />}
            onClick={() => handleOverviewClick(record)}
          />
          <Button
            type="text"
            icon={<UserX className="w-4 h-4 text-red-600" />}
            onClick={() => handleBlockClick(record)}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <h1 className="text-2xl font-semibold text-gray-900">
          Request Overview
        </h1>
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

      <Table
        columns={columns}
        dataSource={filteredUsers}
        pagination={false}
        rowKey="id"
        rowClassName={(record, index) =>
          index % 2 === 0 ? "bg-white" : "bg-gray-50"
        }
      />

      <div className="flex justify-center items-center">
        <Pagination
          current={currentPage}
          total={users.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
          className="my-4"
        />
      </div>

      {/* Overview Modal */}
      <Modal
        title="User Overview"
        open={modalVisible}
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
                src={selectedUser.owner.avatar}
                alt={selectedUser.owner.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="bg-gray-100 w-full">
              <div className="space-y-4 px-5 py-5">
                <div>
                  <label className="block font-medium">Owner</label>
                  <p>{selectedUser.owner.name}</p>
                </div>
                <div>
                  <label className="block font-medium">Provider</label>
                  <p>{selectedUser.provider.name}</p>
                </div>
                <div>
                  <label className="block font-medium">Category</label>
                  <p>{selectedUser.category}</p>
                </div>
                <div>
                  <label className="block font-medium">Amount</label>
                  <p>{selectedUser.amount}</p>
                </div>
                <div>
                  <label className="block font-medium">Email</label>
                  <p>{selectedUser.email}</p>
                </div>
                <div>
                  <label className="block font-medium">Address</label>
                  <p>{selectedUser.address}</p>
                </div>
                <div>
                  <label className="block font-medium">ID Card</label>
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
        open={blockModalVisible}
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
        Are you sure you want to block {selectedUser?.owner?.name}?
      </Modal>
    </div>
  );
};

export default Request;
