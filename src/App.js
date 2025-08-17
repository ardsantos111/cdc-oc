import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import CompanySelector from './components/CompanySelector';
import NotificationSystem from './components/NotificationSystem';

const App = () => {
    const { currentCompany } = useAuth();

    return (
        <AuthProvider>
            <div className="flex h-screen bg-gray-50">
                {/* Sidebar */}
                <div className="w-64 bg-white shadow-lg">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-800">Menu Principal</h2>
                    </div>
                    
                    <nav className="flex-1 px-2 py-4 space-y-1">
                        <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-blue-600 bg-blue-50 rounded-md">
                            <i className="fas fa-tachometer-alt w-5"></i>
                            <span className="ml-3">Dashboard</span>
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md">
                            <i className="fas fa-users w-5"></i>
                            <span className="ml-3">Clientes</span>
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md">
                            <i className="fas fa-shopping-cart w-5"></i>
                            <span className="ml-3">Compras</span>
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md">
                            <i className="fas fa-credit-card w-5"></i>
                            <span className="ml-3">Pagamentos</span>
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md">
                            <i className="fas fa-chart-bar w-5"></i>
                            <span className="ml-3">Relatórios</span>
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md">
                            <i className="fas fa-cog w-5"></i>
                            <span className="ml-3">Configurações</span>
                        </a>
                    </nav>
                </div>
                
                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Header */}
                    <header className="bg-white shadow-sm z-10">
                        <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200">
                            <div className="flex items-center space-x-4">
                                <h1 className="text-xl font-bold text-blue-600">CDC OC</h1>
                                <CompanySelector />
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <NotificationSystem />
                                <div className="flex items-center space-x-2">
                                    <img 
                                        src="https://picsum.photos/seed/admin-avatar/40/40" 
                                        alt="Admin Avatar" 
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span className="font-medium text-gray-700">Administrador</span>
                                </div>
                            </div>
                        </div>
                    </header>
                    
                    {/* Page Content */}
                    <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
                        <Dashboard />
                    </main>
                </div>
            </AuthProvider>
        );
    };
};

export default App;