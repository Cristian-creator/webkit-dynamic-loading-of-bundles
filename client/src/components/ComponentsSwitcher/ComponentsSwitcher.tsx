import React from 'react'

const LeftSidebarAndApiOne = React.lazy(() => import('./LeftSidebarAndApiOne'));
const LeftSidebarAndApiTwo = React.lazy(() => import('./LeftSidebarAndApiTwo'));
const RightSidebarAndApiOne = React.lazy(() => import('./RightSidebarAndApiOne'));
const RightSidebarAndApiTwo = React.lazy(() => import('./RightSidebarAndApiTwo'));

interface ComponentsSwitcherProps {
    modules: string,
};

const ComponentsSwitcher: React.FC<ComponentsSwitcherProps> = ({ modules }) => {

    const renderedComponents = () => {
        switch(modules) {
            case 'changesidebar':
                return ( <RightSidebarAndApiOne />);
            case 'newlist':
                return ( <LeftSidebarAndApiTwo /> );
            case 'changesidebar,newlist':
                return ( <RightSidebarAndApiTwo /> );
            case 'newlist,changesidebar':
                return ( <RightSidebarAndApiTwo /> );
            default:
                return ( <LeftSidebarAndApiOne /> );
        }
    };

    return (
    <div>
        { renderedComponents() }
    </div>
  )
}

export default ComponentsSwitcher;