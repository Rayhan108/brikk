import { useState } from "react"
import { Table, Button, Input, Avatar, Tag, Modal, Pagination } from "antd"
import { Search, Expand } from "lucide-react"
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import idCard from '../../assets/idcard.jpg'

const userData = [
  // Your user data here
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
    idCard: idCard,
  },
];

export default function UserManagement() {
      const [users, setUsers] = useState(userData);
  const [activeTab, setActiveTab] = useState("Owner"); // Default is Owner
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Adjust this based on how many rows you want per page
  const handleStatusChange = (userId, newStatus) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, status: newStatus } : user)));
  };

  const filteredUsers = userData.filter((user) => {
    // Filter by role and search text
    const roleMatch = user.role === activeTab;
    const searchMatch =
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase());
    return roleMatch && searchMatch;
  });

  const paginatedUsers = filteredUsers.slice(
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
      render: (_, record) => (
        <Button
          type="text"
          icon={<Expand className="w-4 h-4" />}
          className="text-gray-400 hover:text-gray-600"
          onClick={() => handleOverviewClick(record)}
        />
      ),
    },
  ];

  const handleOverviewClick = (user) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedUser(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <h1 className="text-2xl font-semibold text-gray-900">User Management</h1>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab("Owner")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "Owner" ? "bg-slate-800 text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Owner
                  </button>
                  <button
                    onClick={() => setActiveTab("Service Provider")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "Service Provider" ? "bg-slate-800 text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Provider
                  </button>
                </div>
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
          </div>

          <Table
            columns={columns}
            dataSource={paginatedUsers}
            pagination={false}
            className="custom-table text-center"
            rowClassName={(record, index) => (index % 2 === 0 ? "bg-white" : "bg-gray-50")}
          />

<div className="flex justify-center items-center">
              {/* Pagination */}
          <Pagination
            current={currentPage}
            total={filteredUsers.length}
            pageSize={pageSize}
            onChange={handlePageChange}
            showSizeChanger={false}
            className="my-4 text-center"
          />
</div>
        </div>
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
    </div>
  );
}
