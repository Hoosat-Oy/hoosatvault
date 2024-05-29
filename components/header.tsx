import Image from 'next/image';
import { Group } from '@mantine/core';

import styles from './header.module.css';

export default function Header(props) {
    return (
        <Group className={styles.header}>
            <div className={styles.child}>{props.children}</div>
            <div>
                <a href='https://network.hoosat.fi' target='_blank' rel='noopener noreferrer'>
                    <Image
                        src='/hoosat-icon.png'
                        alt='Hoosat Logo'
                        className={styles.kaspaLogo}
                        width={48}
                        height={48}
                        priority
                    />
                </a>
            </div>
        </Group>
    );
}
