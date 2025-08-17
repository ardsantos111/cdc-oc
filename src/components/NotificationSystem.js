import React from 'react';
import { useAuth } from '../context/AuthContext';

const NotificationSystem = () => {
    const { notifications, showNotifications, toggleNotifications } = useAuth();

    const getStatusBadge = (status) => {
        switch(status) {
            case "read": return "bg-gray-100 text-gray-800";
            case "unread": return "bg-red-100 text-red-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="relative">
            <button 
                onClick={toggleNotifications}
                className="flex items-center space-x-2 text-sm font-medium text-gray-700"
            >
                <i className="fas fa-bell"></i>
                {notifications.filter(n => !n.read).length > 0 && (
                    <span className="notification-badge">{notifications.filter(n => !n.read).length}</span>
                )}
            </button>
            
            {showNotifications && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-10">
                    <div className="p-4 border-b border-gray-200">
                        <h3 className="text-sm font-medium text-gray-900">Notificações</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                        {notifications.map(notification => (
                            <div key={notification.id} className="px-4 py-3 border-b border-gray-100 last:border-b-0">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${notification.read ? 'bg-gray-100 text-gray-500' : 'bg-blue-100 text-blue-600'}`}>
                                            <i className={`fas fa-info-circle text-sm`}></i>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                                        <p className="text-xs text-gray-500">{notification.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};