import React from 'react';
import { useAuth } from '../context/AuthContext';

const CompanySelector = () => {
    const { user, currentCompany, selectCompany } = useAuth();

    return (
        <div className="relative">
            <button 
                onClick={() => selectCompany(user.companies[1])}
                className="flex items-center space-x-2 text-sm font-medium text-gray-700"
            >
                <span>{currentCompany?.name || 'Selecionar Empresa'}</span>
                <i className="fas fa-chevron-down"></i>
            </button>
            
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                {user.companies.map(company => (
                    <button
                        key={company.id}
                        onClick={() => selectCompany(company)}
                        className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 hover:text-gray-900"
                    >
                        {company.name} ({company.cnpj})
                    </button>
                ))}
            </div>
        </div>
    );
};