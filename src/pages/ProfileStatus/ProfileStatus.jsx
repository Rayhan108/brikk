import { useState } from "react";
import {
  Table,
  Button,
  Input,
  Avatar,
  Modal,
  Pagination,
  ConfigProvider,
  Calendar,
} from "antd";
import { CalendarIcon, Search } from "lucide-react";
import user1 from "../../assets/user1.jpg";
import dayjs from "dayjs";

const userData = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: "Jacob",
  provider: "Michal",
  date: "12/7/2025",
  email: "jacob@gmail.com",
  referedEmail: "michal@gmail.com",
  phone: "012345568",
  role: i % 2 === 0 ? "Owner" : "Service Provider", // mix roles for testing
  completed: "1",
  pending: "0",
  cancelled: "3",
  total: "3",
  ownerImage: user1,
}));

export default function ProfileStatus() {
  const [activeTab, setActiveTab] = useState("Owner"); // Default is Owner
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
      const [fromDate, setFromDate] = useState(dayjs("2025-06-16"));
      const [toDate, setToDate] = useState(dayjs("2025-09-10"));
    const [calendarOpen, setCalendarOpen] = useState(false)
      const [activeRange, setActiveRange] = useState("Custom Range");
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  // filter by role & search
  const filteredUsers = userData.filter((user) => {
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
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) =>
        (currentPage - 1) * pageSize + index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <Avatar src={record.ownerImage} size={40} />
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
      title: "Completed",
      dataIndex: "completed",
      key: "completed",
    },
    {
      title: "Pending",
      dataIndex: "pending",
      key: "pending",
    },
    {
      title: "Cancelled",
      dataIndex: "cancelled",
      key: "cancelled",
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-semibold text-gray-900">
                User Management
              </h1>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab("Owner")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === "Owner"
                      ? "bg-slate-800 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Owner
                </button>
                <button
                  onClick={() => setActiveTab("Service Provider")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === "Service Provider"
                      ? "bg-slate-800 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Provider
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
                  
                            <Input
                              placeholder="Search"
                              prefix={<Search className="w-4 h-4 text-gray-400" />}
                              value={searchText}
                              onChange={(e) => setSearchText(e.target.value)}
                              className="w-64"
                            />
          <Button
            type="default"
            className="flex items-center gap-2 border rounded px-3 py-1"
            onClick={() => setCalendarModalVisible(true)}
          >
            <CalendarIcon className="w-4 h-4" />
            <span>16 June to 10 Sep 2025</span>
          </Button>
        </div>
          </div>
        </div>

        <ConfigProvider
          theme={{
            components: {
              Pagination: {
                colorPrimary: "#00c0b5",
              },
              Table: {
                headerBg: "#1B2D51",
                headerColor: "#fff",
                headerSplitColor: "#1D4ED8",
              },
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={paginatedUsers}
            pagination={false}
            rowKey="id"
            className="custom-table text-center"
            rowClassName={(record, index) =>
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }
          />
        </ConfigProvider>

        {/* Pagination */}
        <div className="flex justify-center items-center">
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
                  {/* Calendar Modal */}
      <Modal
        title={false}
        open={calendarModalVisible}
        onCancel={() => setCalendarModalVisible(false)}
        footer={null}
        centered
        width={1200}
      >
        <div className="flex">
          {/* Left side: Date pickers & calendars */}
          <div className="flex flex-col gap-6 w-2/3 p-6">
            {/* From / To Inputs */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block mb-1 font-medium">From</label>
                <Input value={fromDate.format("DD-MM-YYYY")} readOnly />
              </div>
              <div className="w-1/2">
                <label className="block mb-1 font-medium">To</label>
                <Input value={toDate.format("DD-MM-YYYY")} readOnly />
              </div>
            </div>

            {/* Two calendars side by side */}
            <div className="flex gap-4">
              <div className="border rounded p-2 w-1/2">
                <Calendar
                  fullscreen={false}
                  value={fromDate}
                  onSelect={(date) => setFromDate(date)}
                />
              </div>
              <div className="border rounded p-2 w-1/2">
                <Calendar
                  fullscreen={false}
                  value={toDate}
                  onSelect={(date) => setToDate(date)}
                />
              </div>
            </div>
          </div>

          {/* Right side: Quick filters */}
          <div className="flex flex-col justify-between border-l w-1/3 p-6">
            <div className="space-y-4">
              {[
                "Last 24 hours",
                "Last 7 days",
                "Last 30 days",
                "Custom Range",
              ].map((label) => (
                <p
                  key={label}
                  onClick={() => setActiveRange(label)}
                  className={`cursor-pointer px-2 py-1 rounded ${
                    activeRange === label
                      ? "bg-blue-100 text-blue-700 font-semibold"
                      : "hover:text-blue-600"
                  }`}
                >
                  {label}
                </p>
              ))}
            </div>
            <button

              className="w-full p-2 rounded-xl bg-[#0A1F44] "
            >
              Apply
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
