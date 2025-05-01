'use client';

import React from 'react';
import { BarChartComponent } from '@/components/BarChartComponent';
import { LassoChartComponent } from '@/components/LassoChartComponent';

const myTasks = [
  {
    listingId: 'LST-2032',
    listingDescription: 'Oceanfront Villa',
    taskNameId: 'Fix plumbing',
    taskNameDescription: 'Main bath leak',
    priority: 'High',
    time: '2025-04-20 14:00',
    priorityProgress: 'Ongoing',
  },
  // Add more tasks...
];

const myMembers = [
  {
    memberName: 'Alice Johnson',
    memberRole: 'Project Manager',
    hours: 36,
    tasks: 7,
    status: 'Active',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?...',
  },
  // Add more members...
];

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-8">

      {/* Statistic Boxes */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: 'Total upsells',
            percent: '+16.24%',
            value: '8,282',
            button: '$652',
          },
          {
            title: 'Total orders',
            percent: '+12.24%',
            value: '17',
            button: '$4029',
          },
          {
            title: 'Total active properties',
            percent: null,
            value: '3',
            button: <i className="bi bi-house-door" />,
          },
          {
            title: 'Total customers',
            percent: '+11.24%',
            value: '15',
            button: <i className="bi bi-people" />,
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-sm rounded-md p-5 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-gray-500 font-semibold">{item.title}</h4>
              {item.percent && (
                <div className="text-xs font-bold text-green-500">
                  <i className="bi bi-arrow-up ml-2" /> {item.percent}
                </div>
              )}
            </div>
            <h4 className="text-2xl font-semibold text-gray-700 pt-2">
              {item.value}
            </h4>
            <div className="flex justify-between items-center pt-2 text-xs text-gray-500 font-bold">
              <a href="#" className="underline">
                View all
              </a>
              <button className="text-sm px-3 py-2 bg-gray-100 hover:bg-gray-50 text-gray-700 font-semibold">
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-3/5 bg-white shadow-sm rounded-md p-6">
          <div className="flex justify-between items-center mb-4 font-semibold text-gray-500">
            Session by Countries
            <div className="flex space-x-2 text-base text-gray-600">
              <i className="bi bi-plus-circle" />
              <i className="bi bi-dash-circle" />
              <i className="bi bi-search" />
              <i className="bi bi-house-door" />
              <i className="bi bi-three-dots-vertical" />
            </div>
          </div>
          <LassoChartComponent />
        </div>

        <div className="w-full xl:w-2/5 bg-white shadow-sm rounded-md p-6">
          <div className="flex justify-between items-center mb-4 font-semibold text-gray-500">
            Current Statistics <i className="bi bi-three-dots-vertical" />
          </div>
          <BarChartComponent />
          <div className="space-y-2 pt-4">
            {[
              { color: 'blue', percent: '+43.29%', value: '$161,466.24' },
              { color: 'green', percent: '+36.16%', value: '$56,411.33' },
              { color: 'red', percent: '+40.22%', value: '$81,981.22' },
              { color: 'yellow', percent: '+25.53%', value: '$12,432.51' },
            ].map((stat, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <div className="flex items-center space-x-1">
                  <span className={`w-3 h-3 bg-${stat.color}-500 rounded-full`} />
                  <span className="text-xs text-gray-500">Income</span>
                  <span className={`text-xs font-bold text-${stat.color}-500`}>
                    <i className="bi bi-arrow-up ml-1" /> {stat.percent}
                  </span>
                </div>
                <span className="text-xs">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tasks and Members Tables */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        {/* My Tasks */}
        <div className="bg-white rounded shadow">
          <div className="flex justify-between px-6 py-4 font-semibold text-gray-500">
            My Tasks
            <i className="bi bi-three-dots-vertical" />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-50 uppercase text-xs font-medium">
                <tr>
                  {['Select', 'Listing', 'Task Name', 'Priority', 'Time', 'Progress', 'Assignee'].map(
                    (h, i) => (
                      <th key={i} className="px-6 py-3 border-b border-gray-200">
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="bg-white">
                {myTasks.map((m, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="w-4 h-4" />
                    </td>
                    <td className="px-6 py-4">
                      <div>{m.listingId}</div>
                      <div className="text-xs text-gray-500">{m.listingDescription}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div>{m.taskNameId}</div>
                      <div className="text-xs text-gray-500">{m.taskNameDescription}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-orange-300 text-white text-xs px-2 rounded">
                        {m.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4">{m.time}</td>
                    <td className="px-6 py-4">
                      <span className="bg-orange-300 text-white text-xs px-2 rounded-full">
                        {m.priorityProgress}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <i className="bi bi-plus-circle" />
                        <i className="bi bi-dash-circle" />
                        <i className="bi bi-search" />
                        <i className="bi bi-house-door" />
                        <i className="bi bi-three-dots-vertical" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Team Members */}
        <div className="bg-white rounded shadow">
          <div className="flex justify-between px-6 py-4 font-semibold text-gray-500">
            Team Members
            <i className="bi bi-three-dots-vertical" />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-50 uppercase text-xs font-medium">
                <tr>
                  {['Member', 'Hours', 'Tasks', 'Status'].map((h, i) => (
                    <th key={i} className="px-6 py-3 border-b border-gray-200">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {myMembers.map((u, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="px-6 py-4 flex items-center space-x-3">
                      <img
                        src={u.avatar}
                        alt={u.memberName}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div>{u.memberName}</div>
                        <div className="text-xs text-gray-500">{u.memberRole}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{u.hours}</td>
                    <td className="px-6 py-4">{u.tasks}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 text-xs px-2 rounded-full">
                        {u.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
