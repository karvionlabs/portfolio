import React from 'react';
import Window from '../os/Window';

export interface AdminControlPanelProps extends WindowAppProps {}

const AdminControlPanel: React.FC<AdminControlPanelProps> = (props) => {
    return (
        <Window
            top={30}
            left={60}
            width={900}
            height={620}
            windowBarIcon="computerSmall"
            windowTitle="Admin Control Panel & Database — Abdullah Karif Shahjada"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText="Admin Settings & Database Sync"
        >
            <div className="site-page" style={{ width: '100%', height: '100%', padding: 0, overflow: 'hidden' }}>
                <iframe
                    src="/admin.html"
                    title="Admin Control Panel"
                    width="100%"
                    height="100%"
                    style={{ border: 'none', width: '100%', height: '100%' }}
                />
            </div>
        </Window>
    );
};

export default AdminControlPanel;
