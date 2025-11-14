'use client';

import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';
import { FiFileText, FiEdit, FiTrash2, FiBox } from 'react-icons/fi';
import CreateModal from './CreateModal';
import EditModal from './EditModal';
import { LuBookText } from 'react-icons/lu';

const { TextArea } = Input;

const KnowledgeHub = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);


  const cards = [
    {
      id: 1,
      icon: <LuBookText className="w-6 h-6" />,
      title: 'Education & Training',
      description: 'Practical guides on Property management and operation',
    },
    {
      id: 2,
      icon: <FiFileText className="w-6 h-6" />,
      title: 'Legal & Regulatory Updates',
      description: 'New laws, short-changes, and compliance requirements',
    },
    {
      id: 3,
      icon: <FiEdit className="w-6 h-6" />,
      title: 'Industry Trends',
      description: 'Insights into real estate and cognate factors',
    },
    {
      id: 4,
      icon: <FiBox className="w-6 h-6" />,
      title: 'Bribk Opportunities',
      description: 'New features: reels and programme from',
    },
  ];

  const openCreateModal = () => {

    setIsCreateModalOpen(true);
  };

  const openEditModal = () => {

    setIsEditModalOpen(true);
  };

  const openDeleteModal = () => {

    setIsDeleteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Knowledge Hub</h1>
        <button
          onClick={openCreateModal}
          className="px-6 py-2 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
        >
          Create New
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <div className="text-blue-500">{card.icon}</div>
            </div>

            <h3 className="text-base font-semibold text-blue-600 mb-2">
              {card.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {card.description}
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => openEditModal(card)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FiEdit className="w-4 h-4" />
              </button>

              <button
                onClick={() => openDeleteModal(card)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FiTrash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CREATE MODAL */}
      <Modal
        open={isCreateModalOpen}
        onCancel={() => setIsCreateModalOpen(false)}
        footer={null}
        width={1000}
        centered
      >
        <CreateModal/>
      </Modal>

      {/* EDIT MODAL */}
      <Modal
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        footer={null}
        width={1000}
        centered
      >
        <EditModal/>
      </Modal>

      {/* DELETE CONFIRM MODAL — PIXEL PERFECT */}
      <Modal
        open={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        footer={null}
        width={400}
        centered
      >
        <h2 className="text-xl font-semibold text-center mb-6">
          Are you sure you want to delete ?
        </h2>

        <Button
          block
          className="h-12 bg-[#0D1A3A] text-white text-base font-medium rounded-lg hover:bg-[#0b1530]"
          onClick={() => setIsDeleteModalOpen(false)}
        >
          Yes
        </Button>

        <Button
          block
          className="h-12 mt-3 border border-gray-300 text-base font-medium rounded-lg"
          onClick={() => setIsDeleteModalOpen(false)}
        >
          No
        </Button>
      </Modal>
    </div>
  );
};

export default KnowledgeHub;
