import React from 'react';
import './style.css';

const SectionHeader = ({children}) => {
    return <code className={'header'}>~$ cat {children}</code>
};

export default SectionHeader;
