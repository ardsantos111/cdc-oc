import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        id: "admin",
        name: "Administrador",
        email: "admin@cda.com",
        companies: [
            { id: "comp1", name: "Empresa A", cnpj: "12.345.678/0001-99" },
            { id: "comp2", name: "Empresa B", cnpj: "98.765.432/0001-11" }
        ],
        permissions: [
            { company_id: "comp1", permission: "all" },
            { company_id: "comp2", permission: "view" }
        ],
        notifications: [
            { id: 1, message: "Novo cliente cadastrado", read: false, time: "agora" },
            { id: 2, message: "Pagamento pendente", read: false, time: "5 min" },
            { id: 3, message: "Contrato próximo do vencimento", read: true, time: "1 hora" }
        ]
    });
    
    const [currentCompany, setCurrentCompany] = React.useState(user.companies[0]);
    const [showNotifications, setShowNotifications] = React.useState(false);

    const login = () => {
        console.log("Login realizado");
    };

    const selectCompany = (company) => {
        setCurrentCompany(company);
    };

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            currentCompany, 
            selectCompany, 
            login,
            showNotifications,
            toggleNotifications,
            notifications: user.notifications
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return React.useContext(AuthContext);
};