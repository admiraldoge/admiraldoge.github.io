import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Layout.module.scss'
type LayoutProps = {
    title?: string
}
const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
    <div className={styles.ctn}>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {children}
    </div>
)
export default Layout