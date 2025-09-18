import { useState } from "react";
import user1 from '../../assets/user1.jpg';
import user3 from '../../assets/user3.jpg';
import { Avatar, Button, Input, Modal, Pagination, Table } from "antd";
import { Expand, Search, UserX } from "lucide-react";

const data =[
  {
    "Owner": "Jacob",
    "Provider": "Michal",
    "Date": "20/07/2025 - 5:15 PM",
    "Owner-Email": "jacob@gmail.com",
    "Provider-Email": "michal@gmail.com",
    "Transaction No": "#2566627KEE",
    "Amount": "€50",
    "OwnerImage":user1,
    "ProviderImage":user3
  },
  {
    "Owner": "Jacob",
    "Provider": "Michal",
    "Date": "20/07/2025 - 5:15 PM",
    "Owner-Email": "jacob@gmail.com",
    "Provider-Email": "michal@gmail.com",
    "Transaction No": "#2566627KEE",
    "Amount": "€50",
    "OwnerImage":user1,
    "ProviderImage":user3
  },
  {
    "Owner": "Jacob",
    "Provider": "Michal",
    "Date": "20/07/2025 - 5:15 PM",
    "Owner-Email": "jacob@gmail.com",
    "Provider-Email": "michal@gmail.com",
    "Transaction No": "#2566627KEE",
    "Amount": "€50",
   "OwnerImage":user1,
    "ProviderImage":user3
  },
  {
    "Owner": "Jacob",
    "Provider": "Michal",
    "Date": "20/07/2025 - 5:15 PM",
    "Owner-Email": "jacob@gmail.com",
    "Provider-Email": "michal@gmail.com",
    "Transaction No": "#2566627KEE",
    "Amount": "€50",
    "OwnerImage":user1,
    "ProviderImage":user3
  },
  {
    "Owner": "Jacob",
    "Provider": "Michal",
    "Date": "20/07/2025 - 5:15 PM",
    "Owner-Email": "jacob@gmail.com",
    "Provider-Email": "michal@gmail.com",
    "Transaction No": "#2566627KEE",
    "Amount": "€50",
   "OwnerImage":user1,
    "ProviderImage":user3
  },
  {
    "Owner": "Jacob",
    "Provider": "Michal",
    "Date": "20/07/2025 - 5:15 PM",
    "Owner-Email": "jacob@gmail.com",
    "Provider-Email": "michal@gmail.com",
    "Transaction No": "#2566627KEE",
    "Amount": "€50",
    "OwnerImage":user1,
    "ProviderImage":user3
  },
  {
    "Owner": "Jacob",
    "Provider": "Michal",
    "Date": "20/07/2025 - 5:15 PM",
    "Owner-Email": "jacob@gmail.com",
    "Provider-Email": "michal@gmail.com",
    "Transaction No": "#2566627KEE",
    "Amount": "€50",
   "OwnerImage":user1,
    "ProviderImage":user3
  },
  {
    "Owner": "Jacob",
    "Provider": "Michal",
    "Date": "20/07/2025 - 5:15 PM",
    "Owner-Email": "jacob@gmail.com",
    "Provider-Email": "michal@gmail.com",
    "Transaction No": "#2566627KEE",
    "Amount": "€50",
   "OwnerImage":user1,
    "ProviderImage":user3
  },
  {
    "Owner": "Jacob",
    "Provider": "Michal",
    "Date": "20/07/2025 - 5:15 PM",
    "Owner-Email": "jacob@gmail.com",
    "Provider-Email": "michal@gmail.com",
    "Transaction No": "#2566627KEE",
    "Amount": "€50",
   "OwnerImage":user1,
    "ProviderImage":user3
  },
  {
    "Owner": "Jacob",
    "Provider": "Michal",
    "Date": "20/07/2025 - 5:15 PM",
    "Owner-Email": "jacob@gmail.com",
    "Provider-Email": "michal@gmail.com",
    "Transaction No": "#2566627KEE",
    "Amount": "€50",
   "OwnerImage":user1,
    "ProviderImage":user3
  }
]

const TransactionHistory = () => {
      const [users, setUsers] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [blockModalVisible, setBlockModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handlePageChange = (page) => setCurrentPage(page);



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
    u?.Owner?.toLowerCase().includes(searchText.toLowerCase())
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
      dataIndex: "Owner",
      key: "Owner",
      render: (owner, record) => (
        <div className="flex items-center gap-2">
          <Avatar src={record['OwnerImage']} size={40} />
          <span>{owner}</span>
        </div>
      ),
    },
    {
      title: "Provider",
      dataIndex: "Provider",
      key: "Provider",
      render: (provider, record) => (
        <div className="flex items-center gap-2">
          <Avatar src={record['ProviderImage']} size={40} />
          <span>{provider}</span>
        </div>
      ),
    },
    {
      title: "Booking Date",
      dataIndex: "Date",
      key: "Date",
    },
    {
      title: "Transaction No",
      dataIndex: "Transaction No",
      key: "Transaction No",
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
      render: (text) => <b>{text}</b>,
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
                src={selectedUser.OwnerImage}
                alt={selectedUser.owner}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="bg-gray-100 w-full">
              <div className="space-y-4 px-5 py-5">
                <div>
                  <label className="block font-medium">Owner</label>
                  <p>{selectedUser.owner}</p>
                </div>
                <div>
                  <label className="block font-medium">Provider</label>
                  <p>{selectedUser.provider}</p>
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

export default TransactionHistory;