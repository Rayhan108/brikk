
import { useState } from "react"
import { Tabs, Input, Button, Avatar, message } from "antd"
import { CameraOutlined } from "@ant-design/icons"
import { useForm, Controller } from "react-hook-form"
import user from '../../assets/user.png'
const Profile = () => {
  const [activeTab, setActiveTab] = useState("1")

  // Form for Edit Profile
  const {
    control: profileControl,
    handleSubmit: handleProfileSubmit,
    formState: { errors: profileErrors },
  } = useForm({
    defaultValues: {
      userName: "Maria",
    },
  })

  // Form for Change Password
  const {
    control: passwordControl,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  })

  const newPassword = watch("newPassword")

  const onProfileSubmit = (data) => {
    console.log("Profile data:", data)
    message.success("Profile updated successfully!")
  }

  const onPasswordSubmit = (data) => {
    console.log("Password data:", data)
    message.success("Password changed successfully!")
    reset()
  }

  const tabItems = [
    {
      key: "1",
      label: "Edit Profile",
      children: (
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Edit Your Profile</h2>

          <form onSubmit={handleProfileSubmit(onProfileSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">User Name</label>
              <Controller
                name="userName"
                control={profileControl}
                rules={{ required: "User name is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    className="rounded-lg border-gray-300"
                    status={profileErrors.userName ? "error" : ""}
                  />
                )}
              />
              {profileErrors.userName && <p className="text-red-500 text-sm mt-1">{profileErrors.userName.message}</p>}
            </div>

            <button
          
              htmlType="submit"
              size="large"
              className="w-full bg-slate-700 hover:bg-slate-800 border-slate-700 text-white rounded-lg h-12 text-base font-medium"
            >
              Save & Change
            </button>
          </form>
        </div>
      ),
    },
    {
      key: "2",
      label: "Change Password",
      children: (
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Change Password</h2>

          <form onSubmit={handlePasswordSubmit(onPasswordSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
              <Controller
                name="currentPassword"
                control={passwordControl}
                rules={{ required: "Current password is required" }}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    size="large"
                    placeholder="••••••••••"
                    className="rounded-lg border-gray-300"
                    status={passwordErrors.currentPassword ? "error" : ""}
                  />
                )}
              />
              {passwordErrors.currentPassword && (
                <p className="text-red-500 text-sm mt-1">{passwordErrors.currentPassword.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <Controller
                name="newPassword"
                control={passwordControl}
                rules={{
                  required: "New password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                }}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    size="large"
                    placeholder="••••••••••"
                    className="rounded-lg border-gray-300"
                    status={passwordErrors.newPassword ? "error" : ""}
                  />
                )}
              />
              {passwordErrors.newPassword && (
                <p className="text-red-500 text-sm mt-1">{passwordErrors.newPassword.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
              <Controller
                name="confirmPassword"
                control={passwordControl}
                rules={{
                  required: "Please confirm your password",
                  validate: (value) => value === newPassword || "Passwords do not match",
                }}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    size="large"
                    placeholder="••••••••••"
                    className="rounded-lg border-gray-300"
                    status={passwordErrors.confirmPassword ? "error" : ""}
                  />
                )}
              />
              {passwordErrors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{passwordErrors.confirmPassword.message}</p>
              )}
            </div>

          <button
          
              htmlType="submit"
              size="large"
              className="w-full bg-slate-700 hover:bg-slate-800 border-slate-700 text-white rounded-lg h-12 text-base font-medium"
            >
              Save & Change
            </button>
          </form>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen  py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-slate-700 rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-center">
            <div className="relative">
              <Avatar
                size={80}
                src={user}
                className="border-4 border-white"
              />
              {activeTab === "1" && (
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                  <CameraOutlined className="text-gray-600 text-sm" />
                </div>
              )}
            </div>
            <div className="ml-6 text-white">
              <h1 className="text-3xl font-bold">Maria</h1>
              <p className="text-slate-300 text-lg">Admin</p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className=" rounded-2xl ">
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            centered
            size="large"
            className="profile-tabs"
            items={tabItems}
          />
        </div>
      </div>

      <style jsx>{`
        :global(.profile-tabs .ant-tabs-nav) {
          margin-bottom: 0;
          padding: 0 24px;
        }
        
        :global(.profile-tabs .ant-tabs-tab) {
          padding: 16px 24px;
          font-size: 16px;
          font-weight: 500;
          color: #6b7280;
        }
        
        :global(.profile-tabs .ant-tabs-tab-active) {
          color: #374151;
        }
        
        :global(.profile-tabs .ant-tabs-ink-bar) {
          background: #374151;
          height: 3px;
        }
        
        :global(.profile-tabs .ant-tabs-content-holder) {
          padding: 40px 24px;
        }
        
        :global(.ant-input-affix-wrapper) {
          border-radius: 8px;
        }
        
        :global(.ant-input) {
          border-radius: 8px;
        }
      `}</style>
    </div>
  )
}

export default Profile
